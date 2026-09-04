import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Container, Bouton } from "./ui";
import { IconAppareilPhoto } from "./icons";
import { navigation, site } from "../data/site";

function Marque({ className = "" }) {
  return (
    <Link
      to="/"
      className={`flex items-center gap-3 text-ink ${className}`}
      aria-label={`${site.nom} — retour à l'accueil`}
    >
      <IconAppareilPhoto className="h-9 w-9 shrink-0" />
      <span className="font-display text-lg leading-[1.05] tracking-wide sm:text-xl">
        <span className="block">SOUVENIR</span>
        <span className="block">EN BOÎTE</span>
      </span>
    </Link>
  );
}

const lienClasses = ({ isActive }) =>
  `eyebrow relative py-2 transition-colors ${
    isActive ? "text-ink" : "text-ink-soft hover:text-ink"
  } after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-px after:bg-taupe-dark after:transition-transform after:duration-300 ${
    isActive ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"
  }`;

/**
 * Entrée de navigation, avec sous-menu optionnel.
 *
 * Le sous-menu s'ouvre au survol ET au focus : un menu réservé à la souris
 * serait inatteignable au clavier. En tabulant sur le parent, le sous-menu
 * apparaît et la tabulation suivante entre dedans. Échap referme et rend le
 * focus au parent.
 *
 * Le parent reste un lien : « Portfolio » mène toujours à /portfolio.
 */
function EntreeNavigation({ item }) {
  const [ouvert, setOuvert] = useState(false);
  const conteneurRef = useRef(null);
  const parentRef = useRef(null);
  const fermetureRef = useRef(null);

  // Petit délai avant fermeture : sans lui, un déplacement en diagonale vers
  // le sous-menu le fait disparaître sous le curseur.
  const programmerFermeture = () => {
    clearTimeout(fermetureRef.current);
    fermetureRef.current = setTimeout(() => setOuvert(false), 180);
  };
  const annulerFermeture = () => clearTimeout(fermetureRef.current);

  useEffect(() => () => clearTimeout(fermetureRef.current), []);

  if (!item.sousMenu) {
    return (
      <li>
        <NavLink to={item.to} end={item.to === "/"} className={lienClasses}>
          {item.libelle}
        </NavLink>
      </li>
    );
  }

  const surTouche = (e) => {
    if (e.key === "Escape" && ouvert) {
      setOuvert(false);
      parentRef.current?.focus();
    }
  };

  return (
    <li
      ref={conteneurRef}
      className="relative"
      onMouseEnter={() => {
        annulerFermeture();
        setOuvert(true);
      }}
      onMouseLeave={programmerFermeture}
      onFocus={() => {
        annulerFermeture();
        setOuvert(true);
      }}
      onBlur={(e) => {
        // Ne referme que si le focus quitte vraiment l'entrée et son sous-menu.
        if (!conteneurRef.current?.contains(e.relatedTarget)) setOuvert(false);
      }}
      onKeyDown={surTouche}
    >
      <NavLink
        ref={parentRef}
        to={item.to}
        className={lienClasses}
        aria-expanded={ouvert}
      >
        {item.libelle}
      </NavLink>

      {ouvert && (
        <ul className="absolute left-1/2 top-full z-50 mt-3 min-w-[11rem] -translate-x-1/2 border border-line bg-cream py-2 shadow-lg shadow-ink/5">
          {item.sousMenu.map((sous) => (
            <li key={sous.to}>
              <NavLink
                to={sous.to}
                className={({ isActive }) =>
                  `eyebrow block px-5 py-2.5 transition-colors hover:bg-sand ${
                    isActive
                      ? "text-taupe-dark"
                      : "text-ink-soft hover:text-ink"
                  }`
                }
              >
                {sous.libelle}
                <span className="sr-only"> — {item.libelle}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export function Header() {
  const [ouvert, setOuvert] = useState(false);
  const panneauRef = useRef(null);
  const declencheurRef = useRef(null);
  const { pathname } = useLocation();

  // Referme le menu à chaque changement de page.
  useEffect(() => setOuvert(false), [pathname]);

  useEffect(() => {
    if (!ouvert) return;

    const panneau = panneauRef.current;
    const focusables = panneau.querySelectorAll(
      "a[href], button:not([disabled])",
    );

    // Le panneau vient de passer de `invisible` à `visible` : `focus()` échoue
    // sans bruit tant que le navigateur n'a pas recalculé le style. On attend
    // donc la frame suivante.
    const frame = requestAnimationFrame(() => focusables[0]?.focus());

    // Empêche la page de défiler derrière le menu ouvert.
    const overflowInitial = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Échap ferme, Tab reste enfermé dans le panneau : sans ça, le focus
    // part sur la page cachée derrière et l'utilisateur au clavier se perd.
    const surTouche = (e) => {
      if (e.key === "Escape") {
        setOuvert(false);
        return;
      }
      if (e.key !== "Tab" || focusables.length === 0) return;
      const premier = focusables[0];
      const dernier = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === premier) {
        e.preventDefault();
        dernier.focus();
      } else if (!e.shiftKey && document.activeElement === dernier) {
        e.preventDefault();
        premier.focus();
      }
    };

    document.addEventListener("keydown", surTouche);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("keydown", surTouche);
      document.body.style.overflow = overflowInitial;
      // Rend le focus au bouton qui a ouvert le menu.
      declencheurRef.current?.focus();
    };
  }, [ouvert]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line bg-cream/95 backdrop-blur-sm">
        <Container className="flex items-center justify-between gap-6 py-4">
          <Marque />

          <nav aria-label="Navigation principale" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {navigation.map((item) => (
                <EntreeNavigation key={item.to} item={item} />
              ))}
            </ul>
          </nav>

          {/* Enveloppe plutôt que `hidden` sur le bouton : le composant Bouton
            applique déjà `inline-flex`, et les deux utilitaires de display
            entreraient en conflit dans la feuille de style. */}
          <div className="hidden lg:block">
            <Bouton to="/contact">Réserver une séance</Bouton>
          </div>

          <button
            ref={declencheurRef}
            type="button"
            onClick={() => setOuvert(true)}
            className="-mr-2 p-2 text-ink lg:hidden"
            aria-expanded={ouvert}
            aria-controls="menu-mobile"
          >
            <Menu className="h-7 w-7" aria-hidden="true" />
            <span className="sr-only">Ouvrir le menu</span>
          </button>
        </Container>
      </header>

      {/* Rendu HORS de <header> : `backdrop-blur` sur l'en-tête en fait un bloc
          conteneur pour les descendants en `position: fixed`, ce qui enfermait
          le panneau dans la hauteur de la barre au lieu de couvrir l'écran. */}
      {/*
        Le panneau reste monté en permanence : un élément retiré du DOM ne peut
        pas être animé à la fermeture.

        `invisible` fait le travail que faisait le démontage — il retire le
        panneau de l'ordre de tabulation ET de l'arbre d'accessibilité, donc
        les liens du menu fermé restent inatteignables. `visibility` bascule à
        la FIN de la transition, ce qui laisse l'animation de sortie se jouer.

        L'effet combine fondu et très léger agrandissement : un glissement
        latéral déborderait de l'écran et provoquerait un défilement
        horizontal. Le réglage système « réduire les animations » est déjà
        neutralisé globalement dans la feuille de style.
      */}
      <div
        id="menu-mobile"
        ref={panneauRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
        className={`fixed inset-0 z-50 flex flex-col bg-cream transition-[opacity,transform,visibility] duration-300 ease-out lg:hidden ${
          ouvert
            ? "visible translate-y-0 scale-100 opacity-100"
            : "invisible -translate-y-1 scale-[0.99] opacity-0"
        }`}
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4 sm:px-8">
          <Marque />
          <button
            type="button"
            onClick={() => setOuvert(false)}
            className="-mr-2 p-2 text-ink"
          >
            <X className="h-7 w-7" aria-hidden="true" />
            <span className="sr-only">Fermer le menu</span>
          </button>
        </div>

        <nav
          aria-label="Navigation principale"
          className="flex-1 overflow-y-auto px-5 py-10 sm:px-8"
        >
          <ul className="flex flex-col gap-7">
            {navigation.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `font-display text-3xl ${isActive ? "text-taupe-dark" : "text-ink"}`
                  }
                >
                  {item.libelle}
                </NavLink>

                {/* Sous-liens toujours dépliés : sur mobile, un accordéon
                      ajouterait un geste pour rien, la place ne manque pas. */}
                {item.sousMenu && (
                  <ul className="mt-4 flex flex-col gap-3 border-l border-line pl-5">
                    {item.sousMenu.map((sous) => (
                      <li key={sous.to}>
                        <NavLink
                          to={sous.to}
                          className={({ isActive }) =>
                            `eyebrow ${isActive ? "text-taupe-dark" : "text-ink-soft"}`
                          }
                        >
                          {sous.libelle}
                          <span className="sr-only"> — {item.libelle}</span>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <Bouton to="/contact" className="mt-12 w-full">
            Réserver une séance
          </Bouton>
        </nav>
      </div>
    </>
  );
}
