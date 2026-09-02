import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Seo, DonneesStructurees } from '../components/Seo'
import { Container, Bouton, Eyebrow } from '../components/ui'
import { icones, IconAppareilPhoto } from '../components/icons'
import { Avis } from '../components/Avis'
import { univers, heroAccueil } from '../data/site'

function Hero() {
  return (
    <section className="relative isolate flex min-h-[32rem] items-end overflow-hidden sm:min-h-[34rem] lg:min-h-[25rem] lg:items-center">
      {/* Point d'ancrage décalé sur mobile : le cadrage vertical recentre le
          couple, qui se trouve à droite du milieu de la photo. */}
      <img
        src={heroAccueil.src}
        alt={heroAccueil.alt}
        width={heroAccueil.width}
        height={heroAccueil.height}
        fetchpriority="high"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-[58%_center] lg:object-center"
      />

      {/* Voile sombre : garantit la lisibilité du texte clair quelle que soit
          la photo placée derrière. */}
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(34,32,29,.92)_0%,rgba(34,32,29,.62)_45%,rgba(34,32,29,.15)_100%)] lg:bg-[linear-gradient(90deg,rgba(34,32,29,.92)_0%,rgba(34,32,29,.64)_26%,rgba(34,32,29,.2)_54%,rgba(34,32,29,0)_76%)]"
        aria-hidden="true"
      />

      <Container className="py-12 lg:py-8">
        <div className="max-w-xl text-cream">
          <p className="eyebrow text-cream/85">Photographe professionnelle</p>
          <h1 className="mt-4 font-display text-5xl leading-[1.03] sm:text-6xl">
            Vos souvenirs.
            <br />
            Ma passion.
          </h1>
          <span className="mt-5 block h-px w-24 bg-cream/50" />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-cream/90">
            Des images authentiques, des émotions vraies, des souvenirs qui
            traversent le temps.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Bouton to="/portfolio">Découvrir mon travail</Bouton>
            <Bouton to="/prestations" variante="contourClair">
              Mes prestations
            </Bouton>
          </div>
        </div>
      </Container>
    </section>
  )
}

function CarteUnivers({ item }) {
  const Icone = icones[item.cle]
  return (
    <li className="group relative isolate overflow-hidden">
      <img
        src={item.couverture}
        alt={item.couvertureAlt}
        width={item.largeur}
        height={item.hauteur}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div
        className="absolute inset-0 -z-10 bg-linear-to-t from-night/90 via-night/50 to-night/20"
        aria-hidden="true"
      />

      <div className="flex min-h-[19rem] flex-col justify-end p-7 text-cream lg:min-h-[25rem]">
        <Icone className="h-10 w-10 text-cream/85" />
        <h3 className="mt-5 font-display text-3xl uppercase tracking-wide lg:text-4xl">
          {item.titre}
        </h3>
        <p className="mt-3 max-w-[16rem] text-sm leading-relaxed whitespace-pre-line text-cream/85">
          {item.accroche}
        </p>
        <Link
          to={`/portfolio/${item.cle}`}
          className="eyebrow mt-6 inline-flex w-fit items-center gap-3 border-b border-cream/50 pb-1 transition-colors hover:border-cream"
        >
          Voir la galerie
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          <span className="sr-only">— {item.titre}</span>
        </Link>
      </div>
    </li>
  )
}

function BandeauContact() {
  return (
    <Container className="pt-2.5 pb-2.5">
      <div className="flex flex-col items-center gap-7 bg-sand px-7 py-12 text-center lg:flex-row lg:gap-12 lg:px-14 lg:text-left">
        <IconAppareilPhoto className="h-14 w-14 shrink-0 text-taupe-dark" />
        <div className="lg:flex-1">
          <h2 className="font-display text-2xl lg:text-3xl">
            Envie de créer vos propres souvenirs ?
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-soft">
            Chaque histoire est unique. Discutons de votre projet et créons
            ensemble des images qui vous ressemblent.
          </p>
        </div>
        <Bouton to="/contact" className="shrink-0">
          Réserver une séance
        </Bouton>
      </div>
    </Container>
  )
}

export default function Accueil() {
  return (
    <>
      <Seo
        chemin="/"
        titre="Accueil"
        description="Sarah, photographe professionnelle de mariage, grossesse et naissance. Des images authentiques et des émotions vraies, en France entière."
      />
      <DonneesStructurees />

      <Hero />

      <section aria-labelledby="titre-univers" className="pt-2.5">
        <Container>
          <h2 id="titre-univers" className="sr-only">
            Mes univers photographiques
          </h2>
          <ul className="grid gap-2.5 lg:grid-cols-3">
            {univers.map((item) => (
              <CarteUnivers key={item.cle} item={item} />
            ))}
          </ul>
        </Container>
      </section>

      <Avis />
      <BandeauContact />
    </>
  )
}
