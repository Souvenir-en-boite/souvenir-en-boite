export const PrivacyPolicy = () => {
  return (
    <div className="flex items-center justify-center mb-10 px-10 md:px-0">
      <div className="max-w-[600px] font-sans text-[#514033]">
        <h1 className="text-3xl">Politique de confidentialité</h1>
        <p>Dernière mise à jour : [ 01/06/2025 ]</p>
        <p>
          Votre vie privée est importante pour moi. Cette politique explique
          comment vos données sont collectées, utilisées et protégées lorsque
          vous visitez ce site ou réservez un shooting.
        </p>
        <h2 className="text-3xl">1. Données collectées</h2>
        <p>
          Lorsque vous utilisez ce site ou me contactez, je peux recueillir les
          informations suivantes :
        </p>
        <ul className="list-disc ml-5">
          <li>Prénom, nom</li>
          <li>Adresse e-mail</li>
          <li>Numéro de téléphone</li>
          <li>
            Détails liés à la séance photo (type de shooting, date souhaitée,
            etc.)
          </li>
        </ul>
        <h2 className="text-3xl">2. Utilisation des données</h2>
        <p>Vos données sont utilisées uniquement pour :</p>
        <ul className="list-disc ml-5">
          <li>Répondre à vos demandes</li>
          <li>Organiser votre séance photo</li>
          <li>Vous envoyer un devis ou une facture</li>
          <li>Partager avec vous vos photos via une galerie privée</li>
        </ul>
        <p>
          Aucune de vos informations ne sera vendue ni partagée à des tiers sans
          votre consentement.
        </p>
        <h2 className="text-3xl">3. Cookies</h2>
        <p>Ce site peut utiliser des cookies pour :</p>
        <ul className="list-disc ml-5">
          <li>Améliorer l'expérience utilisateur</li>
          <li>
            Analyser la fréquentation du site via des outils comme Google
            Analytics
          </li>
        </ul>
        <p>
          Vous pouvez refuser les cookies dans les paramètres de votre
          navigateur
        </p>
        <h2 className="text-3xl">4. Conservation des données</h2>
        <p>
          Vos données sont conservées le temps nécessaire à la gestion de nos
          échanges, puis supprimées ou archivées de façon sécurisée.
        </p>
        <h2 className="text-3xl">5. Sécurité</h2>
        <p>
          Toutes les données sont traitées de manière confidentielle. J'utilise
          des outils sécurisés pour stocker et protéger vos informations.
        </p>
        <h2 className="text-3xl">6. Droit d'accès et de suppression</h2>
        <p>Conformément au RGPD, vous avez le droit de :</p>
        <ul className="list-disc ml-5">
          <li>Accéder à vos données personnelles</li>
          <li>Les corriger</li>
          <li>En demander la suppression</li>
        </ul>
        <p>
          Pour cela, il vous suffit d’envoyer un e-mail à : [{" "}
          <a href="mailto:souvenir-en-boite@hotmail.com">
            souvenir-en-boite@hotmail.com
          </a>
          {" "}]
        </p>
        <p>
          🛡️ Votre confiance est précieuse. Merci de la respecter en retour.
        </p>
        <p>Besoin de plus d’infos ? Contactez-moi, je suis là pour vous.</p>
      </div>
    </div>
  );
};
