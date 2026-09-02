// Point unique de vérité pour les coordonnées et la navigation.
// Modifier ici met à jour l'en-tête, le pied de page, la page contact,
// les données structurées Google et le plan du site.

export const site = {
  nom: 'Souvenir en boîte',
  photographe: 'Sarah',
  // ⚠️ À confirmer avant mise en ligne : l'URL réelle du site.
  // Elle sert aux liens canoniques, aux aperçus de partage et au sitemap.
  url: 'https://www.souvenir-en-boite.fr',
  baseline: 'Photographe mariage, grossesse et naissance',
  telephone: '07 44 82 37 19',
  telephoneLien: '+33744823719',
  email: 'souvenir-en-boite@hotmail.com',
  zone: "France entière, déplacement à l'étranger sur devis.",
  reseaux: {
    instagram: 'https://www.instagram.com/souvenir_en_boite/',
    facebook: 'https://www.facebook.com/sarahphotomariage/photos',
  },
}


// Les trois univers, utilisés par l'accueil, le portfolio et les prestations.
export const univers = [
  {
    cle: 'mariage',
    titre: 'Mariage',
    accroche: 'Des instants uniques,\ndes émotions éternelles.',
    couverture: '/assets/picture/accueil/univers-mariage.avif',
    largeur: 1000,
    hauteur: 1500,
    couvertureAlt:
      'Mariée en robe brodée et voile de perles, assise dans une voiture de collection blanche devant un château',
  },
  {
    cle: 'grossesse',
    titre: 'Grossesse',
    accroche: 'Un moment unique,\nà jamais gravé.',
    couverture: '/assets/picture/accueil/univers-grossesse.avif',
    largeur: 974,
    hauteur: 1290,
    couvertureAlt:
      'Future maman en robe de dentelle crème, posant de profil devant un décor floral en studio',
  },
  {
    cle: 'naissance',
    titre: 'Naissance',
    accroche: 'Les premiers instants,\nles plus précieux.',
    couverture: '/assets/picture/accueil/univers-naissance.avif',
    largeur: 1000,
    hauteur: 667,
    couvertureAlt:
      'Nouveau-né endormi sur le ventre, les mains sous le menton, portant un bandeau de perles et une brassière en dentelle',
  },
]

// Les entrées avec `sousMenu` ouvrent un raccourci vers les trois univers.
// Le parent reste un lien à part entière : le sous-menu complète, il ne
// remplace pas.
export const navigation = [
  { to: '/', libelle: 'Accueil' },
  {
    to: '/portfolio',
    libelle: 'Portfolio',
    sousMenu: univers.map((u) => ({ to: `/portfolio/${u.cle}`, libelle: u.titre })),
  },
  {
    to: '/prestations',
    libelle: 'Prestations',
    sousMenu: univers.map((u) => ({ to: `/prestations/${u.cle}`, libelle: u.titre })),
  },
  { to: '/a-propos', libelle: 'À propos' },
  { to: '/contact', libelle: 'Contact' },
]

// Image d'ouverture de l'accueil. Une seule photo pour les deux cadrages :
// elle est assez large pour supporter un recadrage vertical sur mobile, où
// `objectPosition` recentre le couple.
export const heroAccueil = {
  src: '/assets/picture/accueil/hero-mariage.avif',
  width: 1920,
  height: 1129,
  alt: "Couple de mariés s'embrassant dans un parc au coucher du soleil, la traîne de la robe déployée dans l'herbe",
}
