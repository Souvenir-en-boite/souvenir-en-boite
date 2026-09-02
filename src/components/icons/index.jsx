// Pictogrammes au trait, dans l'esprit de la maquette.
// `aria-hidden` : ils accompagnent toujours un texte, un lecteur d'écran
// n'a donc rien à annoncer ici.

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.1,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
}

export const IconAlliances = (p) => (
  <svg viewBox="0 0 48 48" {...base} {...p}>
    <circle cx="18.5" cy="29" r="10.5" />
    <circle cx="30" cy="29" r="10.5" />
    {/* Solitaire posé sur l'anneau de gauche : la pointe basse touche le
        cercle, sinon le losange flotte et se lit comme une forme à part. */}
    <path d="M14.6 14.2 18.5 9.6l3.9 4.6-3.9 4.6-3.9-4.6Z" />
    <path d="M14.6 14.2h7.8" />
  </svg>
)

export const IconGrossesse = (p) => (
  <svg viewBox="0 0 48 48" {...base} {...p}>
    {/* Silhouette de profil : dos à gauche, ventre arrondi à droite. */}
    <circle cx="21.5" cy="10.5" r="4.6" />
    <path d="M19.6 15.8C16.6 17.2 15.2 20 15.2 23.6c0 2.6.3 4.4.6 6.2L14.4 40.5" />
    <path d="M24.2 15.8c2.4 1 3.8 2.8 4.3 5.2 3.6 1.2 5.8 4 5.8 7.5 0 4.3-3.5 7.3-8.2 7.3-1.2 0-2.3-.2-3.2-.5L21.8 40.5" />
  </svg>
)

export const IconPieds = (p) => (
  <svg viewBox="0 0 48 48" {...base} {...p}>
    <path d="M17 33c-3.5 0-5.5-2.5-5.5-6.5S13.5 17 17 17s5 3 5 7-1.5 9-5 9Z" />
    <circle cx="12" cy="12.5" r="1.8" />
    <circle cx="16.5" cy="10.5" r="1.8" />
    <circle cx="21" cy="11.5" r="1.6" />
    <path d="M33 38c-3.5 0-5.5-2.5-5.5-6.5S29.5 22 33 22s5 3 5 7-1.5 9-5 9Z" />
    <circle cx="28" cy="17.5" r="1.8" />
    <circle cx="32.5" cy="15.5" r="1.8" />
    <circle cx="37" cy="16.5" r="1.6" />
  </svg>
)

export const IconAppareilPhoto = (p) => (
  <svg viewBox="0 0 48 48" {...base} {...p}>
    <rect x="4" y="13" width="40" height="26" rx="4" />
    <circle cx="24" cy="26" r="8" />
    <circle cx="24" cy="26" r="4" />
    <path d="M16 13l3-4h10l3 4" />
    <circle cx="37" cy="19" r="1.4" />
  </svg>
)

export const IconCoeur = (p) => (
  <svg viewBox="0 0 48 48" {...base} {...p}>
    <path d="M24 39s-14-8.5-14-18a8 8 0 0 1 14-5.3A8 8 0 0 1 38 21c0 9.5-14 18-14 18Z" />
  </svg>
)

export const IconVideo = (p) => (
  <svg viewBox="0 0 48 48" {...base} {...p}>
    <rect x="5" y="15" width="26" height="19" rx="3.5" />
    <path d="M31 22.5 43 17v15l-12-5.5v-4Z" />
  </svg>
)

export const IconMedaille = (p) => (
  <svg viewBox="0 0 48 48" {...base} {...p}>
    <circle cx="24" cy="19" r="11" />
    <path d="M24 13.5l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4-3.9-3.8 5.4-.8L24 13.5Z" />
    <path d="M17 29.5 14 42l10-4.5L34 42l-3-12.5" />
  </svg>
)

export const IconDiamant = (p) => (
  <svg viewBox="0 0 48 48" {...base} {...p}>
    <path d="M13 10h22l9 11-20 21L4 21l9-11Z" />
    <path d="M4 21h40" />
    <path d="M13 10l4 11-3 21" />
    <path d="M35 10l-4 11 3 21" />
    <path d="M17 21h14" />
  </svg>
)

/** Petit motif filet–cœur–filet, repris des maquettes. */
export const SeparateurCoeur = ({ className = '', tonalite = 'text-taupe' }) => (
  <span className={`flex items-center gap-3 ${tonalite} ${className}`} aria-hidden="true">
    <span className="h-px w-8 bg-current opacity-50" />
    <svg viewBox="0 0 24 24" className="h-3 w-3" {...base}>
      <path d="M12 20s-7-4.3-7-9a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 4.7-7 9-7 9Z" />
    </svg>
    <span className="h-px w-8 bg-current opacity-50" />
  </span>
)

export const icones = {
  mariage: IconAlliances,
  grossesse: IconGrossesse,
  naissance: IconPieds,
}

/** Pictogrammes des cartes de formules, choisis dans les données. */
export const iconesFormule = {
  alliances: IconAlliances,
  appareil: IconAppareilPhoto,
  diamant: IconDiamant,
  coeur: IconCoeur,
}
