import { Link } from 'react-router-dom'

export function Container({ children, className = '', ...rest }) {
  return (
    <div className={`mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 ${className}`} {...rest}>
      {children}
    </div>
  )
}

const variantes = {
  // Texte brun foncé sur taupe : 6.76:1. Le blanc de la maquette
  // tombait à 2.27:1, sous le seuil WCAG AA de 4.5:1.
  plein:
    'bg-taupe text-ink border border-taupe hover:bg-taupe-dark hover:border-taupe-dark hover:text-cream',
  contourClair:
    'border border-cream/70 text-cream hover:bg-cream hover:text-ink',
  contourSombre:
    'border border-ink/30 text-ink hover:bg-ink hover:text-cream',
}

/**
 * Bouton unique pour les trois usages : lien interne, lien externe ou
 * vrai bouton. Ne rend jamais un <div> cliquable — le clavier et les
 * lecteurs d'écran ont besoin du bon élément.
 */
export function Bouton({ to, href, variante = 'plein', className = '', children, ...rest }) {
  const classes = `inline-flex items-center justify-center gap-2 px-7 py-3.5 eyebrow transition-colors duration-300 ${variantes[variante]} ${className}`

  if (to) return <Link to={to} className={classes} {...rest}>{children}</Link>
  if (href) return <a href={href} className={classes} {...rest}>{children}</a>
  return <button type="button" className={classes} {...rest}>{children}</button>
}

export function Eyebrow({ children, className = '', as: Balise = 'p' }) {
  return <Balise className={`eyebrow text-taupe-dark ${className}`}>{children}</Balise>
}

/**
 * Titre de section : libellé en capitales, titre serif, filet.
 * `niveau` vaut 2 par défaut ; le passer à 1 quand ce bloc porte le titre
 * principal de la page — chaque page doit avoir un <h1> et un seul.
 */
export function TitreSection({
  eyebrow,
  titre,
  description,
  centre = false,
  niveau = 2,
  className = '',
}) {
  const Titre = `h${niveau}`
  return (
    <div className={`${centre ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'} ${className}`}>
      {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
      <Titre className={niveau === 1
        ? 'font-display text-4xl leading-[1.1] sm:text-5xl lg:text-6xl'
        : 'text-3xl leading-[1.15] sm:text-4xl lg:text-5xl'}>
        {titre}
      </Titre>
      <span className={`mt-6 block h-px w-16 bg-taupe ${centre ? 'mx-auto' : ''}`} />
      {description && (
        <p className="mt-6 text-ink-soft leading-relaxed">{description}</p>
      )}
    </div>
  )
}
