import { Seo } from '../components/Seo'
import { PageTexte } from '../components/PageTexte'
import { Bouton } from '../components/ui'

export default function NonTrouvee() {
  return (
    <>
      <Seo
        chemin="/404"
        titre="Page introuvable"
        description="Cette page n'existe pas ou a été déplacée."
        noindex
      />
      <PageTexte
        eyebrow="Erreur 404"
        titre="Cette page n'existe plus"
        chapo="Le lien que vous avez suivi est peut-être ancien, ou la page a été déplacée lors de la refonte du site."
        actions={
          <>
            <Bouton to="/">Retour à l'accueil</Bouton>
            <Bouton to="/portfolio" variante="contourSombre">
              Voir le portfolio
            </Bouton>
          </>
        }
      />
    </>
  )
}
