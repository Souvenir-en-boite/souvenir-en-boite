import { Link } from 'react-router-dom'
import { Head } from 'vite-react-ssg'
import {
  ArrowLeft, ArrowRight, Check, Info, Heart,
  Sparkles, Church, DoorOpen, Mic, Music, Martini, Cake, Film,
} from 'lucide-react'
import { Seo } from '../components/Seo'
import { Container, Bouton } from '../components/ui'
import { iconesFormule, IconVideo, SeparateurCoeur } from '../components/icons'
import { prestations } from '../data/prestations'
import { site, univers } from '../data/site'

const meta = {
  mariage: {
    titre: 'Tarifs photographe mariage',
    description:
      'Formules Essentielle, Émotion et Prestige pour votre reportage de mariage, de 1 500 € à 2 800 €. Formules entièrement personnalisables.',
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

const iconesEtape = {
  preparatifs: Sparkles,
  ceremonie: Church,
  entree: DoorOpen,
  discours: Mic,
  moments: Heart,
  bal: Music,
  cocktail: Martini,
  piece: Cake,
  film: Film,
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

function Hero({ details }) {
  return (
    // La marge basse généreuse laisse les cartes remonter sur la photo.
    <section className="relative isolate overflow-hidden pt-12 pb-36 lg:pt-16 lg:pb-48">
      <img
        src={details.hero.src}
        alt={details.hero.alt}
        width={details.hero.width}
        height={details.hero.height}
        fetchpriority="high"
        style={{ objectPosition: details.hero.cadrage ?? 'center' }}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(34,32,29,.88)_0%,rgba(34,32,29,.6)_50%,rgba(34,32,29,.3)_100%)] lg:bg-[linear-gradient(90deg,rgba(34,32,29,.9)_0%,rgba(34,32,29,.66)_32%,rgba(34,32,29,.25)_62%,rgba(34,32,29,.05)_82%)]"
        aria-hidden="true"
      />

      <Container>
        <nav aria-label="Fil d'Ariane" className="mb-8">
          <Link
            to="/prestations"
            className="eyebrow inline-flex items-center gap-2 text-cream/80 transition-colors hover:text-cream"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Toutes les prestations
          </Link>
        </nav>

        <div className="max-w-2xl text-cream">
          <p className="eyebrow text-cream/85">{details.eyebrow}</p>
          <SeparateurCoeur className="mt-4" tonalite="text-cream/70" />
          <h1 className="mt-6 font-display text-4xl leading-[1.12] sm:text-5xl">
            {details.heroTitre}
          </h1>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-cream/90">
            {details.heroTexte}
          </p>
        </div>
      </Container>
    </section>
  )
}

function CarteFormule({ formule }) {
  const Icone = iconesFormule[formule.icone]
  const vedette = formule.coupDeCoeur

  return (
    <li className={`relative flex ${vedette ? 'lg:-mt-7' : ''}`}>
      {vedette && (
        <p className="absolute -top-4 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap bg-taupe px-5 py-2 eyebrow text-ink">
          <Heart className="mr-2 inline h-3.5 w-3.5 fill-current" aria-hidden="true" />
          Coup de cœur
        </p>
      )}

      <div
        className={`flex flex-1 flex-col border bg-cream px-7 py-10 text-center lg:px-9 ${
          vedette ? 'border-taupe shadow-lg shadow-ink/5' : 'border-line'
        }`}
      >
        <Icone className="mx-auto h-11 w-11 text-taupe-dark" />
        <h2 className="mt-5 font-display text-2xl uppercase tracking-[0.12em]">
          {formule.nom}
        </h2>
        {formule.sousTitre && (
          <p className="mt-2 text-sm text-ink-soft">{formule.sousTitre}</p>
        )}
        <SeparateurCoeur className="mt-5 justify-center" />
        <p className="mt-5 font-display text-4xl text-taupe-dark">{formule.prix}</p>

        <ul className="mt-8 flex flex-1 flex-col gap-4 text-left">
          {formule.inclus.map((ligne, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-taupe-dark" aria-hidden="true" />
              <span>{ligne}</span>
            </li>
          ))}
        </ul>

        <Bouton
          to="/contact"
          variante={vedette ? 'plein' : 'contourSombre'}
          className="mt-9 w-full"
        >
          Choisir cette formule
          <span className="sr-only"> — formule {formule.nom}</span>
        </Bouton>
      </div>
    </li>
  )
}

function OptionVideo({ option }) {
  return (
    <Container className="py-12 lg:py-16">
      <div className="grid items-stretch gap-0 border border-line bg-cream lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <img
          src={option.image}
          alt={option.imageAlt}
          width={option.imageLargeur}
          height={option.imageHauteur}
          loading="lazy"
          decoding="async"
          className="h-full min-h-[16rem] w-full object-cover"
        />

        <div className="p-8 lg:p-12">
          <p className="eyebrow flex items-center gap-3 text-taupe-dark">
            <IconVideo className="h-6 w-6" />
            Option vidéo
          </p>
          <div className="mt-4 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="sm:flex-1">
              <h2 className="font-display text-2xl lg:text-3xl">{option.titre}</h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-soft">
                {option.texte}
              </p>
            </div>
            <p className="shrink-0 border border-line px-6 py-4 text-center">
              <span className="eyebrow block text-ink-soft">À partir de</span>
              <span className="mt-1 block font-display text-2xl text-taupe-dark">
                {option.prix}
              </span>
            </p>
          </div>

          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {option.etapes.map((etape) => {
              const Icone = iconesEtape[etape.icone]
              return (
                <li key={etape.icone} className="flex items-start gap-3">
                  <Icone
                    className="mt-0.5 h-5 w-5 shrink-0 text-taupe-dark"
                    strokeWidth={1.2}
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-snug text-ink-soft">
                    {etape.libelle}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </Container>
  )
}

export default function PrestationCategorie({ cle }) {
  const details = prestations[cle]
  const autres = univers.filter((u) => u.cle !== cle)

  return (
    <>
      <Seo
        chemin={`/prestations/${cle}`}
        titre={meta[cle].titre}
        description={meta[cle].description}
        image={details.hero.src}
      />
      <DonneesFormules cle={cle} details={details} />

      <Hero details={details} />

      {/* Remonte sur la photo du bandeau, comme sur la maquette. */}
      <Container className="relative z-10 -mt-28 lg:-mt-36">
        <ul className="grid gap-5 lg:grid-cols-3">
          {details.formules.map((formule) => (
            <CarteFormule key={formule.nom} formule={formule} />
          ))}
        </ul>
      </Container>

      {details.optionVideo && <OptionVideo option={details.optionVideo} />}

      <Container className="pb-14 lg:pb-20">
        <div className="flex flex-col gap-6 border-l-2 border-taupe bg-sand px-7 py-7 lg:flex-row lg:items-center lg:gap-10 lg:px-10">
          <Info className="h-7 w-7 shrink-0 text-taupe-dark" strokeWidth={1.2} aria-hidden="true" />
          <div className="lg:flex-1">
            <h2 className="sr-only">Bon à savoir</h2>
            <p className="leading-relaxed text-ink-soft">{details.info}</p>
            {details.complement && (
              <p className="mt-3 leading-relaxed text-ink-soft">{details.complement}</p>
            )}
            {details.offre && (
              <p className="mt-3 font-medium text-taupe-dark">{details.offre}</p>
            )}
          </div>
          <Bouton to="/contact" variante="contourSombre" className="shrink-0">
            Me contacter
          </Bouton>
        </div>
      </Container>

      <Container className="pb-16 lg:pb-20">
        <h2 className="eyebrow text-taupe-dark">Voir les autres formules</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {autres.map((autre) => (
            <li key={autre.cle}>
              <Link
                to={`/prestations/${autre.cle}`}
                className="group flex items-center justify-between gap-4 border border-line bg-cream px-7 py-6 transition-colors hover:border-taupe"
              >
                <span className="font-display text-2xl uppercase tracking-wide">
                  {autre.titre}
                </span>
                <ArrowRight
                  className="h-5 w-5 shrink-0 text-taupe-dark transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </>
  )
}
