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

  const fermer = useCallback(() => setIndex(null), [setIndex])
  const precedente = useCallback(
    () => setIndex((i) => (i - 1 + total) % total),
    [setIndex, total],
  )
  const suivante = useCallback(
    () => setIndex((i) => (i + 1) % total),
    [setIndex, total],
  )

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

      <div className="flex min-h-0 flex-1 items-center justify-center gap-2 px-2 pb-6 sm:gap-6 sm:px-6">
        <button
          type="button"
          onClick={precedente}
          className="shrink-0 p-3 text-cream-soft transition-opacity hover:opacity-70"
        >
          <ChevronLeft className="h-8 w-8" aria-hidden="true" />
          <span className="sr-only">Photo précédente</span>
        </button>

        <img
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          className="max-h-full min-h-0 w-auto max-w-full object-contain"
        />

        <button
          type="button"
          onClick={suivante}
          className="shrink-0 p-3 text-cream-soft transition-opacity hover:opacity-70"
        >
          <ChevronRight className="h-8 w-8" aria-hidden="true" />
          <span className="sr-only">Photo suivante</span>
        </button>
      </div>
    </div>
  )
}
