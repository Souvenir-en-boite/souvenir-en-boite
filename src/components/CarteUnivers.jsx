import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { icones } from './icons'

/**
 * Carte d'un univers : photo en fond, pictogramme, titre et accroche.
 *
 * Partagée par l'accueil et le portfolio — les deux pages présentent les mêmes
 * trois univers, une seule implémentation évite qu'elles divergent.
 *
 * `niveau` règle le niveau de titre : 3 quand la carte est sous un titre de
 * section (accueil), 2 quand elle est directement sous le titre de page
 * (portfolio). Sauter un niveau désoriente la navigation au lecteur d'écran.
 */
export function CarteUnivers({ item, vers, libelle = 'Voir la galerie', niveau = 3 }) {
  const Icone = icones[item.cle]
  const Titre = `h${niveau}`

  return (
    <li className="group relative isolate overflow-hidden">
      <img
        src={item.couverture}
        alt={item.couvertureAlt}
        width={item.largeur}
        height={item.hauteur}
        loading="lazy"
        decoding="async"
        style={{ objectPosition: item.cadrage ?? 'center' }}
        className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div
        className="absolute inset-0 -z-10 bg-linear-to-t from-night/90 via-night/50 to-night/20"
        aria-hidden="true"
      />

      <div className="flex min-h-[15rem] flex-col justify-end p-6 text-cream sm:p-7 lg:min-h-[25rem]">
        <Icone className="h-10 w-10 text-cream/85" />
        <Titre className="mt-4 font-display text-3xl uppercase tracking-wide sm:mt-5 lg:text-4xl">
          {item.titre}
        </Titre>
        <p className="mt-3 max-w-[16rem] whitespace-pre-line text-sm leading-relaxed text-cream/85">
          {item.accroche}
        </p>
        <Link
          to={vers}
          // Pseudo-élément étiré sur toute la carte : elle devient cliquable
          // partout, sans second lien dans l'arbre d'accessibilité.
          className="eyebrow mt-5 inline-flex w-fit items-center gap-3 sm:mt-6 border-b border-cream/50 pb-1 transition-colors after:absolute after:inset-0 after:content-[''] hover:border-cream"
        >
          {libelle}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          <span className="sr-only">— {item.titre}</span>
        </Link>
      </div>
    </li>
  )
}
