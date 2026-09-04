import { Head } from 'vite-react-ssg'
import { site } from '../data/site'

/** Aperçu de partage par défaut, quand une page n'en désigne pas. */
const IMAGE_PAR_DEFAUT = '/assets/picture/portfolio-mariage.avif'

/**
 * Traduit une photo du site en son aperçu de partage.
 *
 * Facebook, Messenger, WhatsApp et LinkedIn ne lisent pas l'AVIF et attendent
 * un cadrage paysage : `scripts/generer-images-partage.mjs` produit, pour
 * chaque photo servant d'aperçu, un JPEG 1200x630 dans /assets/partage/ en
 * miroir de l'arborescence. On se contente donc de réécrire le chemin.
 */
function versImagePartage(chemin) {
  return chemin
    .replace('/assets/picture/', '/assets/partage/')
    .replace(/\.avif$/, '.jpg')
}

/**
 * Métadonnées d'une page. Le rendu étant pré-généré au build, ces balises
 * se trouvent réellement dans le HTML servi : les moteurs de recherche
 * comme les aperçus de partage (Facebook, WhatsApp, LinkedIn) les lisent
 * sans avoir besoin d'exécuter JavaScript.
 */
export function Seo({
  titre,
  description,
  chemin,
  image = IMAGE_PAR_DEFAUT,
  imageAlt,
  type = 'website',
  noindex = false,
  children,
}) {
  const titreComplet =
    chemin === '/' ? `${site.nom} — ${site.baseline}` : `${titre} | ${site.nom}`
  const url = `${site.url}${chemin === '/' ? '' : chemin}`
  const imageAbsolue = image.startsWith('http')
    ? image
    : `${site.url}${versImagePartage(image)}`

  return (
    <Head>
      <html lang="fr" />
      <title>{titreComplet}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, follow" />}

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={site.nom} />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:title" content={titreComplet} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      {/* Dimensions déclarées : le réseau dessine le cadre sans attendre le
          téléchargement de l'image, donc l'aperçu apparaît du premier coup. */}
      <meta property="og:image" content={imageAbsolue} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content={imageAlt ?? `${site.nom} — ${site.baseline}`}
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={titreComplet} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageAbsolue} />
      <meta
        name="twitter:image:alt"
        content={imageAlt ?? `${site.nom} — ${site.baseline}`}
      />

      {children}
    </Head>
  )
}

/** Données structurées : aide Google à afficher une fiche entreprise. */
export function DonneesStructurees() {
  const donnees = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    additionalType: 'https://schema.org/Photograph',
    name: site.nom,
    description: `${site.baseline}. ${site.zone}`,
    url: site.url,
    image: `${site.url}${versImagePartage(IMAGE_PAR_DEFAUT)}`,
    telephone: site.telephoneLien,
    email: site.email,
    // Doit rester aligné sur src/data/prestations.js : séance Silver la moins
    // chère, formule mariage Prestige la plus chère.
    priceRange: '290 € – 2 800 €',
    areaServed: { '@type': 'Country', name: 'France' },
    founder: { '@type': 'Person', name: site.photographe },
    sameAs: [site.reseaux.instagram, site.reseaux.facebook],
    makesOffer: [
      { '@type': 'Offer', name: 'Reportage de mariage', priceCurrency: 'EUR', price: '1500' },
      { '@type': 'Offer', name: 'Séance grossesse', priceCurrency: 'EUR', price: '290' },
      { '@type': 'Offer', name: 'Séance naissance', priceCurrency: 'EUR', price: '290' },
    ],
  }

  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(donnees)}</script>
    </Head>
  )
}
