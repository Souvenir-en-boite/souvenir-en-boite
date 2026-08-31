// Exécuté après `vite-react-ssg build`. Produit ce qu'un site statique doit
// servir en plus du HTML : plan du site, robots.txt, redirections des anciennes
// adresses et page 404 à la racine.

import { readFile, writeFile, mkdir, copyFile, access } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { site } from '../src/data/site.js'

const racine = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(racine, 'dist')

// Pages indexables. Les pages légales, /merci et /404 en sont volontairement
// exclues : elles portent déjà `noindex` et n'ont rien à faire dans les
// résultats de recherche.
const pages = [
  { chemin: '/', priorite: '1.0', frequence: 'monthly' },
  { chemin: '/portfolio', priorite: '0.9', frequence: 'monthly' },
  { chemin: '/portfolio/mariage', priorite: '0.8', frequence: 'monthly' },
  { chemin: '/portfolio/grossesse', priorite: '0.8', frequence: 'monthly' },
  { chemin: '/portfolio/naissance', priorite: '0.8', frequence: 'monthly' },
  { chemin: '/prestations', priorite: '0.9', frequence: 'monthly' },
  { chemin: '/prestations/mariage', priorite: '0.8', frequence: 'monthly' },
  { chemin: '/prestations/grossesse', priorite: '0.8', frequence: 'monthly' },
  { chemin: '/prestations/naissance', priorite: '0.8', frequence: 'monthly' },
  { chemin: '/a-propos', priorite: '0.7', frequence: 'yearly' },
  { chemin: '/contact', priorite: '0.9', frequence: 'yearly' },
]

// Anciennes adresses du site, conservées pour ne pas casser les liens déjà
// partagés ni perdre le référencement acquis.
const redirections = {
  '/tarifs': '/prestations',
  '/tarifs/mariage': '/prestations/mariage',
  '/tarifs/grossesse': '/prestations/grossesse',
  '/tarifs/naissance': '/prestations/naissance',
  // Coquille présente dans l'ancien menu.
  '/politque-de-confidentialite': '/politique-de-confidentialite',
}

const existe = async (p) => access(p).then(() => true, () => false)

async function ecrire(cheminRelatif, contenu) {
  const complet = join(dist, cheminRelatif)
  await mkdir(dirname(complet), { recursive: true })
  await writeFile(complet, contenu, 'utf8')
}

async function genererSitemap() {
  const date = new Date().toISOString().slice(0, 10)
  const urls = pages
    .map(({ chemin, priorite, frequence }) => {
      const url = `${site.url}${chemin === '/' ? '/' : chemin}`
      return `  <url>
    <loc>${url}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>${frequence}</changefreq>
    <priority>${priorite}</priority>
  </url>`
    })
    .join('\n')

  await ecrire(
    'sitemap.xml',
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`,
  )
  return pages.length
}

async function genererRobots() {
  await ecrire(
    'robots.txt',
    `User-agent: *
Allow: /

Sitemap: ${site.url}/sitemap.xml
`,
  )
}

async function genererRedirections() {
  // Fichier compris par Netlify et Cloudflare Pages : vraie redirection 301.
  const regles = Object.entries(redirections)
    .map(([de, vers]) => `${de}  ${vers}  301`)
    .join('\n')
  await ecrire('_redirects', `${regles}\n/*  /404.html  404\n`)

  // Repli universel : une page HTML qui redirige immédiatement, pour les
  // hébergeurs sans fichier de configuration. `canonical` indique au moteur
  // de recherche quelle adresse fait foi.
  for (const [de, vers] of Object.entries(redirections)) {
    const destination = `${site.url}${vers}`
    await ecrire(
      join(de.slice(1), 'index.html'),
      `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <title>Page déplacée</title>
    <link rel="canonical" href="${destination}" />
    <meta name="robots" content="noindex, follow" />
    <meta http-equiv="refresh" content="0; url=${vers}" />
  </head>
  <body>
    <p>Cette page a été déplacée : <a href="${vers}">${destination}</a></p>
  </body>
</html>
`,
    )
  }
  return Object.keys(redirections).length
}

async function genererPage404() {
  // Beaucoup d'hébergeurs cherchent /404.html à la racine.
  const source = join(dist, '404', 'index.html')
  if (await existe(source)) {
    await copyFile(source, join(dist, '404.html'))
    return true
  }
  console.warn('  ⚠️  dist/404/index.html introuvable : /404.html non généré')
  return false
}

const nbPages = await genererSitemap()
await genererRobots()
const nbRedirections = await genererRedirections()
const ok404 = await genererPage404()

console.log(
  `\n[post-build] sitemap.xml (${nbPages} pages) · robots.txt · ${nbRedirections} redirections · 404.html ${ok404 ? '✓' : '✗'}`,
)
