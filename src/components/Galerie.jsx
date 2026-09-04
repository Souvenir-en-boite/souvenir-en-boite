import { useCallback, useEffect, useRef, useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const estPaysage = (photo) => photo.width / photo.height > 1.2

/**
 * Mosaïque éditoriale : les photos horizontales occupent deux colonnes et
 * s'affichent donc en grand, les verticales une seule. `grid-flow-dense`
 * comble les trous laissés par les grands formats.
 *
 * Tout est calculé en CSS à partir des dimensions réelles des fichiers :
 * la mise en page est déjà correcte dans le HTML pré-généré, sans mesure
 * JavaScript ni saut visuel au chargement.
 */
export function Galerie({ photos, legende }) {
  const [indexActif, setIndexActif] = useState(null)

  return (
    <>
      <ul className="grid grid-flow-dense grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4">
        {photos.map((photo, i) => {
          const large = estPaysage(photo)
          return (
            <li
              key={photo.src}
              className={large ? 'col-span-2' : 'col-span-1'}
            >
              <button
                type="button"
                onClick={() => setIndexActif(i)}
                className="group block w-full overflow-hidden bg-sand"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  loading={i < 4 ? 'eager' : 'lazy'}
                  decoding="async"
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${
                    large ? 'aspect-[3/2]' : 'aspect-[3/4]'
                  }`}
                />
                <span className="sr-only">Agrandir : {photo.alt}</span>
              </button>
            </li>
          )
        })}
      </ul>

      {indexActif !== null && (
        <Visionneuse
          photos={photos}
          index={indexActif}
          setIndex={setIndexActif}
          legende={legende}
        />
      )}
    </>
  )
}

function Visionneuse({ photos, index, setIndex, legende }) {
  const dialogueRef = useRef(null)
  const fermerRef = useRef(null)
  const total = photos.length
  const photo = photos[index]

  // Point de départ du geste tactile, pour distinguer un balayage d'un simple
  // appui.
  const departGeste = useRef(null)
  // Décalage suivi pendant le geste, et sens d'arrivée de la photo suivante.
  const [decalage, setDecalage] = useState(0)
  const [enGeste, setEnGeste] = useState(false)
  const [sensEntree, setSensEntree] = useState(null)

  const fermer = useCallback(() => setIndex(null), [setIndex])
  const precedente = useCallback(() => {
    setSensEntree('gauche')
    setIndex((i) => (i - 1 + total) % total)
  }, [setIndex, total])
  const suivante = useCallback(() => {
    setSensEntree('droite')
    setIndex((i) => (i + 1) % total)
  }, [setIndex, total])

  const debutGeste = (e) => {
    const t = e.changedTouches[0]
    // `horizontal` est décidé une seule fois, au premier mouvement franc :
    // sans cela, un geste hésitant basculerait d'un axe à l'autre.
    departGeste.current = { x: t.clientX, y: t.clientY, horizontal: null }
    setEnGeste(true)
  }

  const mouvementGeste = (e) => {
    const depart = departGeste.current
    if (!depart) return
    const t = e.changedTouches[0]
    const dx = t.clientX - depart.x
    const dy = t.clientY - depart.y
    if (depart.horizontal === null && (Math.abs(dx) > 8 || Math.abs(dy) > 8)) {
      depart.horizontal = Math.abs(dx) > Math.abs(dy)
    }
    if (depart.horizontal) setDecalage(dx)
  }

  const finGeste = (e) => {
    const depart = departGeste.current
    departGeste.current = null
    setEnGeste(false)
    setDecalage(0)
    if (!depart || !depart.horizontal) return
    // Seuil de 50 px : en deçà, la photo revient en place plutôt que de changer.
    const dx = e.changedTouches[0].clientX - depart.x
    if (Math.abs(dx) < 50) return
    if (dx < 0) suivante()
    else precedente()
  }

  useEffect(() => {
    const elementPrecedent = document.activeElement
    fermerRef.current?.focus()

    const overflowInitial = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const surTouche = (e) => {
      if (e.key === 'Escape') return fermer()
      if (e.key === 'ArrowLeft') return precedente()
      if (e.key === 'ArrowRight') return suivante()
      if (e.key !== 'Tab') return

      // Maintient le focus à l'intérieur de la visionneuse.
      const focusables = dialogueRef.current.querySelectorAll('button')
      const premier = focusables[0]
      const dernier = focusables[focusables.length - 1]
      if (e.shiftKey && document.activeElement === premier) {
        e.preventDefault()
        dernier.focus()
      } else if (!e.shiftKey && document.activeElement === dernier) {
        e.preventDefault()
        premier.focus()
      }
    }

    document.addEventListener('keydown', surTouche)
    return () => {
      document.removeEventListener('keydown', surTouche)
      document.body.style.overflow = overflowInitial
      elementPrecedent?.focus?.()
    }
  }, [fermer, precedente, suivante])

  return (
    <div
      ref={dialogueRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${legende} — image ${index + 1} sur ${total}`}
      className="fixed inset-0 z-50 flex flex-col bg-night/97"
    >
      <div className="flex items-center justify-between px-5 py-4 text-cream-soft">
        <p className="eyebrow" aria-live="polite">
          {index + 1} / {total}
        </p>
        <button
          ref={fermerRef}
          type="button"
          onClick={fermer}
          className="-mr-2 p-2 transition-opacity hover:opacity-70"
        >
          <X className="h-7 w-7" aria-hidden="true" />
          <span className="sr-only">Fermer la visionneuse</span>
        </button>
      </div>

      {/*
        Sous 640 px, les flèches passent en superposition sur les bords : dans
        le flux, elles amputaient l'image d'une centaine de pixels de largeur.
        Le balayage devient le geste principal, elles restent le repli visible
        — et le seul moyen accessible à qui ne peut pas balayer.
      */}
      <div
        className="relative flex min-h-0 flex-1 items-center justify-center px-3 pb-6 sm:gap-6 sm:px-6"
        onTouchStart={debutGeste}
        onTouchMove={mouvementGeste}
        onTouchEnd={finGeste}
        onTouchCancel={finGeste}
      >
        <button
          type="button"
          onClick={precedente}
          className="absolute left-1 z-10 shrink-0 rounded-full bg-night/45 p-3 text-cream-soft backdrop-blur-sm transition-opacity hover:opacity-70 sm:static sm:bg-transparent sm:backdrop-blur-none"
        >
          <ChevronLeft className="h-8 w-8" aria-hidden="true" />
          <span className="sr-only">Photo précédente</span>
        </button>

        {/*
          `key` sur l'index : changer de photo remonte l'élément, ce qui rejoue
          l'animation d'entrée. Pendant le geste, la photo suit le doigt à 60 %
          de sa course — cette résistance signale qu'on tire sur un contenu
          plutôt que de le déplacer librement.
        */}
        <img
          key={index}
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          style={{
            transform: decalage ? `translateX(${decalage * 0.6}px)` : undefined,
            opacity: decalage
              ? Math.max(0.4, 1 - Math.abs(decalage) / 420)
              : undefined,
            transition: enGeste
              ? 'none'
              : 'transform 220ms ease-out, opacity 220ms ease-out',
          }}
          className={`max-h-full min-h-0 w-auto max-w-full object-contain ${
            !decalage && sensEntree === 'droite'
              ? 'entre-de-droite'
              : !decalage && sensEntree === 'gauche'
                ? 'entre-de-gauche'
                : ''
          }`}
        />

        <button
          type="button"
          onClick={suivante}
          className="absolute right-1 z-10 shrink-0 rounded-full bg-night/45 p-3 text-cream-soft backdrop-blur-sm transition-opacity hover:opacity-70 sm:static sm:bg-transparent sm:backdrop-blur-none"
        >
          <ChevronRight className="h-8 w-8" aria-hidden="true" />
          <span className="sr-only">Photo suivante</span>
        </button>
      </div>
    </div>
  )
}
