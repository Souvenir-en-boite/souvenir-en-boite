import { ViteReactSSG } from 'vite-react-ssg'
import Layout from './components/Layout'
import Accueil from './pages/Accueil'
import Portfolio from './pages/Portfolio'
import PortfolioCategorie from './pages/PortfolioCategorie'
import Prestations from './pages/Prestations'
import PrestationCategorie from './pages/PrestationCategorie'
import APropos from './pages/APropos'
import Contact from './pages/Contact'
import Merci from './pages/Merci'
import MentionsLegales from './pages/MentionsLegales'
import Confidentialite from './pages/Confidentialite'
import NonTrouvee from './pages/NonTrouvee'
import './styles/index.css'

const univers = ['mariage', 'grossesse', 'naissance']

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Accueil /> },

      { path: 'portfolio', element: <Portfolio /> },
      ...univers.map((cle) => ({
        path: `portfolio/${cle}`,
        element: <PortfolioCategorie cle={cle} />,
      })),

      { path: 'prestations', element: <Prestations /> },
      ...univers.map((cle) => ({
        path: `prestations/${cle}`,
        element: <PrestationCategorie cle={cle} />,
      })),

      { path: 'a-propos', element: <APropos /> },
      { path: 'contact', element: <Contact /> },
      { path: 'merci', element: <Merci /> },
      { path: 'mentions-legales', element: <MentionsLegales /> },
      { path: 'politique-de-confidentialite', element: <Confidentialite /> },

      // Page d'erreur générée en dur pour les hébergeurs qui servent /404.html,
      // et repli côté navigation pour toute URL inconnue.
      { path: '404', element: <NonTrouvee /> },
      { path: '*', element: <NonTrouvee /> },
    ],
  },
]

export const createRoot = ViteReactSSG({ routes })
