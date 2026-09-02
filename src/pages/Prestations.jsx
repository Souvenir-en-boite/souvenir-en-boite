import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Seo } from '../components/Seo'
import { Container, Bouton } from '../components/ui'
import { icones, SeparateurCoeur } from '../components/icons'
import { univers, heroPrestations } from '../data/site'
import { prestations } from '../data/prestations'

function Hero() {
  return (
    <section className="relative isolate flex min-h-[20rem] items-end overflow-hidden bg-[#0e0c0b] lg:min-h-[25rem] lg:items-center">
      {/*
        Même traitement que l'accueil et la page contact : sur grand écran la
        photo s'affiche entière, calée à droite, et son bord gauche se dissout
        dans le noir par le masque. Sur mobile elle repasse en `cover`.
      */}
      <img
        src={heroPrestations.src}
        alt={heroPrestations.alt}
        width={heroPrestations.width}
        height={heroPrestations.height}
        fetchpriority="high"
        style={{ '--cadrage': heroPrestations.cadrage }}
        className="fondu-vers-la-gauche absolute inset-y-0 right-0 -z-10 h-full w-full object-cover [object-position:var(--cadrage)] lg:w-auto lg:max-w-none"
      />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(14,12,11,.94)_0%,rgba(14,12,11,.7)_48%,rgba(14,12,11,.2)_100%)] lg:bg-none"
        aria-hidden="true"
      />

      <Container>
        <div className="max-w-2xl text-cream lg:max-w-[29rem]">
          <p className="eyebrow text-cream/85">Prestations</p>
          <SeparateurCoeur className="mt-4" tonalite="text-cream/70" />
          <h1 className="mt-6 font-display text-4xl leading-[1.12] sm:text-5xl">
            Des formules pensées pour chaque histoire.
          </h1>
          <p className="mt-6 text-sm leading-relaxed text-cream/90">
            Trois univers, trois façons d'accompagner vos moments les plus
            précieux. Chaque formule reste personnalisable selon vos envies.
          </p>
        </div>
      </Container>
    </section>
  )
}

function CarteUnivers({ item }) {
  const Icone = icones[item.cle]
  const details = prestations[item.cle]
  const prixMini = details.formules[0].prix

  return (
    <li className="flex">
      {/* `relative` sert d'ancrage au lien étiré du bouton ci-dessous. */}
      <div className="relative flex flex-1 flex-col border border-line bg-cream transition-colors has-[a:hover]:border-taupe">
        <img
          src={details.hero.src}
          alt={details.hero.alt}
          width={details.hero.width}
          height={details.hero.height}
          loading="lazy"
          decoding="async"
          style={{ objectPosition: details.hero.cadrage ?? 'center' }}
          className="aspect-[4/3] w-full object-cover"
        />

        <div className="flex flex-1 flex-col px-7 py-9 text-center lg:px-9">
          <Icone className="mx-auto h-11 w-11 text-taupe-dark" />
          <h2 className="mt-5 font-display text-2xl uppercase tracking-[0.12em]">
            {details.titre}
          </h2>
          <SeparateurCoeur className="mt-5 justify-center" />
          <p className="mt-6 flex-1 text-sm leading-relaxed text-ink-soft">
            {details.intro}
          </p>
          <p className="mt-7">
            <span className="eyebrow block text-ink-soft">À partir de</span>
            <span className="mt-1 block font-display text-3xl text-taupe-dark">
              {prixMini}
            </span>
          </p>
          {/* Le pseudo-élément couvre toute la carte : elle devient cliquable
              partout, sans ajouter de second lien dans l'arbre d'accessibilité
              ni englober l'image et le texte dans l'intitulé du lien. */}
          <Bouton
            to={`/prestations/${item.cle}`}
            variante="contourSombre"
            className="mt-8 w-full after:absolute after:inset-0 after:content-['']"
          >
            Voir les formules
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only"> — {details.titre}</span>
          </Bouton>
        </div>
      </div>
    </li>
  )
}

export default function Prestations() {
  return (
    <>
      <Seo
        chemin="/prestations"
        titre="Prestations et tarifs"
        description="Formules photo mariage, grossesse et naissance. Des prestations entièrement personnalisables, à partir de 290 €."
      />

      <Hero />

      <Container className="py-12 lg:py-16">
        <ul className="grid gap-5 lg:grid-cols-3">
          {univers.map((item) => (
            <CarteUnivers key={item.cle} item={item} />
          ))}
        </ul>
      </Container>

      <Container className="pb-16 lg:pb-24">
        <div className="flex flex-col items-center gap-7 bg-sand px-7 py-12 text-center lg:flex-row lg:gap-12 lg:px-14 lg:text-left">
          <div className="lg:flex-1">
            <h2 className="font-display text-2xl lg:text-3xl">
              Vous ne trouvez pas exactement ce qu'il vous faut ?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">
              Les formules sont entièrement personnalisables selon vos envies.
              N'hésitez pas à me contacter pour imaginer ensemble celle qui vous
              ressemble.
            </p>
          </div>
          <Bouton to="/contact" className="shrink-0">
            Me contacter
          </Bouton>
        </div>
      </Container>
    </>
  )
}
