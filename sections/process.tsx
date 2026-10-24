import { SectionHeading } from '@/components/section-heading';
import { processIntro, processSteps } from '@/content/process';

/**
 * "Como uma ideia vira produto": cinco etapas que se EMPILHAM.
 *
 * Cada etapa é uma camada `position: sticky`. Rolando, a seguinte sobe e para
 * uma "aba" abaixo da anterior (`--tab`), cobrindo o texto dela mas deixando
 * à vista a linha de cima: número e nome. No fim, a pilha mostra as quatro
 * etapas vencidas como abas legíveis e a quinta inteira, e fica parada um
 * trecho (o espaçador no fim da lista) e sai inteira, de uma vez.
 *
 * Duas coisas que a primeira versão errava e que esta corrige:
 *   - a sobra entre camadas era de 18px, menor que a linha do título, então
 *     aparecia meio título cortado e um feixe de bordas soltas;
 *   - a última etapa não tinha para onde parar: a lista acabava junto com ela
 *     e a pilha nunca chegava a se formar inteira.
 *
 * Por que CSS e não o pin do GSAP: o pin usa `position: fixed`, que quebra
 * quando qualquer ancestral tem `transform`. `sticky` não sofre disso, não
 * precisa de JavaScript e funciona igual no celular.
 */
export function Process() {
  return (
    <section
      id="processo"
      aria-labelledby="processo-titulo"
      data-ground="carbon"
      className="section-y relative [--tab:3.5rem] sm:[--tab:4rem]"
    >
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-10">
        {/* O título acompanha a pilha enquanto ela cresce. */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-[calc(var(--header-h)+3rem)]">
            <SectionHeading
              titleId="processo-titulo"
              title={processIntro.title}
              description={processIntro.description}
            />
          </div>
        </div>

        <ol className="lg:col-span-7">
          {processSteps.map((step, index) => (
            <li
              key={step.number}
              /* O `bg-bg` é o próprio chão: a camada de cima cobre a de baixo
                 sem virar cartão cinza. A altura mínima igual faz todas as
                 abas terem o mesmo tamanho na pilha.
                 A margem de baixo diminui uma aba por etapa. Um elemento
                 sticky é empurrado quando a borda da margem dele encosta no
                 fim da lista; com essa conta, a borda de todas as etapas
                 empilhadas fica na mesma altura, e a pilha sai inteira, de
                 uma vez, em vez de a última subir por cima das abas. */
              style={{
                top: `calc(var(--header-h) + 1.5rem + ${index} * var(--tab))`,
                marginBottom: `calc(22svh + ${processSteps.length - 1 - index} * var(--tab))`,
              }}
              className="sticky min-h-[13.5rem] rounded-card border border-line bg-bg px-6 shadow-e2 sm:min-h-[14rem] sm:px-8"
            >
              {/* A aba: a única parte que fica à vista quando a etapa é coberta. */}
              <div className="flex h-[var(--tab)] items-center gap-4">
                <span className="numeric w-6 text-body-sm font-medium text-brand-soft">
                  {step.number}
                </span>
                <h3 className="text-display-sm text-title">{step.title}</h3>
              </div>
              <p className="max-w-prose pb-7 pl-10 text-body text-body sm:pb-9">
                {step.description}
              </p>
            </li>
          ))}
          {/* Trecho em que a pilha completa fica parada antes de sair. */}
          <li aria-hidden="true" className="h-[20svh] list-none" />
        </ol>
      </div>
    </section>
  );
}
