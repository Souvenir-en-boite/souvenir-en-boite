import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'

export default function Layout() {
  const { pathname } = useLocation()
  const mainRef = useRef(null)
  const premierRendu = useRef(true)

  useEffect(() => {
    // Au tout premier affichage, on ne touche ni au défilement ni au focus :
    // l'utilisateur peut arriver sur une ancre, et voler le focus au chargement
    // est désorientant.
    if (premierRendu.current) {
      premierRendu.current = false
      return
    }
    window.scrollTo(0, 0)
    // Replace le focus en haut du contenu : sans ça, après un clic sur un lien,
    // un lecteur d'écran reste positionné sur l'ancien élément et l'utilisateur
    // ne sait pas que la page a changé.
    mainRef.current?.focus()
  }, [pathname])

  return (
    <>
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-5 focus:py-3 focus:text-cream"
      >
        Aller au contenu principal
      </a>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="contenu" ref={mainRef} tabIndex={-1} className="flex-1 outline-none">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}
