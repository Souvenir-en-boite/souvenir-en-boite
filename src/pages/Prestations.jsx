import { Seo } from '../components/Seo'
import { Container, Bouton } from '../components/ui'
import { SeparateurCoeur } from '../components/icons'
import { CarteUnivers } from '../components/CarteUnivers'
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


export default function Prestations() {
  return (
    <>
      <Seo
        chemin="/prestations"
        titre="Prestations et tarifs"
        description="Formules photo mariage, grossesse et naissance. Des prestations entièrement personnalisables, à partir de 290 €."
      />

      <Hero />

      <Container className="py-10 sm:py-12 lg:py-16">
        <ul className="grid gap-4 sm:gap-5 lg:grid-cols-3">
          {univers.map((item) => (
            <CarteUnivers
              key={item.cle}
              item={item}
              vers={`/prestations/${item.cle}`}
              libelle="Voir les formules"
              niveau={2}
              prix={prestations[item.cle].formules[0].prix}
              // Le bandeau de la page de destination : on retrouve la même
              // photo en grand après le clic.
              visuel={prestations[item.cle].hero}
            />
          ))}
        </ul>
      </Container>

      <Container className="pb-16 lg:pb-24">
        <div className="flex flex-col gap-7 bg-sand px-6 py-10 sm:px-7 lg:flex-row lg:items-center lg:gap-12 lg:px-14">
          <div className="lg:flex-1">
            <h2 className="font-display text-xl uppercase tracking-wide sm:text-2xl lg:text-3xl">
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
