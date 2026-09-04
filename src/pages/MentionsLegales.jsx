import { Seo } from '../components/Seo'
import { PageTexte } from '../components/PageTexte'
import { site } from '../data/site'

/**
 * ⚠️ À COMPLÉTER AVANT MISE EN LIGNE
 * Les mentions légales sont obligatoires (article 6 de la LCEN). Les champs
 * entre crochets doivent être renseignés par la cliente : sans eux, la page
 * ne remplit pas son obligation.
 */
export default function MentionsLegales() {
  return (
    <>
      <Seo
        chemin="/mentions-legales"
        titre="Mentions légales"
        description={`Mentions légales du site ${site.nom}, photographe mariage, grossesse et naissance.`}
        noindex
      />
      <PageTexte titre="Mentions légales">
        <h2>Éditeur du site</h2>
        {/*
          ⚠️ DEUX CHAMPS RESTENT À RENSEIGNER avant toute mise en ligne : adresse
          du siège et numéro de TVA. La cliente change de statut, ils ne sont pas
          encore arrêtés (au 2026-09-04).

          L'adresse du siège est OBLIGATOIRE (article 6-III-1 de la LCEN) : la
          page n'est pas conforme tant qu'elle manque.

          Le numéro de TVA ne s'affiche que si l'entreprise en a un. En franchise
          en base, on porte à la place « TVA non applicable, article 293 B du
          CGI ». Le changement de statut en cours décidera lequel des deux.
        */}
        <ul>
          <li><strong>Dénomination :</strong> {site.nom}</li>
          <li>
            <strong>Responsable de la publication :</strong> {site.photographe}{' '}
            Fenehari
          </li>
          <li><strong>Statut juridique :</strong> Auto-entrepreneuse</li>
          <li>
            <strong>Adresse du siège :</strong> 1 rue des Vieux Prés, 77370
            La Chapelle-Rablais
          </li>
          <li><strong>SIRET :</strong> 877 626 705 00025</li>
          <li><strong>Numéro de TVA intracommunautaire :</strong> [EN ATTENTE]</li>
          <li><strong>Téléphone :</strong> <a href={`tel:${site.telephoneLien}`}>{site.telephone}</a></li>
          <li><strong>E-mail :</strong> <a href={`mailto:${site.email}`}>{site.email}</a></li>
        </ul>

        <h2>Hébergement</h2>
        {/*
          Coordonnées relevées dans les conditions d'utilisation de Vercel
          (vercel.com/legal/terms), seule source officielle : les annuaires
          d'entreprises en donnent plusieurs, contradictoires.

          Vercel ne publie pas de numéro de téléphone de contact ; la LCEN
          demande nom, adresse et téléphone de l'hébergeur, on indique donc
          l'adresse du site à la place de ce dernier.
        */}
        <ul>
          <li><strong>Hébergeur :</strong> Vercel Inc.</li>
          <li>
            <strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina,
            CA 91723, États-Unis
          </li>
          <li>
            <strong>Site :</strong>{' '}
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
              vercel.com
            </a>
          </li>
        </ul>

        <h2>Propriété intellectuelle</h2>
        <p>
          L'ensemble des photographies, textes et éléments graphiques présents
          sur ce site est la propriété exclusive de {site.nom}, sauf mention
          contraire. Toute reproduction, représentation, modification ou
          diffusion, totale ou partielle, sans autorisation écrite préalable
          est interdite et constitue une contrefaçon au sens des articles
          L.335-2 et suivants du Code de la propriété intellectuelle.
        </p>
        <p>
          Les personnes photographiées ont donné leur accord pour la diffusion
          de leur image sur ce site. Toute demande de retrait peut être adressée
          à <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>

        <h2>Données personnelles</h2>
        <p>
          Le traitement des données transmises via le formulaire de contact est
          décrit dans la{' '}
          <a href="/politique-de-confidentialite">politique de confidentialité</a>.
        </p>

        <h2>Litiges</h2>
        <p>
          Le présent site est soumis au droit français. En cas de litige, et
          après une tentative de résolution amiable, les tribunaux français
          seront seuls compétents.
        </p>
      </PageTexte>
    </>
  )
}
