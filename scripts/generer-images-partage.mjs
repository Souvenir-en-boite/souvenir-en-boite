// Génère les images d'aperçu de partage (Facebook, Messenger, WhatsApp,
// LinkedIn) à partir des photos du site.
//
//   node scripts/generer-images-partage.mjs
//
// Deux contraintes imposent des fichiers dédiés plutôt que de réutiliser les
// photos du site :
//   - ces réseaux NE LISENT PAS l'AVIF. Le format doit être JPEG (ou PNG).
//   - ils attendent un cadrage paysage d'environ 1,91:1 ; une photo verticale
//     serait recadrée n'importe comment.
//
// Le script produit donc des JPEG 1200x630 dans public/assets/partage/, en
// miroir de l'arborescence source. `scripts/verifier-html.mjs` refuse ensuite
// toute balise og:image qui ne pointerait pas vers un fichier existant de ce
// dossier.

import { mkdir } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import sharp from 'sharp'

const LARGEUR = 1200
const HAUTEUR = 630

// Chemins relatifs à public/assets/picture/, et point d'ancrage du recadrage.
// `position` décide de ce qu'on garde quand la photo est plus haute que large.
const IMAGES = [
  { src: 'portfolio-mariage.avif', position: 'top' },
  { src: 'sarah.avif', position: 'top' },
  { src: 'accueil/univers-mariage.avif', position: 'top' },
  { src: 'accueil/univers-grossesse.avif', position: 'top' },
  { src: 'accueil/univers-naissance.avif', position: 'centre' },
  { src: 'prestations/hero-prestations-mariage.avif', position: 'centre' },
  { src: 'prestations/hero-prestations-grossesse.avif', position: 'centre' },
  { src: 'prestations/hero-prestations-naissance.avif', position: 'centre' },
]

console.log(`\nImages de partage — ${LARGEUR}x${HAUTEUR}, JPEG\n`)

for (const { src, position } of IMAGES) {
  const entree = join('public/assets/picture', src)
  const sortie = join('public/assets/partage', src.replace(/\.avif$/, '.jpg'))
  await mkdir(dirname(sortie), { recursive: true })

  const info = await sharp(entree)
    .resize(LARGEUR, HAUTEUR, {
      fit: 'cover',
      position: position === 'top' ? sharp.gravity.north : sharp.gravity.centre,
    })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(sortie)

  console.log(
    `  ${sortie.replace('public', '').padEnd(52)} ${String(Math.round(info.size / 1024)).padStart(4)} Ko`,
  )
}

console.log()
