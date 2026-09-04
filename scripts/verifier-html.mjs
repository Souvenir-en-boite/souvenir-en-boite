// Contrôle du HTML réellement généré : structure, accessibilité de base et
// données structurées. À relancer après chaque build (`node scripts/verifier-html.mjs`).
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { JSDOM } from 'jsdom'
import sharp from 'sharp'

const html = []
;(function walk(d) {
  for (const e of readdirSync(d)) {
    const p = join(d, e)
    if (statSync(p).isDirectory()) walk(p)
    else if (e.endsWith('.html')) html.push(p)
  }
})('dist')

let echecs = 0
const aVerifier = []
const apercus = []
const ko = (f, m) => { console.log('  ✗ ' + f.replace('dist', '') + ' — ' + m); echecs++ }
const ignorer = (f) =>
  f.includes('/tarifs/') || f.includes('politque') || f === 'dist/404.html'

for (const f of html.sort()) {
  if (ignorer(f)) continue
  const doc = new JSDOM(readFileSync(f, 'utf8')).window.document

  if (doc.documentElement.lang !== 'fr') ko(f, 'lang != fr')
  const titres = doc.querySelectorAll('title').length
  if (titres !== 1) ko(f, titres + ' balises <title>')

  const h1 = doc.querySelectorAll('h1')
  if (h1.length !== 1) ko(f, h1.length + ' <h1> (attendu : 1)')

  const texte = doc.querySelector('#root')?.textContent.trim() ?? ''
  if (texte.length < 400) ko(f, 'contenu pré-rendu trop court (' + texte.length + ' caractères)')

  for (const img of doc.querySelectorAll('img')) {
    const chemin = img.getAttribute('src') || ''
    const src = chemin.split('/').pop()
    if (img.getAttribute('alt') === null) ko(f, 'img sans alt : ' + src)
    const l = img.getAttribute('width')
    const h = img.getAttribute('height')
    if (!l || !h) {
      ko(f, 'img sans width/height : ' + src)
    } else if (chemin.startsWith('/assets')) {
      // Des dimensions inexactes réservent la mauvaise place avant chargement :
      // la page saute au moment où l'image arrive. La présence des attributs ne
      // suffit pas, encore faut-il qu'ils correspondent au fichier.
      aVerifier.push({ f, src, chemin, l: +l, h: +h })
    }
  }

  // Aperçu de partage. Facebook, Messenger, WhatsApp et LinkedIn ne lisent
  // pas l'AVIF : une og:image dans ce format donne un aperçu sans visuel,
  // sans le moindre message d'erreur. On exige donc un JPEG ou un PNG, et des
  // dimensions déclarées conformes au fichier.
  const og = (n) => doc.querySelector(`meta[property="og:${n}"]`)?.getAttribute('content') || ''
  for (const n of ['title', 'description', 'url', 'image']) {
    if (!og(n)) ko(f, 'og:' + n + ' absente ou vide')
  }
  const apercu = og('image')
  if (apercu && !apercu.startsWith('http')) {
    ko(f, 'og:image doit être une adresse absolue : ' + apercu)
  } else if (apercu) {
    apercus.push({
      f,
      chemin: new URL(apercu).pathname,
      l: +og('image:width'),
      h: +og('image:height'),
      alt: og('image:alt'),
    })
  }

  for (const s of doc.querySelectorAll('script[type="application/ld+json"]')) {
    try { JSON.parse(s.textContent) } catch { ko(f, 'JSON-LD invalide') }
  }

  // Chaque lien doit exposer un intitulé (texte ou alternative accessible).
  for (const a of doc.querySelectorAll('a')) {
    const nom = (a.textContent || '').trim() || a.getAttribute('aria-label') || ''
    if (!nom) ko(f, 'lien sans intitulé : ' + (a.getAttribute('href') || '?'))
  }

  // Hiérarchie des titres : aucun niveau sauté.
  let precedent = 1
  for (const t of doc.querySelectorAll('h1,h2,h3,h4')) {
    const n = +t.tagName[1]
    if (n > precedent + 1) ko(f, 'saut h' + precedent + ' -> h' + n + ' ("' + t.textContent.trim().slice(0, 32) + '")')
    precedent = n
  }
}

// --- Dimensions déclarées contre dimensions réelles ----------------------
const tailles = new Map()
for (const { f, src, chemin, l, h } of aVerifier) {
  if (!tailles.has(chemin)) {
    try {
      const m = await sharp('public' + chemin).metadata()
      tailles.set(chemin, [m.width, m.height])
    } catch {
      tailles.set(chemin, null)
    }
  }
  const reel = tailles.get(chemin)
  if (!reel) { ko(f, 'image introuvable dans public/ : ' + src); continue }
  if (reel[0] !== l || reel[1] !== h) {
    ko(f, `dimensions déclarées ${l}x${h} mais fichier ${reel[0]}x${reel[1]} : ${src}`)
  }
}

// --- Images d'aperçu de partage ------------------------------------------
// Pour (re)générer ces fichiers : node scripts/generer-images-partage.mjs
const partages = new Map()
for (const { f, chemin, l, h, alt } of apercus) {
  if (!partages.has(chemin)) {
    try {
      const m = await sharp('public' + chemin).metadata()
      partages.set(chemin, m)
    } catch {
      partages.set(chemin, null)
    }
  }
  const m = partages.get(chemin)
  if (!m) { ko(f, 'og:image introuvable dans public/ : ' + chemin); continue }
  if (m.format !== 'jpeg' && m.format !== 'png') {
    ko(f, `og:image en ${m.format} : illisible par Facebook et Messenger (${chemin})`)
  }
  if (!l || !h) ko(f, 'og:image:width / og:image:height absentes')
  else if (m.width !== l || m.height !== h) {
    ko(f, `og:image annoncée ${l}x${h} mais fichier ${m.width}x${m.height} : ${chemin}`)
  }
  if (!alt) ko(f, 'og:image:alt absente : ' + chemin)
}

// --- Contrôle des AVIF ---------------------------------------------------
// `sips -s format avif` produit des AVIF découpés en grille de tuiles que
// Chrome ne décode pas toujours : l'image apparaît alors vide, sans erreur,
// avec des dimensions correctes et `complete === true`. Impossible à repérer
// à la lecture du code. On refuse donc tout AVIF en grille.
// Pour convertir des photos : node scripts/convertir-photos.mjs
const avif = []
;(function walk(d) {
  for (const e of readdirSync(d)) {
    const p = join(d, e)
    if (statSync(p).isDirectory()) walk(p)
    else if (e.endsWith('.avif')) avif.push(p)
  }
})('public/assets')

let grilles = 0
for (const f of avif) {
  const entete = readFileSync(f).subarray(0, 4096)
  if (entete.includes(Buffer.from('grid'))) {
    console.log('  ✗ ' + f + ' — AVIF en grille de tuiles : risque d\'image vide dans Chrome')
    grilles++
    echecs++
  }
}

console.log(
  '\n' + html.length + ' fichiers HTML, ' + tailles.size + ' images vérifiées, ' + partages.size + ' aperçus de partage, ' + avif.length + ' AVIF — ' +
  (echecs === 0 ? 'aucun problème détecté ✓' : echecs + ' problème(s)')
)
process.exit(echecs === 0 ? 0 : 1)
