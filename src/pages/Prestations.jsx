import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Seo } from '../components/Seo'
import { Container, TitreSection } from '../components/ui'
import { icones } from '../components/icons'
import { univers } from '../data/site'
import { prestations } from '../data/prestations'

export default function Prestations() {
  return (
    <>
      <Seo
        chemin="/prestations"
        titre="Prestations et tarifs"
        description="Formules photo mariage, grossesse et naissance. Des prestations entièrement personnalisables, à partir de 290 €."
      />

      <Container className="pt-14 pb-4 lg:pt-20">
        <TitreSection
          niveau={1}
          eyebrow="Prestations"
          titre="Des formules pensées pour votre histoire"
          description="Trois univers, trois façons d'accompagner vos moments les plus précieux. Chaque formule reste personnalisable selon vos envies."
        />
      </Container>

      <Container className="py-14 lg:py-20">
        <ul className="grid gap-6 lg:grid-cols-3">
          {univers.map((item) => {
            const Icone = icones[item.cle]
            const details = prestations[item.cle]
            const prixMini = details.formules[0].prix
            return (
              <li key={item.cle} className="flex flex-col border border-line bg-cream">
                <img
                  src={details.couverture}
                  alt={details.couvertureAlt}
                  width="710"
                  height="1076"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-8">
                  <Icone className="h-11 w-11 text-taupe-dark" />
                  <h2 className="mt-5 font-display text-3xl uppercase tracking-wide">
                    {details.titre}
                  </h2>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">
                    {details.intro}
                  </p>
                  <p className="mt-6 font-display text-2xl text-taupe-dark">
                    À partir de {prixMini}
                  </p>
                  <Link
                    to={`/prestations/${item.cle}`}
                    className="eyebrow mt-6 inline-flex w-fit items-center gap-3 border-b border-ink/30 pb-1 transition-colors hover:border-ink"
                  >
                    Voir les formules
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only">— {details.titre}</span>
                  </Link>
                </div>
              </li>
            )
          })}
        </ul>
      </Container>
    </>
  )
}
