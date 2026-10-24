import { SectionHeading } from '@/components/section-heading';
import { processIntro, processSteps } from '@/content/process';
import { cn } from '@/lib/utils';

/**
 * "Como uma ideia vira produto": cinco etapas que se EMPILHAM.
 *
 * Cada etapa é uma camada `position: sticky`. Rolando, a seguinte sobe e
 * cobre a anterior, mas para alguns pixels abaixo dela, então sobra à vista
 * uma faixa de cada etapa já vencida. No fim da seção as cinco estão
 * empilhadas como camadas de um trabalho: é o processo semanal mostrado como
 * acúmulo, não como lista.
 *
 * Por que CSS e não o pin do GSAP que havia aqui: o pin trava a seção com
 * `position: fixed`, que quebra quando qualquer ancestral tem `transform`
 * (aconteceu: ver o comentário de `enter-up` no tailwind.config.ts). `sticky`
 * não sofre disso, não precisa de JavaScript, não baixa biblioteca e funciona
 * igual no celular, onde antes a seção virava um carrossel lateral.
 *
 * O número da etapa fica: aqui a sequência É a informação.
 */
export function Process() {
  return (
    <section
      id="processo"
      aria-labelledby="processo-titulo"
      data-ground="carbon"
      className="section-y relative"
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
              /* Cada camada para 18px abaixo da anterior: é essa sobra que
                 deixa a pilha legível. O `bg-bg` é o próprio chão, para a
                 camada de cima cobrir a de baixo sem virar cartão cinza. */
              style={{ top: `calc(var(--header-h) + 2rem + ${index * 18}px)` }}
              className={cn(
                'sticky rounded-card border border-line bg-bg p-7 shadow-e2 sm:p-9',
                index < processSteps.length - 1 && 'mb-[28svh]',
              )}
            >
              <span className="numeric text-body-sm font-medium text-brand-soft">
                {step.number}
              </span>
              <h3 className="mt-8 text-display-md text-title sm:mt-12">{step.title}</h3>
              <p className="mt-3 max-w-prose text-body text-body">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
