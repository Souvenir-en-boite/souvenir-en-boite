import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Seo, DonneesStructurees } from '../components/Seo'
import { Container, Bouton, Eyebrow } from '../components/ui'
import { IconAppareilPhoto } from '../components/icons'
import { CarteUnivers } from '../components/CarteUnivers'
import { Avis } from '../components/Avis'
import { univers, heroAccueil } from '../data/site'

function Hero() {
  return (
    <section className="relative isolate flex min-h-[26rem] items-end overflow-hidden bg-[#0e0c0b] sm:min-h-[28rem] lg:min-h-[25rem] lg:items-center">
      {/*
        Sur grand écran, la photo est calée à droite à sa largeur naturelle :
        elle s'affiche entière, sans rognage, et le couple se retrouve nettement
        à droite. Le vide à gauche est le noir de la section, dans lequel le bord
        de la photo se dissout par un masque — porté par l'image, il suit donc
        son bord réel quelle que soit la largeur de l'écran.

        Sur mobile elle repasse en `cover` : à sa largeur naturelle, elle
        laisserait de larges bandes vides sur un écran étroit.
      */}
      <img
        src={heroAccueil.src}
        alt={heroAccueil.alt}
        width={heroAccueil.width}
        height={heroAccueil.height}
        fetchpriority="high"
        style={{ '--cadrage': heroAccueil.cadrage }}
        className="fondu-vers-la-gauche absolute inset-y-0 right-0 -z-10 h-full w-full object-cover [object-position:var(--cadrage)] lg:w-auto lg:max-w-none"
      />

      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(14,12,11,.92)_0%,rgba(14,12,11,.62)_45%,rgba(14,12,11,.15)_100%)] lg:bg-none"
        aria-hidden="true"
      />

      <Container className="py-10 lg:py-8">
        <div className="max-w-xl text-cream lg:max-w-[29rem]">
          <p className="eyebrow tracking-[0.16em] text-cream/85 sm:tracking-[0.22em]">
            Photographe professionnelle
          </p>
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
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
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


function BandeauContact() {
  return (
    <Container className="pt-2.5 pb-2.5">
      <div className="flex flex-col gap-7 bg-sand px-6 py-10 sm:px-7 lg:flex-row lg:items-center lg:gap-12 lg:px-14">
        {/* L'icône accompagne le texte sur une même ligne, y compris sur
            mobile : empilée au-dessus, elle coûtait une trentaine de pixels
            de hauteur pour rien. */}
        <div className="flex items-start gap-5 lg:flex-1 lg:items-center">
          <IconAppareilPhoto className="h-11 w-11 shrink-0 text-taupe-dark lg:h-14 lg:w-14" />
          <div>
            <h2 className="font-display text-xl uppercase tracking-wide sm:text-2xl lg:text-3xl">
              Envie de créer vos propres souvenirs ?
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-soft">
              Chaque histoire est unique. Discutons de votre projet et créons
              ensemble des images qui vous ressemblent.
            </p>
          </div>
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
              <CarteUnivers key={item.cle} item={item} vers={`/portfolio/${item.cle}`} />
            ))}
          </ul>
        </Container>
      </section>

      <Avis />
      <BandeauContact />
    </>
  )
}
