import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Seo } from '../components/Seo'
import { Container, TitreSection } from '../components/ui'
import { icones } from '../components/icons'
import { univers } from '../data/site'

export default function Portfolio() {
  return (
    <>
      <Seo
        chemin="/portfolio"
        titre="Portfolio"
        description="Découvrez mes reportages de mariage et mes séances grossesse et naissance : trois univers, trois galeries de photographies authentiques."
      />

      <Container className="pt-14 pb-4 lg:pt-20">
        <TitreSection
          niveau={1}
          eyebrow="Portfolio"
          titre="Trois univers, une même sensibilité"
          description="Chaque histoire mérite d'être racontée. Parcourez les galeries et retrouvez l'atmosphère de chaque séance."
        />
      </Container>

      <div className="flex flex-col gap-16 py-14 lg:gap-24 lg:py-20">
        {univers.map((item, i) => {
          const Icone = icones[item.cle]
          const inverse = i % 2 === 1
          return (
            <Container key={item.cle}>
              <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
                <img
                  src={item.couverture}
                  alt={item.couvertureAlt}
                  width="970"
                  height="1174"
                  loading={i === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  className={`aspect-[4/5] w-full object-cover ${inverse ? 'lg:order-2' : ''}`}
                />
                <div className={inverse ? 'lg:order-1' : ''}>
                  <Icone className="h-12 w-12 text-taupe-dark" />
                  <h2 className="mt-5 font-display text-4xl uppercase tracking-wide lg:text-5xl">
                    {item.titre}
                  </h2>
                  <span className="mt-5 block h-px w-16 bg-taupe" />
                  <p className="mt-6 max-w-md leading-relaxed whitespace-pre-line text-ink-soft">
                    {item.accroche}
                  </p>
                  <Link
                    to={`/portfolio/${item.cle}`}
                    className="eyebrow mt-8 inline-flex items-center gap-3 border-b border-ink/30 pb-1 text-ink transition-colors hover:border-ink"
                  >
                    Voir la galerie
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only">— {item.titre}</span>
                  </Link>
                </div>
              </article>
            </Container>
          )
        })}
      </div>
    </>
  )
}
