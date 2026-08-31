import { Container, Eyebrow } from './ui'

/** Gabarit des pages de contenu rédactionnel (légal, confirmation, erreur). */
export function PageTexte({ eyebrow, titre, chapo, children }) {
  return (
    <Container className="py-14 lg:py-20">
      <div className="mx-auto max-w-[46rem]">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h1 className="mt-4 font-display text-4xl leading-tight lg:text-5xl">{titre}</h1>
        <span className="mt-6 block h-px w-16 bg-taupe" />
        {chapo && <p className="mt-7 leading-relaxed text-ink-soft">{chapo}</p>}

        <div
          className="mt-10 leading-relaxed text-ink-soft
            [&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:text-ink
            [&_h3]:mt-8 [&_h3]:font-display [&_h3]:text-xl [&_h3]:text-ink
            [&_p]:mt-4
            [&_ul]:mt-4 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:pl-5
            [&_li]:list-disc
            [&_a]:text-taupe-dark [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-ink
            [&_strong]:font-medium [&_strong]:text-ink"
        >
          {children}
        </div>
      </div>
    </Container>
  )
}
