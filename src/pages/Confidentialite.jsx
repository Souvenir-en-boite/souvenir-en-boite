import { Seo } from '../components/Seo'
import { PageTexte } from '../components/PageTexte'
import { site } from '../data/site'

export default function Confidentialite() {
  return (
    <>
      <Seo
        chemin="/politique-de-confidentialite"
        titre="Politique de confidentialité"
        description={`Comment vos données personnelles sont collectées, utilisées et protégées sur le site ${site.nom}.`}
        noindex
      />
      <PageTexte
        titre="Politique de confidentialité"
        chapo="Votre vie privée est importante pour moi. Cette page explique comment vos données sont collectées, utilisées et protégées lorsque vous visitez ce site ou réservez une séance."
      >
        {/* ⚠️ À METTRE À JOUR à chaque modification du traitement des données. */}
        <p><strong>Dernière mise à jour :</strong> 03/09/2026</p>

        <h2>1. Données collectées</h2>
        <p>Lorsque vous me contactez via le formulaire, je recueille :</p>
        <ul>
          <li>votre nom ;</li>
          <li>votre adresse e-mail ;</li>
          <li>votre numéro de téléphone, si vous le renseignez ;</li>
          <li>les informations liées à votre projet (type de séance, date souhaitée…).</li>
        </ul>
        <p>
          Le formulaire est traité par le service FormSubmit, qui achemine votre
          message vers ma boîte e-mail sans le conserver durablement.
        </p>

        <h2>2. Utilisation des données</h2>
        <p>Vos données servent uniquement à :</p>
        <ul>
          <li>répondre à votre demande ;</li>
          <li>organiser votre séance photo ;</li>
          <li>vous adresser un devis ou une facture ;</li>
          <li>partager vos photos via une galerie privée.</li>
        </ul>
        <p>
          Aucune information n'est vendue ni transmise à des tiers sans votre
          consentement.
        </p>

        <h2>3. Cookies et mesure d'audience</h2>
        <p>
          Ce site ne dépose aucun cookie publicitaire ni traceur tiers, et
          n'utilise aucun outil de mesure d'audience. Les polices de caractères
          sont hébergées sur le site lui-même.
        </p>
        <p>
          Une seule ressource provient d'un service externe : le badge
          « Recommandé sur Mariages.net » affiché en pied de page, chargé depuis
          les serveurs de Mariages.net. Son affichage transmet votre adresse IP
          à ce service. Il n'est chargé que si vous faites défiler la page
          jusqu'au pied de page.
        </p>

        <h2>4. Conservation des données</h2>
        <p>
          Vos données sont conservées le temps nécessaire au traitement de votre
          demande et à la durée légale applicable aux documents comptables, puis
          supprimées ou archivées de façon sécurisée.
        </p>

        <h2>5. Vos droits</h2>
        <p>
          Conformément au Règlement général sur la protection des données
          (RGPD), vous disposez d'un droit d'accès, de rectification,
          d'effacement, de limitation et d'opposition sur vos données.
        </p>
        <p>
          Pour exercer ces droits, écrivez-moi à{' '}
          <a href={`mailto:${site.email}`}>{site.email}</a>. Vous pouvez
          également introduire une réclamation auprès de la CNIL
          (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>).
        </p>

        <h2>6. Droit à l'image</h2>
        <p>
          Vos photographies ne sont publiées sur ce site ou sur les réseaux
          sociaux qu'avec votre accord écrit. Vous pouvez retirer cet accord à
          tout moment en me contactant.
        </p>
      </PageTexte>
    </>
  )
}
