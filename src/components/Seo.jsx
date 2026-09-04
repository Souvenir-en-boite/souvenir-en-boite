import { Head } from 'vite-react-ssg'
import { site } from '../data/site'

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
  image = '/assets/picture/portfolio-mariage.avif',
  type = 'website',
  noindex = false,
  children,
}) {
  const titreComplet =
    chemin === '/' ? `${site.nom} — ${site.baseline}` : `${titre} | ${site.nom}`
  const url = `${site.url}${chemin === '/' ? '' : chemin}`
  const imageAbsolue = image.startsWith('http') ? image : `${site.url}${image}`

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
      <meta property="og:image" content={imageAbsolue} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={titreComplet} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageAbsolue} />

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
    image: `${site.url}/assets/picture/portfolio-mariage.avif`,
    telephone: site.telephoneLien,
    email: site.email,
    priceRange: '290 € – 2 200 €',
    areaServed: { '@type': 'Country', name: 'France' },
    founder: { '@type': 'Person', name: site.photographe },
    sameAs: [site.reseaux.instagram, site.reseaux.facebook],
    makesOffer: [
      { '@type': 'Offer', name: 'Reportage de mariage', priceCurrency: 'EUR', price: '1200' },
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
