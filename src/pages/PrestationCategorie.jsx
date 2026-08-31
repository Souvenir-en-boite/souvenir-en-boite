import { Link } from 'react-router-dom'
import { Head } from 'vite-react-ssg'
import { ArrowLeft, Check, Info } from 'lucide-react'
import { Seo } from '../components/Seo'
import { Container, Bouton, TitreSection } from '../components/ui'
import { icones } from '../components/icons'
import { prestations } from '../data/prestations'
import { site } from '../data/site'

const meta = {
  mariage: {
    titre: 'Tarifs photographe mariage',
    description:
      'Formules Essentielle, Émotion et Prestige pour votre reportage de mariage, de 1 200 € à 2 200 €. Formules entièrement personnalisables.',
  },
  grossesse: {
    titre: 'Tarifs photographe grossesse',
    description:
      'Formules Silver, Gold et Diamond pour votre séance grossesse, à partir de 290 €, en studio ou en extérieur.',
  },
  naissance: {
    titre: 'Tarifs photographe naissance',
    description:
      'Formules Silver, Gold et Diamond pour votre séance nouveau-né, à partir de 290 €.',
  },
}

function DonneesFormules({ cle, details }) {
  const donnees = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: `Photographie ${details.titre.toLowerCase()}`,
    provider: { '@type': 'LocalBusiness', name: site.nom, url: site.url },
    areaServed: { '@type': 'Country', name: 'France' },
    url: `${site.url}/prestations/${cle}`,
    offers: details.formules.map((f) => ({
      '@type': 'Offer',
      name: f.nom,
      price: f.prix.replace(/[^\d]/g, ''),
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
    })),
  }
  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(donnees)}</script>
    </Head>
  )
}

export default function PrestationCategorie({ cle }) {
  const details = prestations[cle]
  const Icone = icones[cle]

  return (
    <>
      <Seo
        chemin={`/prestations/${cle}`}
        titre={meta[cle].titre}
        description={meta[cle].description}
        image={details.couverture}
      />
      <DonneesFormules cle={cle} details={details} />

      <Container className="pt-14 pb-12 lg:pt-20">
        <nav aria-label="Fil d'Ariane" className="mb-8">
          <Link
            to="/prestations"
            className="eyebrow inline-flex items-center gap-2 text-ink-soft transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Toutes les prestations
          </Link>
        </nav>

        <Icone className="h-12 w-12 text-taupe-dark" />
        <TitreSection
          niveau={1}
          className="mt-5"
          eyebrow="Les formules"
          titre={details.titre}
          description={details.intro}
        />
      </Container>

      <Container className="pb-16 lg:pb-20">
        <ul className="grid gap-6 lg:grid-cols-3">
          {details.formules.map((formule) => (
            <li
              key={formule.nom}
              className={`flex flex-col border ${
                formule.misEnAvant ? 'border-taupe bg-sand' : 'border-line bg-cream'
              }`}
            >
              <img
                src={formule.image}
                alt={formule.imageAlt}
                width="970"
                height="1174"
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-8">
                <h2 className="font-display text-3xl uppercase tracking-wide">
                  {formule.nom}
                </h2>
                <p className="mt-2 font-display text-4xl text-taupe-dark">
                  {formule.prix}
                </p>
                <span className="mt-6 block h-px w-12 bg-taupe" />
                <ul className="mt-6 flex flex-1 flex-col gap-4">
                  {formule.inclus.map((ligne, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-taupe-dark" aria-hidden="true" />
                      <span>{ligne}</span>
                    </li>
                  ))}
                </ul>
                <Bouton
                  to="/contact"
                  variante={formule.misEnAvant ? 'plein' : 'contourSombre'}
                  className="mt-8 w-full"
                >
                  Demander cette formule
                </Bouton>
              </div>
            </li>
          ))}
        </ul>
      </Container>

      <Container className="pb-16 lg:pb-24">
        <div className="border-l-2 border-taupe bg-sand px-7 py-8 lg:px-10">
          <h2 className="flex items-center gap-3 font-display text-2xl">
            <Info className="h-5 w-5 text-taupe-dark" aria-hidden="true" />
            Bon à savoir
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-ink-soft">{details.info}</p>
          {details.complement && (
            <p className="mt-4 max-w-3xl leading-relaxed text-ink-soft">
              {details.complement}
            </p>
          )}
          {details.offre && (
            <p className="mt-5 max-w-3xl font-medium text-taupe-dark">{details.offre}</p>
          )}
          <Bouton to="/contact" className="mt-8">
            Me contacter
          </Bouton>
        </div>
      </Container>
    </>
  )
}
