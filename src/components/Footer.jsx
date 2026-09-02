import { Link } from 'react-router-dom'
import { Instagram, Facebook, Phone, MapPin } from 'lucide-react'
import { Container } from './ui'
import { IconAppareilPhoto } from './icons'
import { navigation, site, univers } from '../data/site'

const anneeCourante = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="mt-24 bg-night text-cream-soft">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <IconAppareilPhoto className="h-9 w-9 shrink-0" />
            <span className="font-display text-lg leading-[1.05] tracking-wide">
              <span className="block">SOUVENIR</span>
              <span className="block">EN BOÎTE</span>
            </span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream-soft/75">
            {site.baseline}. Des images authentiques, des émotions vraies, des
            souvenirs qui traversent le temps.
          </p>
        </div>

        <nav aria-label="Pied de page">
          <h2 className="eyebrow text-gold-light">Navigation</h2>
          <ul className="mt-5 flex flex-col gap-3 text-sm">
            {navigation.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-cream-soft/80 transition-colors hover:text-cream-soft">
                  {item.libelle}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow text-gold-light">Prestations</h2>
          <ul className="mt-5 flex flex-col gap-3 text-sm">
            {univers.map((u) => (
              <li key={u.cle}>
                <Link
                  to={`/prestations/${u.cle}`}
                  className="text-cream-soft/80 transition-colors hover:text-cream-soft"
                >
                  Photographe {u.titre.toLowerCase()}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow text-gold-light">Me contacter</h2>
          <ul className="mt-5 flex flex-col gap-4 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" aria-hidden="true" />
              <a href={`tel:${site.telephoneLien}`} className="transition-colors hover:text-cream-soft">
                {site.telephone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" aria-hidden="true" />
              <span className="text-cream-soft/80">{site.zone}</span>
            </li>
          </ul>

          <h2 className="eyebrow mt-8 text-gold-light">Suivez mon univers</h2>
          <ul className="mt-4 flex gap-3">
            <li>
              <a
                href={site.reseaux.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cream-soft/30 transition-colors hover:border-gold-light hover:text-gold-light"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Instagram (nouvelle fenêtre)</span>
              </a>
            </li>
            <li>
              <a
                href={site.reseaux.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cream-soft/30 transition-colors hover:border-gold-light hover:text-gold-light"
              >
                <Facebook className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Facebook (nouvelle fenêtre)</span>
              </a>
            </li>
          </ul>

          {/*
            Badge Mariages.net.

            Le fournisseur livre aussi un script `wp-rated.js` appelant
            `wpShowRatedv2()`. Il n'est PAS installé : sa seule fonction est de
            rafraîchir l'URL du badge si la note change, et il le fait par une
            requête XHR SYNCHRONE, qui bloque le rendu de la page — un procédé
            déprécié. Vérifié : après son exécution, l'image est inchangée.

            Si la note évolue, il suffit de changer le nombre dans le nom du
            fichier (`badge-rated-10.png`).
          */}
          <a
            href="https://www.mariages.net/photo-mariage/souvenir-en-boite--e157250"
            target="_blank"
            rel="nofollow noopener"
            title="Recommandé sur Mariages.net"
            className="mt-8 inline-block transition-opacity hover:opacity-85"
          >
            <img
              src="https://cdn1.mariages.net/assets/img/badges/rated/badge-rated-10.png"
              alt="Souvenir en boîte, recommandé sur Mariages.net — 5 étoiles sur 10 avis"
              width="250"
              height="250"
              loading="lazy"
              decoding="async"
              className="h-28 w-28"
            />
            <span className="sr-only">(nouvelle fenêtre)</span>
          </a>
        </div>
      </Container>

      <div className="border-t border-cream-soft/15">
        <Container className="flex flex-col gap-4 py-6 text-xs text-cream-soft/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© {anneeCourante} {site.nom}. Tous droits réservés.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link to="/mentions-legales" className="underline underline-offset-4 hover:text-cream-soft">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link to="/politique-de-confidentialite" className="underline underline-offset-4 hover:text-cream-soft">
                Politique de confidentialité
              </Link>
            </li>
          </ul>
        </Container>
      </div>
    </footer>
  )
}
