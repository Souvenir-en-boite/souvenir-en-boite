// Formules par univers.
// Mariage : nouvelles formules ESSENTIELLE / ÉMOTION / PRESTIGE (brief 2026).
// Grossesse et naissance : contenu et prix inchangés, seule la mise en forme évolue.

const PERSONNALISATION_MARIAGE =
  "Les formules sont entièrement personnalisables selon vos envies et les spécificités de votre journée. N'hésitez pas à me contacter pour imaginer ensemble la formule qui vous ressemble."

const PERSONNALISATION_SEANCE =
  "Les formules sont entièrement personnalisables selon vos envies. N'hésitez pas à me contacter pour imaginer ensemble la formule qui vous ressemble."

export const prestations = {
  mariage: {
    titre: 'Mariage',
    intro:
      "Des préparatifs jusqu'à la dernière danse, je saisis les instants vrais : les éclats de rire, les larmes de joie, les petits détails qui font de votre journée une histoire unique.",
    couverture: '/assets/picture/tarif-mariage.avif',
    couvertureAlt: 'Couple de mariés photographié en extérieur',
    formules: [
      {
        nom: 'Essentielle',
        prix: '1 200 €',
        image: '/assets/picture/mariage-silver.avif',
        imageAlt: 'Mariés lors de la cérémonie',
        inclus: [
          "Présence du photographe de la cérémonie jusqu'à la pièce montée, jusqu'à 1 h du matin (100 € par heure supplémentaire)",
          "Livraison de l'intégralité des photos sur clé USB (environ 800 photos)",
          '50 photos retouchées, chaque image travaillée individuellement sur Photoshop et Lightroom',
        ],
      },
      {
        nom: 'Émotion',
        prix: '1 500 €',
        image: '/assets/picture/mariage-gold.avif',
        imageAlt: 'Mariés pendant les préparatifs',
        misEnAvant: true,
        inclus: [
          "Présence du photographe des préparatifs jusqu'à la pièce montée, jusqu'à 1 h du matin (100 € par heure supplémentaire)",
          "Livraison de l'intégralité des photos sur clé USB (environ 900 photos)",
          '70 photos retouchées, chaque image travaillée individuellement sur Photoshop et Lightroom',
          'Livre photo haut de gamme',
          'Galerie privée en ligne',
        ],
      },
      {
        nom: 'Prestige',
        prix: '2 200 €',
        image: '/assets/picture/mariage-diamond.avif',
        imageAlt: 'Mariés lors de la soirée',
        inclus: [
          "Présence du photographe des préparatifs jusqu'à la fin de soirée, jusqu'à 2 h du matin (100 € par heure supplémentaire)",
          "Livraison de l'intégralité des photos sur clé USB (environ 1 000 photos)",
          '150 photos retouchées, chaque image travaillée individuellement sur Photoshop et Lightroom',
          'Livre photo haut de gamme',
          'Galerie privée en ligne',
          "Tirage d'une photo sur verre acrylique",
        ],
      },
    ],
    info: PERSONNALISATION_MARIAGE,
    complement:
      "Vous cherchez d'autres prestataires — vidéaste, DJ, salle ? Mon expérience du secteur m'a permis de nouer des partenariats de confiance, et je serai ravie de vous les recommander.",
  },

  grossesse: {
    titre: 'Grossesse',
    intro:
      "Parce que ce petit miracle qui grandit en vous mérite d'être célébré, je crée des images en studio ou en extérieur qui révèlent toute la beauté de ce moment si spécial.",
    couverture: '/assets/picture/tarif-grossesse.avif',
    couvertureAlt: 'Future maman photographiée en studio',
    formules: [
      {
        nom: 'Silver',
        prix: '290 €',
        image: '/assets/picture/grossesse-silver.avif',
        imageAlt: 'Portrait de grossesse en studio',
        inclus: [
          '2 tenues (personnelles ou proposées en studio)',
          'Remise de toutes les photos brutes en format numérique',
          '5 photos retouchées au choix',
        ],
      },
      {
        nom: 'Gold',
        prix: '390 €',
        image: '/assets/picture/grossesse-gold.avif',
        imageAlt: 'Portrait de grossesse en lumière naturelle',
        misEnAvant: true,
        inclus: [
          '3 tenues (personnelles ou proposées en studio)',
          'Remise de toutes les photos brutes en format numérique',
          '8 photos retouchées',
        ],
      },
      {
        nom: 'Diamond',
        prix: '690 €',
        image: '/assets/picture/grossesse-diamond.avif',
        imageAlt: 'Portrait de grossesse mis en scène',
        inclus: [
          '4 tenues (personnelles ou proposées en studio)',
          'Remise de toutes les photos brutes en format numérique',
          '12 photos retouchées',
          "Création d'un livre photo 21 × 28 cm",
        ],
      },
    ],
    info: PERSONNALISATION_SEANCE,
    offre:
      '15 % de réduction sur votre formule grossesse pour toute prestation naissance réservée.',
  },

  naissance: {
    titre: 'Naissance',
    intro:
      'Les premiers instants de vie sont éphémères mais infiniment précieux. Avec patience et tendresse, je capture les premiers regards, les petites mains, les grands câlins.',
    couverture: '/assets/picture/tarif-naissance.avif',
    couvertureAlt: 'Nouveau-né photographié en studio',
    formules: [
      {
        nom: 'Silver',
        prix: '290 €',
        image: '/assets/picture/naissance-silver.avif',
        imageAlt: 'Nouveau-né endormi',
        inclus: [
          '2 tenues (personnelles ou proposées en studio)',
          'Remise de toutes les photos brutes en format numérique',
          '5 photos retouchées au choix',
        ],
      },
      {
        nom: 'Gold',
        prix: '390 €',
        image: '/assets/picture/naissance-gold.avif',
        imageAlt: 'Nouveau-né dans un cocon de tissu',
        misEnAvant: true,
        inclus: [
          '3 tenues (personnelles ou proposées en studio)',
          'Remise de toutes les photos brutes en format numérique',
          '8 photos retouchées',
        ],
      },
      {
        nom: 'Diamond',
        prix: '690 €',
        image: '/assets/picture/naissance-diamond.avif',
        imageAlt: 'Nouveau-né photographié avec ses parents',
        inclus: [
          '4 tenues (personnelles ou proposées en studio)',
          'Remise de toutes les photos brutes en format numérique',
          '12 photos retouchées',
          "Création d'un livre photo 21 × 28 cm",
        ],
      },
    ],
    info: PERSONNALISATION_SEANCE,
    offre:
      '15 % de réduction sur votre formule grossesse pour toute prestation naissance réservée.',
  },
}
