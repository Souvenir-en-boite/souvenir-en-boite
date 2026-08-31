import { Star } from 'lucide-react'
import { Container, TitreSection } from './ui'
import { avis } from '../data/avis'

/**
 * Avis clients. Tant que src/data/avis.js est vide, la section ne s'affiche
 * pas du tout — inutile de toucher à l'accueil pour l'activer plus tard.
 */
export function Avis() {
  if (avis.length === 0) return null

  return (
    <section aria-labelledby="titre-avis" className="bg-sand py-16 lg:py-24">
      <Container>
        <TitreSection
          eyebrow="Ils m'ont fait confiance"
          titre="Ce que disent mes mariés"
          centre
        />
        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {avis.map((item, i) => (
            <li key={i} className="flex flex-col bg-cream p-8">
              <p className="flex gap-1" aria-label={`Note : ${item.note} sur 5`}>
                {Array.from({ length: 5 }, (_, n) => (
                  <Star
                    key={n}
                    className={`h-4 w-4 ${n < item.note ? 'fill-taupe text-taupe' : 'text-line'}`}
                    aria-hidden="true"
                  />
                ))}
              </p>
              <blockquote className="mt-5 flex-1 font-display text-xl leading-snug text-ink">
                « {item.texte} »
              </blockquote>
              <footer className="mt-6 text-sm text-ink-soft">
                <span className="font-medium text-ink">{item.auteur}</span>
                {item.source && <span> — {item.source}</span>}
              </footer>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
