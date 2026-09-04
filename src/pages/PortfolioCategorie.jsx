import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Seo } from '../components/Seo'
import { Container, Bouton, TitreSection } from '../components/ui'
import { Galerie } from '../components/Galerie'
import { galeries } from '../data/galeries'
import { univers } from '../data/site'

const meta = {
  mariage: {
    titre: 'Photographe de mariage',
    description:
      "Reportage de mariage : préparatifs, cérémonie, portraits et soirée. Découvrez la galerie de mes mariages photographiés en France entière.",
  },
  grossesse: {
    titre: 'Photographe grossesse',
    description:
      'Séances photo de grossesse en studio ou en extérieur : des images douces et lumineuses pour célébrer ce moment unique.',
  },
  naissance: {
    titre: 'Photographe naissance',
    description:
      'Séances photo de nouveau-né : les premiers regards, les petites mains et les grands câlins des premiers jours de vie.',
  },
}

export default function PortfolioCategorie({ cle }) {
  const photos = galeries[cle]
  const item = univers.find((u) => u.cle === cle)
  const autres = univers.filter((u) => u.cle !== cle)

  return (
    <>
      <Seo
        chemin={`/portfolio/${cle}`}
        titre={meta[cle].titre}
        description={meta[cle].description}
        image={item.couverture}
        imageAlt={item.couvertureAlt}
      />

      <Container className="pt-14 pb-12 lg:pt-20">
        <nav aria-label="Fil d'Ariane" className="mb-8">
          <Link
            to="/portfolio"
            className="eyebrow inline-flex items-center gap-2 text-ink-soft transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Retour au portfolio
          </Link>
        </nav>

        <TitreSection
          niveau={1}
          eyebrow="Galerie"
          titre={item.titre}
          description={meta[cle].description}
        />
      </Container>

      <Container className="pb-16 lg:pb-24">
        <Galerie photos={photos} legende={`Galerie ${item.titre.toLowerCase()}`} />
      </Container>

      <Container className="pb-4">
        <div className="flex flex-col gap-7 bg-sand px-6 py-10 sm:px-7 lg:flex-row lg:items-center lg:gap-12 lg:px-14">
          <div className="lg:flex-1">
            <h2 className="font-display text-xl uppercase tracking-wide sm:text-2xl lg:text-3xl">
              Cette galerie vous parle ?
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-soft">
              Découvrez les formules {item.titre.toLowerCase()} ou écrivez-moi
              pour imaginer ensemble votre séance.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Bouton to={`/prestations/${cle}`}>Voir les formules</Bouton>
            <Bouton to="/contact" variante="contourSombre">
              Me contacter
            </Bouton>
          </div>
        </div>
      </Container>

      <Container className="py-14 lg:py-20">
        <h2 className="eyebrow text-taupe-dark">Explorer les autres univers</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {autres.map((autre) => (
            <li key={autre.cle}>
              <Link
                to={`/portfolio/${autre.cle}`}
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
