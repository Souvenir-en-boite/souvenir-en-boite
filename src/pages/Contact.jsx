import { useEffect, useRef } from 'react'
import { Instagram, Facebook, Phone, MapPin, Clock, Heart, ArrowRight } from 'lucide-react'
import { Seo } from '../components/Seo'
import { Container, Eyebrow } from '../components/ui'
import { site, heroContact } from '../data/site'

const champClasses =
  'w-full border border-line bg-cream px-4 py-3.5 text-ink outline-none transition-colors placeholder:text-ink-soft/60 hover:border-taupe focus:border-taupe-dark'

function Champ({ id, label, type = 'text', requis = false, autoComplete, ...rest }) {
  const Balise = type === 'textarea' ? 'textarea' : 'input'
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="eyebrow text-ink-soft">
        {label}
        {requis && (
          <>
            {' '}
            <span aria-hidden="true">*</span>
            <span className="sr-only">(obligatoire)</span>
          </>
        )}
      </label>
      <Balise
        id={id}
        name={label}
        type={type === 'textarea' ? undefined : type}
        required={requis}
        autoComplete={autoComplete}
        className={champClasses}
        {...rest}
      />
    </div>
  )
}

export default function Contact() {
  const retourRef = useRef(null)

  // FormSubmit exige une URL absolue pour `_next` : impossible de la deviner
  // au moment de la génération du site. On la recale sur le domaine réellement
  // visité, sinon un changement de domaine renverrait l'internaute vers une
  // page d'erreur APRÈS l'envoi — le message part, mais il croit avoir échoué.
  // La valeur pré-générée sert de repli si JavaScript est désactivé.
  useEffect(() => {
    if (retourRef.current) {
      retourRef.current.value = `${window.location.origin}/merci`
    }
  }, [])

  return (
    <>
      <Seo
        chemin="/contact"
        titre="Contact"
        description="Une question, un projet, une date à réserver ? Écrivez-moi, je réponds sous 24 h. Photographe disponible en France entière."
      />

      {/*
        Bandeau d'ouverture.

        Sur grand écran, l'image est calée à droite à sa largeur naturelle
        (`w-auto` sur toute la hauteur) : elle s'affiche ENTIÈRE, sans rognage.
        Son bord gauche se dissout dans le noir par un masque porté par l'image
        elle-même — il suit donc son bord réel quelle que soit la largeur de
        l'écran, là où un panneau flouté à position fixe laissait une arête.

        Sur mobile la photo reste en `cover` : à sa largeur naturelle elle
        laisserait de larges bandes vides sur un écran étroit.
      */}
      <section className="relative isolate flex min-h-[20rem] items-end overflow-hidden bg-[#0e0c0b] lg:min-h-[25rem] lg:items-center">
        <img
          src={heroContact.src}
          alt={heroContact.alt}
          width={heroContact.width}
          height={heroContact.height}
          fetchpriority="high"
          className="fondu-vers-la-gauche absolute inset-y-0 right-0 -z-10 h-full w-full object-cover object-center lg:w-auto lg:max-w-none"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(14,12,11,.96)_0%,rgba(14,12,11,.92)_50%,rgba(14,12,11,.62)_78%,rgba(14,12,11,.35)_100%)] lg:bg-none"
        />

        <Container className="py-12 lg:py-14">
          <div className="lg:max-w-[24rem]">
            <p className="eyebrow text-cream/85">Parlons de vos souvenirs</p>
            <h1 className="mt-4 font-display text-4xl text-cream sm:text-5xl">
              Contactez-moi.
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-cream/90 lg:max-w-none">
              Vous avez une question, un projet, ou vous souhaitez réserver une
              séance ? Je serai ravie d'échanger avec vous et de créer ensemble
              des souvenirs qui vous ressemblent.
            </p>
          </div>
        </Container>
      </section>

      <Container className="py-14 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-14">
          {/* Coordonnées */}
          <aside className="bg-sand p-8 lg:p-10">
            <h2 className="eyebrow text-ink">Restons en contact</h2>
            <span className="mt-4 block h-px w-12 bg-taupe" />

            <ul className="mt-8 flex flex-col gap-8">
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-taupe">
                  <Phone className="h-4 w-4 text-taupe-dark" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="eyebrow text-ink-soft">Téléphone</h3>
                  <a
                    href={`tel:${site.telephoneLien}`}
                    className="mt-1 block font-medium text-ink underline-offset-4 hover:underline"
                  >
                    {site.telephone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-taupe">
                  <MapPin className="h-4 w-4 text-taupe-dark" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="eyebrow text-ink-soft">Zone d'intervention</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink">{site.zone}</p>
                </div>
              </li>
            </ul>

            <h2 className="eyebrow mt-12 text-ink">Suivez mon univers</h2>
            <span className="mt-4 block h-px w-12 bg-taupe" />
            <ul className="mt-6 flex gap-3">
              <li>
                <a
                  href={site.reseaux.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-taupe text-taupe-dark transition-colors hover:bg-taupe hover:text-ink"
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
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-taupe text-taupe-dark transition-colors hover:bg-taupe hover:text-ink"
                >
                  <Facebook className="h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">Facebook (nouvelle fenêtre)</span>
                </a>
              </li>
            </ul>
          </aside>

          {/* Formulaire */}
          <div>
            <h2 className="eyebrow text-ink">Envoyez-moi un message</h2>
            <span className="mt-4 block h-px w-12 bg-taupe" />

            <form
              action={`https://formsubmit.co/${site.email}`}
              method="POST"
              className="mt-8 flex flex-col gap-6"
            >
              {/* Réglages FormSubmit : redirection vers la page de confirmation
                  plutôt qu'un nouvel onglet, et piège à robots invisible. */}
              <input type="hidden" name="_subject" value="Nouveau message depuis souvenir-en-boite.fr" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input ref={retourRef} type="hidden" name="_next" value={`${site.url}/merci`} />
              <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

              <div className="grid gap-6 sm:grid-cols-2">
                <Champ id="nom" label="Votre nom" requis autoComplete="name" />
                <Champ id="email" label="Votre e-mail" type="email" requis autoComplete="email" />
              </div>
              <Champ id="telephone" label="Votre téléphone" type="tel" autoComplete="tel" />
              <Champ id="sujet" label="Sujet" requis />
              <Champ
                id="message"
                label="Votre message"
                type="textarea"
                requis
                rows={6}
                placeholder="Dites-moi en plus sur votre projet…"
              />

              <div className="mt-2 flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-center sm:gap-10">
                <p className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-taupe-dark" aria-hidden="true" />
                  <span className="text-sm">
                    <span className="eyebrow block text-ink">Réponse rapide</span>
                    <span className="mt-1 block text-ink-soft">Sous 24 h, promis !</span>
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <Heart className="mt-0.5 h-5 w-5 shrink-0 text-taupe-dark" aria-hidden="true" />
                  <span className="text-sm">
                    <span className="eyebrow block text-ink">Un échange bienveillant</span>
                    <span className="mt-1 block text-ink-soft">À l'écoute de vos envies</span>
                  </span>
                </p>
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-3 border border-taupe bg-taupe px-8 py-4 eyebrow text-ink transition-colors duration-300 hover:border-taupe-dark hover:bg-taupe-dark hover:text-cream"
              >
                Envoyer le message
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <p className="text-xs leading-relaxed text-ink-soft">
                Vos informations servent uniquement à répondre à votre demande.
                Voir la{' '}
                <a href="/politique-de-confidentialite" className="underline underline-offset-2 hover:text-ink">
                  politique de confidentialité
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </Container>
    </>
  )
}
