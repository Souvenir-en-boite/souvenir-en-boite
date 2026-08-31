import { Head } from 'vite-react-ssg'
import { Seo } from '../components/Seo'
import { Container, Bouton, Eyebrow } from '../components/ui'
import {
  icones,
  IconAppareilPhoto,
  IconCoeur,
  IconVideo,
  IconMedaille,
} from '../components/icons'
import { site, univers } from '../data/site'

const savoirFaire = [
  {
    Icone: IconAppareilPhoto,
    titre: 'Photographie',
    texte: 'Mariage, grossesse, naissance',
  },
  {
    Icone: IconVideo,
    titre: 'Vidéaste de mariage',
    texte: 'Des films authentiques et émotionnels',
  },
  {
    Icone: IconCoeur,
    titre: 'Approche artistique',
    texte: 'Douceur, authenticité, émotion',
  },
  {
    Icone: IconMedaille,
    titre: 'Expérience & confiance',
    texte: 'Accompagnement sur-mesure',
  },
]

const specialites = {
  mariage:
    "Des préparatifs jusqu'à la première danse, je saisis les instants vrais, les éclats de rire, les larmes de joie, les petits détails qui font de votre journée une histoire unique. Je travaille régulièrement avec des prestataires de confiance (vidéaste, DJ…) et je serai ravie de vous les recommander.",
  grossesse:
    "Parce que ce petit miracle qui grandit en vous mérite d'être célébré, je crée des images en studio ou en extérieur, qui révèlent toute la beauté de ce moment si spécial.",
  naissance:
    'Les premiers instants de vie sont éphémères mais infiniment précieux. Avec patience et tendresse, je capture les premiers regards, les petites mains, les grands câlins… pour que vous puissiez les revivre encore et encore.',
}

export default function APropos() {
  const donnees = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.photographe,
    jobTitle: 'Photographe et vidéaste de mariage',
    worksFor: { '@type': 'Organization', name: site.nom, url: site.url },
    url: `${site.url}/a-propos`,
    image: `${site.url}/assets/picture/sarah.avif`,
    sameAs: [site.reseaux.instagram, site.reseaux.facebook],
  }

  return (
    <>
      <Seo
        chemin="/a-propos"
        titre="À propos"
        description="Je suis Sarah, photographe et vidéaste de mariage. Mon objectif : figer la magie de vos moments les plus précieux avec authenticité, douceur et émotion."
        image="/assets/picture/sarah.avif"
        type="profile"
      />
      <Head>
        <script type="application/ld+json">{JSON.stringify(donnees)}</script>
      </Head>

      <Container className="py-14 lg:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          {/* Portrait collant au défilement sur grand écran : sans cela, la
              colonne de gauche se vide pendant que le texte continue. */}
          <img
            src="/assets/picture/sarah.avif"
            alt={`${site.photographe}, photographe, tenant son appareil photo — portrait en noir et blanc`}
            width="1052"
            height="1430"
            fetchpriority="high"
            className="aspect-[3/4] w-full object-cover lg:sticky lg:top-28"
          />

          <div>
            <Eyebrow>À propos</Eyebrow>
            <h1 className="mt-5 font-display text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
              Immortalisez vos instants les plus précieux
            </h1>

            <div className="mt-7 flex items-center gap-4" aria-hidden="true">
              <span className="h-px w-16 bg-taupe" />
              <IconCoeur className="h-5 w-5 text-taupe" />
            </div>

            <p className="mt-8 leading-relaxed text-ink-soft">
              Chaque histoire mérite d'être racontée. Chaque regard, chaque
              sourire, chaque souvenir mérite d'être capturé.
            </p>
            <p className="mt-5 leading-relaxed text-ink-soft">
              Je suis {site.photographe},{' '}
              <strong className="font-medium text-taupe-dark">
                photographe et artiste, et vidéaste de mariage
              </strong>
              . Mon objectif ? Figer la magie de vos moments les plus précieux
              avec authenticité, douceur et émotion.
            </p>

            <ul className="mt-14 grid gap-10 sm:grid-cols-3">
              {univers.map((item) => {
                const Icone = icones[item.cle]
                return (
                  <li key={item.cle}>
                    <Icone className="h-10 w-10 text-taupe-dark" />
                    <h2 className="mt-4 font-display text-2xl uppercase tracking-wide">
                      {item.titre}
                    </h2>
                    <span className="mt-3 block h-px w-10 bg-taupe" />
                    <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                      {specialites[item.cle]}
                    </p>
                  </li>
                )
              })}
            </ul>

            <div className="mt-14 flex flex-col gap-6 bg-sand px-7 py-8 lg:flex-row lg:items-center lg:gap-10 lg:px-10">
              <IconAppareilPhoto className="h-12 w-12 shrink-0 text-taupe-dark" />
              <div className="lg:flex-1">
                <p className="leading-relaxed text-ink">
                  Plus que des photos et des films, je vous offre des souvenirs
                  vivants, empreints d'émotion et de vérité.
                </p>
                <p className="mt-3 leading-relaxed text-taupe-dark">
                  Contactez-moi et créons ensemble les images de votre histoire.
                </p>
              </div>
              <Bouton to="/contact" className="shrink-0">
                Me contacter
              </Bouton>
            </div>
          </div>
        </div>
      </Container>

      <section aria-labelledby="titre-savoir-faire" className="border-t border-line py-12 lg:py-16">
        <Container>
          <h2 id="titre-savoir-faire" className="sr-only">
            Mon savoir-faire
          </h2>
          <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {savoirFaire.map(({ Icone, titre, texte }) => (
              <li key={titre} className="flex items-start gap-4">
                <Icone className="h-9 w-9 shrink-0 text-taupe-dark" />
                <div>
                  <h3 className="eyebrow text-ink">{titre}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{texte}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  )
}
