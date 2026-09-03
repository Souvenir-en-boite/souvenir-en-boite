import { Seo } from '../components/Seo'
import { Container, TitreSection, Bouton } from '../components/ui'
import { CarteUnivers } from '../components/CarteUnivers'
import { univers } from '../data/site'

export default function Portfolio() {
  return (
    <>
      <Seo
        chemin="/portfolio"
        titre="Portfolio"
        description="Découvrez mes reportages de mariage et mes séances grossesse et naissance : trois univers, trois galeries de photographies authentiques."
      />

      <Container className="pt-14 pb-10 lg:pt-20 lg:pb-12">
        <TitreSection
          niveau={1}
          eyebrow="Portfolio"
          titre="Trois univers, une même sensibilité"
          description="Chaque histoire mérite d'être racontée. Parcourez les galeries et retrouvez l'atmosphère de chaque séance."
        />
      </Container>

      {/* Mêmes cartes que l'accueil : trois blocs de hauteur égale plutôt que
          trois grandes rangées alternées, qui étiraient la page sans rien
          apporter — le contenu des galeries est derrière le lien, pas ici.
          `niveau={2}` car les cartes suivent directement le titre de page. */}
      <Container className="pb-16 lg:pb-24">
        <ul className="grid gap-4 lg:grid-cols-3">
          {univers.map((item) => (
            <CarteUnivers
              key={item.cle}
              item={item}
              vers={`/portfolio/${item.cle}`}
              niveau={2}
            />
          ))}
        </ul>
      </Container>

      <Container className="pb-16 lg:pb-24">
        <div className="flex flex-col gap-7 bg-sand px-6 py-10 sm:px-7 lg:flex-row lg:items-center lg:gap-12 lg:px-14">
          <div className="lg:flex-1">
            <h2 className="font-display text-xl uppercase tracking-wide sm:text-2xl lg:text-3xl">
              Une de ces galeries vous parle ?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">
              Découvrez les formules correspondantes, ou écrivez-moi directement
              pour imaginer ensemble votre séance.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Bouton to="/prestations">Voir les prestations</Bouton>
            <Bouton to="/contact" variante="contourSombre">
              Me contacter
            </Bouton>
          </div>
        </div>
      </Container>
    </>
  )
}
