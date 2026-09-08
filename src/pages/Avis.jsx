import { useEffect } from 'react'
import { Seo } from '../components/Seo'
import { Container, Bouton, Eyebrow } from '../components/ui'
import { site } from '../data/site'

// Widget d'avis Mariages.net. Le script ajoute sa feuille de style dans le
// <head>, puis `wpShowReviews` va chercher les avis en XHR et les injecte dans
// #wp-widget-reviews. Rien n'est écrit avec document.write : on peut donc le
// charger après le rendu, sans risque pour la page.
const WIDGET_SCRIPT =
  'https://cdn1.mariages.net/js/wp-widget.js?symfnw-FR48-1-20260907-006-0_www_m_'
const WIDGET_ID = 157250
const PAGE_AVIS =
  'https://www.mariages.net/photo-mariage/souvenir-en-boite--e157250/avis'

/*
 * Contenu de repli, présent dans le HTML pré-généré : c'est ce que voient les
 * moteurs de recherche, les visiteurs sans JavaScript, et tout le monde tant
 * que les avis n'ont pas fini de charger. Le widget écrase ce bloc quand il
 * répond ; s'il ne répond pas, le lien reste — jamais un trou dans la page.
 *
 * Passé en `dangerouslySetInnerHTML` pour que React cesse de suivre ce qui se
 * trouve à l'intérieur : sans cela, il tenterait de retirer au démontage des
 * nœuds que le widget a déjà remplacés, et lèverait une erreur.
 */
const REPLI = `
  <p class="text-ink-soft">
    Les avis se chargent depuis Mariages.net.
    <a href="${PAGE_AVIS}" target="_blank" rel="nofollow noopener"
       class="underline underline-offset-4 hover:text-ink">Les lire directement sur Mariages.net</a>
    si rien ne s'affiche ici.
  </p>
`

export default function Avis() {
  useEffect(() => {
    // Le script n'est chargé que sur cette page : aucune requête vers
    // Mariages.net tant que le visiteur ne vient pas lire les avis.
    if (window.wpShowReviews) {
      window.wpShowReviews(WIDGET_ID, 'white')
      return
    }

    const script = document.createElement('script')
    script.src = WIDGET_SCRIPT
    script.async = true
    script.onload = () => window.wpShowReviews?.(WIDGET_ID, 'white')
    document.body.appendChild(script)

    return () => script.remove()
  }, [])

  return (
    <>
      <Seo
        chemin="/avis"
        titre="Avis clients"
        description={`Les avis des mariés qui m'ont fait confiance, publiés sur Mariages.net. ${site.zone}`}
      />

      {/* Pas de grand titre à l'écran : le widget affiche déjà le nom, la note
          et le nombre d'avis, autant lui laisser le haut de la page. D'où le
          bloc d'introduction écrit à la main plutôt qu'un <TitreSection>, qui
          impose un titre visible. Le <h1> reste dans le HTML — une page sans
          titre de premier niveau se lit mal au lecteur d'écran et se référence
          mal. */}
      <Container className="pt-14 pb-12 lg:pt-20">
        <h1 className="sr-only">Avis clients</h1>
        <div className="max-w-2xl">
          <Eyebrow>Ils m'ont fait confiance</Eyebrow>
          <span className="mt-5 block h-px w-16 bg-taupe" />
          <p className="mt-6 leading-relaxed text-ink-soft">
            Rien ne raconte mieux une journée que celles et ceux qui l'ont
            vécue. Voici les retours laissés par les couples que j'ai
            accompagnés, publiés sur Mariages.net.
          </p>
        </div>
      </Container>

      <Container className="pb-16 lg:pb-24">
        {/* Le widget arrive avec la mise en page de Mariages.net : on lui donne
            un fond clair et de la marge, sans chercher à le redessiner.
            `overflow-x-auto` est un garde-fou : si leur contenu dépasse en
            largeur sur mobile, il défile dans son cadre au lieu de pousser
            toute la page. */}
        <div
          id="wp-widget-reviews"
          className="overflow-x-auto bg-sand px-6 py-10 sm:px-10"
          dangerouslySetInnerHTML={{ __html: REPLI }}
        />
      </Container>

      <Container className="pb-4">
        <div className="flex flex-col gap-7 bg-sand px-6 py-10 sm:px-7 lg:flex-row lg:items-center lg:gap-12 lg:px-14">
          <div className="lg:flex-1">
            <h2 className="font-display text-xl uppercase tracking-wide sm:text-2xl lg:text-3xl">
              Vous m'avez confié votre journée ?
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-soft">
              Laisser un avis prend deux minutes et aide les couples qui
              cherchent leur photographe à se décider. Et si vous en êtes encore
              à choisir : écrivez-moi, on en parle sans engagement.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Bouton href={PAGE_AVIS} target="_blank" rel="nofollow noopener">
              Laisser un avis
            </Bouton>
            <Bouton to="/contact" variante="contourSombre">
              Me contacter
            </Bouton>
          </div>
        </div>
      </Container>
    </>
  )
}
