// Formules par univers.
//
// Arbitrages du 2026-09-02, en recoupant la maquette et le mail de la cliente :
// la maquette sert de base visuelle, le mail est la liste de corrections
// par-dessus (il demande d'ailleurs de remplacer une phrase qui figure dans la
// maquette). Donc : mise en page de la maquette, contenu du mail.
//   - prix mariage : ceux de la maquette (1 500 / 2 100 / 2 800 €) ;
//   - contenu des formules : celui du mail (clé USB, nombres de photos) ;
//   - option vidéo : reprise de la maquette, mais « sur devis » — le montant
//     de 1 000 € n'apparaît nulle part sous la plume de la cliente.

const PERSONNALISATION_MARIAGE =
  "Les formules sont entièrement personnalisables selon vos envies et les spécificités de votre journée. N'hésitez pas à me contacter pour imaginer ensemble la formule qui vous ressemble."

const PERSONNALISATION_SEANCE =
  "Les formules sont entièrement personnalisables selon vos envies. N'hésitez pas à me contacter pour imaginer ensemble la formule qui vous ressemble."

export const prestations = {
  mariage: {
    titre: 'Mariage',
    eyebrow: 'Tarifs mariage',
    heroTitre: 'Des formules pensées pour sublimer chaque instant.',
    heroTexte:
      "Chaque mariage est unique, c'est pourquoi je propose des formules adaptées à vos envies et à votre journée.",
    hero: {
      src: '/assets/picture/prestations/hero-prestations-mariage.avif',
      width: 1920,
      height: 1147,
      alt: "Les mariés entourés de leurs invités qui posent en riant autour d'un cadre doré, en extérieur",
    },
    intro:
      "Des préparatifs jusqu'à la dernière danse, je saisis les instants vrais : les éclats de rire, les larmes de joie, les petits détails qui font de votre journée une histoire unique.",
    couverture: '/assets/picture/tarif-mariage.avif',
    couvertureAlt: 'Couple de mariés photographié en extérieur',
    formules: [
      {
        nom: 'Essentielle',
        sousTitre: 'L’essentiel de votre journée',
        prix: '1 500 €',
        icone: 'alliances',
        inclus: [
          "Présence du photographe de la cérémonie jusqu'à la pièce montée, jusqu'à 1 h du matin (100 € par heure supplémentaire)",
          "Livraison de l'intégralité des photos sur clé USB (environ 800 photos)",
          '50 photos retouchées, chaque image travaillée individuellement sur Photoshop et Lightroom',
        ],
      },
      {
        nom: 'Émotion',
        sousTitre: 'Pour revivre chaque instant',
        prix: '2 100 €',
        icone: 'appareil',
        coupDeCoeur: true,
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
        sousTitre: 'L’expérience complète',
        prix: '2 800 €',
        icone: 'diamant',
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
    optionVideo: {
      titre: 'Ajoutez la vidéo à votre reportage',
      texte:
        "Parce que certaines émotions méritent aussi d'être vécues en mouvement. Ajoutez la prestation de vidéaste de mariage à votre reportage photo et revivez votre journée à travers les images, les voix, les regards et les émotions.",
      // ⚠️ La maquette affichait « à partir de 1 000 € ». Ce montant n'apparaît
      // nulle part dans le mail de la cliente : à confirmer avant de l'afficher.
      prix: 'Sur devis',
      image: '/assets/picture/portfolio-mariage/portfolio-mariage-20.avif',
      imageAlt:
        'Mariée lançant son bouquet dans un jardin, à contre-jour du soleil couchant',
      imageLargeur: 974,
      imageHauteur: 650,
      etapes: [
        { icone: 'preparatifs', libelle: 'Préparatifs' },
        { icone: 'ceremonie', libelle: 'Cérémonie' },
        { icone: 'entree', libelle: 'Entrée des mariés' },
        { icone: 'discours', libelle: 'Discours' },
        { icone: 'moments', libelle: 'Moments forts' },
        { icone: 'bal', libelle: 'Ouverture de bal' },
        { icone: 'cocktail', libelle: 'Cocktail & ambiance' },
        { icone: 'piece', libelle: 'Pièce montée' },
        { icone: 'film', libelle: 'Film monté et livré en haute définition' },
      ],
    },
  },

  grossesse: {
    titre: 'Grossesse',
    eyebrow: 'Tarifs grossesse',
    heroTitre: 'Des séances pour célébrer ce moment unique.',
    heroTexte:
      'En studio ou en extérieur, seule ou entourée des vôtres, je crée des images douces qui révèlent toute la beauté de cette attente.',
    hero: {
      src: '/assets/picture/prestations/hero-prestations-grossesse.avif',
      width: 1920,
      height: 1280,
      alt: 'Future maman allongée en studio sur fond blanc, aux côtés de son compagnon et de leur petite fille',
    },
    intro:
      "Parce que ce petit miracle qui grandit en vous mérite d'être célébré, je crée des images en studio ou en extérieur qui révèlent toute la beauté de ce moment si spécial.",
    couverture: '/assets/picture/tarif-grossesse.avif',
    couvertureAlt: 'Future maman photographiée en studio',
    formules: [
      {
        nom: 'Silver',
        sousTitre: '2 tenues, 5 photos retouchées',
        prix: '290 €',
        icone: 'coeur',
        inclus: [
          '2 tenues (personnelles ou proposées en studio)',
          'Remise de toutes les photos brutes en format numérique',
          '5 photos retouchées au choix',
        ],
      },
      {
        nom: 'Gold',
        sousTitre: '3 tenues, 8 photos retouchées',
        prix: '390 €',
        icone: 'appareil',
        coupDeCoeur: true,
        inclus: [
          '3 tenues (personnelles ou proposées en studio)',
          'Remise de toutes les photos brutes en format numérique',
          '8 photos retouchées',
        ],
      },
      {
        nom: 'Diamond',
        sousTitre: '4 tenues, 12 photos retouchées et un livre',
        prix: '690 €',
        icone: 'diamant',
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
    eyebrow: 'Tarifs naissance',
    heroTitre: 'Les premiers jours, gardés pour toujours.',
    heroTexte:
      'Les premiers instants de vie sont éphémères. Avec patience et tendresse, je capture les premiers regards, les petites mains et les grands câlins.',
    hero: {
      // Provisoire : en attente de la photo choisie par la cliente.
      src: '/assets/picture/portfolio-naissance/portfolio-naissance-20.avif',
      width: 974,
      height: 806,
      // Recadre vers le haut : sur un bandeau très large, un cadrage centré
      // coupait le visage de l'enfant.
      cadrage: 'center 30%',
      alt: 'Petite fille en robe de dentelle blanche, riant assise devant un décor floral en studio',
    },
    intro:
      'Les premiers instants de vie sont éphémères mais infiniment précieux. Avec patience et tendresse, je capture les premiers regards, les petites mains, les grands câlins.',
    couverture: '/assets/picture/tarif-naissance.avif',
    couvertureAlt: 'Nouveau-né photographié en studio',
    formules: [
      {
        nom: 'Silver',
        sousTitre: '2 tenues, 5 photos retouchées',
        prix: '290 €',
        icone: 'coeur',
        inclus: [
          '2 tenues (personnelles ou proposées en studio)',
          'Remise de toutes les photos brutes en format numérique',
          '5 photos retouchées au choix',
        ],
      },
      {
        nom: 'Gold',
        sousTitre: '3 tenues, 8 photos retouchées',
        prix: '390 €',
        icone: 'appareil',
        coupDeCoeur: true,
        inclus: [
          '3 tenues (personnelles ou proposées en studio)',
          'Remise de toutes les photos brutes en format numérique',
          '8 photos retouchées',
        ],
      },
      {
        nom: 'Diamond',
        sousTitre: '4 tenues, 12 photos retouchées et un livre',
        prix: '690 €',
        icone: 'diamant',
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
