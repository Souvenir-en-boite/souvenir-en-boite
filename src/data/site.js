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

export const navigation = [
  { to: '/', libelle: 'Accueil' },
  { to: '/portfolio', libelle: 'Portfolio' },
  { to: '/prestations', libelle: 'Prestations' },
  { to: '/a-propos', libelle: 'À propos' },
  { to: '/contact', libelle: 'Contact' },
]

// Les trois univers, utilisés par l'accueil, le portfolio et les prestations.
export const univers = [
  {
    cle: 'mariage',
    titre: 'Mariage',
    accroche: 'Des instants uniques,\ndes émotions éternelles.',
    couverture: '/assets/picture/portfolio-mariage.avif',
    couvertureAlt:
      "Couple de mariés enlacé dans un parc au coucher du soleil, la traîne de la robe déployée dans l'herbe",
  },
  {
    cle: 'grossesse',
    titre: 'Grossesse',
    accroche: 'Un moment unique,\nà jamais gravé.',
    couverture: '/assets/picture/portfolio-grossesse.avif',
    couvertureAlt:
      "Future maman drapée d'un voile blanc en studio, éclairage clair-obscur sur fond noir",
  },
  {
    cle: 'naissance',
    titre: 'Naissance',
    accroche: 'Les premiers instants,\nles plus précieux.',
    couverture: '/assets/picture/portfolio-naissance.avif',
    couvertureAlt:
      'Nouveau-né endormi en pyjama et bonnet blancs tricotés, allongé dans un hamac de voile blanc',
  },
]

// Image d'ouverture de l'accueil. Deux fichiers pour deux cadrages :
// le portrait sur mobile, le paysage sur grand écran — cela évite
// d'étirer une image de 970 px sur toute la largeur d'un écran de bureau.
// À remplacer par les fichiers pleine résolution de la galerie Pixieset.
export const heroAccueil = {
  mobile: {
    src: '/assets/picture/portfolio-mariage.avif',
    width: 970,
    height: 1174,
  },
  bureau: {
    src: '/assets/picture/portfolio-mariage/portfolio-mariage-20.avif',
    width: 974,
    height: 650,
  },
  alt: "Mariée lançant son bouquet dans un jardin, à contre-jour d'un soleil couchant",
}
