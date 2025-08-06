import { Link, useLocation } from "@tanstack/react-router";
import { ChevronDown, ChevronLeft, ChevronUp, Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showPortfolioMenu, setShowPortfolioMenu] = useState(false);
  const [showTarifsMenu, setShowTarifsMenu] = useState(false);

  return (
    <>
      <header className="flex items-center justify-center gap-10 p-4 mb-20 font-bold">
        <div className="flex max-sm:flex-1 justify-center items-center">
          <Link to="/">
            <img
              src="/assets/picture/logo.avif"
              alt="souvenir en boite"
              className="w-[178px]"
            />
          </Link>
        </div>

        <div className="md:flex flex-col hidden">
          <div className="flex gap-5 relative">
            <Link to="/">
              <button
                className={`p-2.5 hover:border-t hover:border-b border-black uppercase ${
                  pathname === "/" ? "border-t border-b" : ""
                }`}
              >
                Accueil
              </button>
            </Link>

            {/* Portfolio */}
            <div className="relative group">
              <Link to="/portfolio">
                <button
                  className={`p-2.5 hover:border-t hover:border-b border-black uppercase ${
                    pathname.includes("portfolio") ? "border-t border-b" : ""
                  }`}
                >
                  Portfolio
                </button>
              </Link>
              <div className="absolute left-0 mt-2 flex gap-5 border-b border-black p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                <Link to="/portfolio/mariage">
                  <button className="hover:text-red-300">MARIAGE</button>
                </Link>
                <Link to="/portfolio/grossesse">
                  <button className="hover:text-red-300">GROSSESSE</button>
                </Link>
                <Link to="/portfolio/naissance">
                  <button className="hover:text-red-300">NAISSANCE</button>
                </Link>
              </div>
            </div>

            {/* Tarifs */}
            <div className="relative group">
              <Link to="/tarifs">
                <button
                  className={`p-2.5 hover:border-t hover:border-b border-black uppercase ${
                    pathname.includes("tarifs") ? "border-t border-b" : ""
                  }`}
                >
                  Tarifs
                </button>
              </Link>
              <div className="absolute left-0 mt-2 flex gap-5 border-b border-black p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                <Link to="/tarifs/mariage">
                  <button className="hover:text-red-300">MARIAGE</button>
                </Link>
                <Link to="/tarifs/grossesse">
                  <button className="hover:text-red-300">GROSSESSE</button>
                </Link>
                <Link to="/tarifs/naissance">
                  <button className="hover:text-red-300">NAISSANCE</button>
                </Link>
              </div>
            </div>

            {/* Contact */}
            <Link to="/contact">
              <button
                className={`p-2.5 hover:border-t hover:border-b border-black uppercase ${
                  pathname.includes("contact") ? "border-t border-b" : ""
                }`}
              >
                Contact
              </button>
            </Link>
          </div>
        </div>

        {/* Icône Menu Mobile */}
        <div className="md:hidden">
          <button onClick={() => setShowMobileMenu(true)}>
            <Menu />
          </button>
        </div>
      </header>

      {/* MODALE MOBILE MENU */}
      {showMobileMenu && (
        <div className="fixed inset-0 bg-[#FFFBF4] z-50 flex flex-col items-end p-4">
          {/* Bouton de fermeture */}
          <button
            onClick={() => setShowMobileMenu(false)}
            className="text-black"
          >
            <X size={32} />
          </button>

          {/* Contenu de la modale */}
          <div className="flex-1 w-full flex flex-col justify-center items-center gap-20 text-2xl uppercase  font-[helvetica]">
            <Link to="/" onClick={() => setShowMobileMenu(false)}>
              Accueil
            </Link>

            {/* Portfolio - Menu mobile */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-3">
                {showPortfolioMenu ? (
                  <ChevronUp onClick={() => setShowPortfolioMenu(false)} />
                ) : (
                  <ChevronDown onClick={() => setShowPortfolioMenu(true)} />
                )}
                <Link to="/portfolio" onClick={() => setShowMobileMenu(false)}>
                  Portfolio
                </Link>
              </div>
              {showPortfolioMenu && (
                <div className="flex flex-col items-center gap-10 mt-10">
                  <Link
                    to="/portfolio/mariage"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    MARIAGE
                  </Link>
                  <Link
                    to="/portfolio/grossesse"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    GROSSESSE
                  </Link>
                  <Link
                    to="/portfolio/naissance"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    NAISSANCE
                  </Link>
                </div>
              )}
            </div>

            {/* Tarifs - Menu mobile */}
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-3">
                {showTarifsMenu ? (
                  <ChevronUp onClick={() => setShowTarifsMenu(false)} />
                ) : (
                  <ChevronDown onClick={() => setShowTarifsMenu(true)} />
                )}
                <Link to="/tarifs" onClick={() => setShowMobileMenu(false)}>
                  Tarifs
                </Link>
              </div>
              {showTarifsMenu && (
                <div className="flex flex-col items-center gap-10 mt-10">
                  <Link
                    to="/tarifs/mariage"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    MARIAGE
                  </Link>
                  <Link
                    to="/tarifs/grossesse"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    GROSSESSE
                  </Link>
                  <Link
                    to="/tarifs/naissance"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    NAISSANCE
                  </Link>
                </div>
              )}
            </div>

            <Link to="/contact" onClick={() => setShowMobileMenu(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
