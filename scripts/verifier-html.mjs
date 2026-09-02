// Contrôle du HTML réellement généré : structure, accessibilité de base et
// données structurées. À relancer après chaque build (`node scripts/verifier-html.mjs`).
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { JSDOM } from 'jsdom'

const html = []
;(function walk(d) {
  for (const e of readdirSync(d)) {
    const p = join(d, e)
    if (statSync(p).isDirectory()) walk(p)
    else if (e.endsWith('.html')) html.push(p)
  }
})('dist')

let echecs = 0
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
    const src = (img.getAttribute('src') || '').split('/').pop()
    if (img.getAttribute('alt') === null) ko(f, 'img sans alt : ' + src)
    if (!img.getAttribute('width') || !img.getAttribute('height')) ko(f, 'img sans width/height : ' + src)
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
  '\n' + html.length + ' fichiers HTML, ' + avif.length + ' images AVIF — ' +
  (echecs === 0 ? 'aucun problème détecté ✓' : echecs + ' problème(s)')
)
process.exit(echecs === 0 ? 0 : 1)
