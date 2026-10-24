import { Reveal } from '@/components/motion/reveal';
import { about } from '@/content/about';

/**
 * Por que existimos: uma frase grande e o motivo dela, em poucas linhas.
 *
 * Texto, não composição. O título ocupa a largura e o parágrafo fica numa
 * coluna estreita deslocada para a direita, como uma página de revista. Os
 * dois fundadores fecham a seção com nome e papel, sem foto de enfeite e sem
 * card: quem constrói é quem assina.
 */
export function About() {
  return (
    <section data-ground="carbon" id="sobre" aria-labelledby="sobre-titulo" className="section-y relative">
      <div className="shell">
        <Reveal>
          <h2 id="sobre-titulo" className="max-w-[18ch] text-display-xl text-title">
            {about.title}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-10">
          <div className="space-y-5 text-lead text-body lg:col-span-6 lg:col-start-6">
            {about.paragraphs.map((paragraph) => (
              <Reveal key={paragraph.slice(0, 24)} delay={0.06}>
                <p>{paragraph}</p>
              </Reveal>
            ))}

            <Reveal delay={0.12}>
              <ul className="!mt-12 grid gap-6 border-t border-line pt-8 sm:grid-cols-2">
                {about.team.map((member) => (
                  <li key={member.name}>
                    <span className="block text-body font-medium text-title">{member.name}</span>
                    <span className="block text-body-sm text-muted">{member.role}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
