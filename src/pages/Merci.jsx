import { Seo } from '../components/Seo'
import { PageTexte } from '../components/PageTexte'
import { Bouton } from '../components/ui'

export default function Merci() {
  return (
    <>
      {/* Page de confirmation : sans intérêt dans les résultats de recherche. */}
      <Seo
        chemin="/merci"
        titre="Message envoyé"
        description="Votre message a bien été envoyé."
        noindex
      />
      <PageTexte
        eyebrow="Message envoyé"
        titre="Merci pour votre message !"
        chapo="Je l'ai bien reçu et je vous réponds sous 24 h. En attendant, n'hésitez pas à parcourir les galeries."
        actions={
          <>
            <Bouton to="/portfolio">Voir le portfolio</Bouton>
            <Bouton to="/" variante="contourSombre">
              Retour à l'accueil
            </Bouton>
          </>
        }
      />
    </>
  )
}
