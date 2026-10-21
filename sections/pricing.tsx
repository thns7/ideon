'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, Check, Minus } from '@/components/icons/ui-icons';
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal';
import { SectionHeading } from '@/components/section-heading';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { annualDiscountLabel, paymentNote, plans, type Plan } from '@/content/pricing';
import { track } from '@/lib/analytics';
import { formatCurrencyValue } from '@/lib/format';
import { cn } from '@/lib/utils';

export function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section data-ground="ivory" id="precos" aria-labelledby="precos-titulo" className="section-y relative overflow-hidden">
      {/* halo atrás do plano do meio */}

      <div className="shell">
        <SectionHeading
          titleId="precos-titulo"
          title="Preço na mesa antes da primeira reunião."
          description="Faixas reais para você saber se faz sentido conversar. O valor final sai fechado na proposta, depois do diagnóstico."
          align="center"
        />

        {/* Toggle mensal/anual */}
        <Reveal delay={0.1} className="mt-10 flex flex-col items-center gap-4">
          <div className="glass flex items-center gap-4 rounded-pill px-5 py-3">
            <span
              className={cn(
                'font-mono text-body-sm transition-colors duration-micro',
                !annual ? 'text-title' : 'text-muted',
              )}
            >
              Mensal
            </span>
            <Switch
              checked={annual}
              onCheckedChange={(checked) => {
                setAnnual(checked);
                track('pricing_toggle', { plan: checked ? 'anual' : 'mensal' });
              }}
              aria-label="Alternar entre cobrança mensal e anual"
            />
            <span
              className={cn(
                'font-mono text-body-sm transition-colors duration-micro',
                annual ? 'text-title' : 'text-muted',
              )}
            >
              Anual
            </span>
            {annual ? (
              <span className="animate-enter-up">
                <Badge variant="accent">{annualDiscountLabel}</Badge>
              </span>
            ) : null}
          </div>
        </Reveal>

        <RevealGroup className="mt-12 grid items-stretch gap-5 lg:grid-cols-3" stagger={0.08}>
          {plans.map((plan) => (
            <RevealItem key={plan.id} variant="settle" className="h-full min-w-0">
              <PlanCard plan={plan} annual={annual} />
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-body-sm text-muted">{paymentNote}</p>
        </Reveal>

      </div>
    </section>
  );
}

function PlanCard({ plan, annual }: { plan: Plan; annual: boolean }) {
  const price = annual ? plan.priceAnnual : plan.priceMonthly;
  const highlighted = plan.highlighted;

  return (
    <div
      className={cn(
        'relative flex h-full min-w-0 flex-col overflow-hidden rounded-bento p-7 transition-[transform,box-shadow] duration-500 ease-expo sm:p-8',
        // O plano recomendado sobe de superfície E de sombra. Antes ele só
        // subia 4px e escalava 2%: sem sombra maior, o card parecia deslocado
        // para cima, não mais alto que os vizinhos.
        /* O plano recomendado se destaca por TRAÇO: contorno na cor do
           texto, no lugar do filete. A borda de gradiente cônico que girava
           sem parar e o brilho saíram com a identidade IDEON. */
        highlighted
          ? 'border border-title bg-bg shadow-e2'
          : 'card-surface transition-colors hover:border-title/40',
      )}
    >

      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-display-sm text-title">{plan.name}</h3>
          <p className="mt-1.5 text-body-sm text-muted">{plan.audience}</p>
        </div>
        {plan.badge ? <Badge variant="solid">{plan.badge}</Badge> : null}
      </div>

      {/* Sem parágrafo de descrição: ele competia com a lista de itens logo
          abaixo, que diz a mesma coisa de forma útil, e a linha `audience`
          acima já responde "isto é para quem". O campo saiu do conteúdo. */}

      <div className="mt-8">
        {plan.prefix ? (
          <p className="font-mono text-label uppercase text-muted">{plan.prefix}</p>
        ) : null}
        <p className="mt-2 flex items-baseline gap-1.5">
          {price === null ? (
            <span className="font-display text-[clamp(1.7rem,6.4vw,2.25rem)] font-bold leading-none tracking-[-0.035em] text-title">
              Sob consulta
            </span>
          ) : (
            <>
              <span className="font-mono text-lead text-muted">R$</span>
              {/* `key` no preço faz o número remontar na troca mensal/anual,
                  então a animação CSS de entrada reinicia. Era
                  `AnimatePresence mode="popLayout"`, que posiciona o elemento
                  que sai fora do fluxo, mexendo no DOM por fora do React — o
                  mesmo padrão que derrubava a navegação a partir da home. */}
              <span
                key={price}
                className="numeric animate-enter-up font-display text-[clamp(2.25rem,8vw,3rem)] font-bold leading-none tracking-[-0.04em] text-title"
              >
                {formatCurrencyValue(price)}
              </span>
              {plan.suffix ? (
                <span className="font-mono text-body-sm text-muted">{plan.suffix}</span>
              ) : null}
            </>
          )}
        </p>
        <p className="mt-3 text-body-sm text-muted">{plan.priceNote}</p>
      </div>

      <div className="divider-glow my-7" />

      <p className="font-mono text-label uppercase text-brand-soft">{plan.delivery}</p>

      <ul className="mt-5 flex-1 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-body-sm text-body">
            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-pill border border-brand/40 bg-brand/12 text-brand-soft transition-transform duration-300 ease-expo hover:scale-110">
              <Check className="h-3 w-3" />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <Button
        asChild
        variant={highlighted ? 'primary' : 'outline'}
        size="lg"
        className="mt-8 w-full"
        trailing={<ArrowRight className="h-5 w-5" />}
        onClick={() => track('cta_click', { location: 'pricing', plan: plan.id })}
      >
        <Link href={plan.cta.href}>{plan.cta.label}</Link>
      </Button>
    </div>
  );
}

function Cell({ value }: { value: string | boolean }) {
  if (value === true)
    return (
      <span className="inline-grid h-6 w-6 place-items-center rounded-pill bg-brand/15 text-brand-soft">
        <Check className="h-3.5 w-3.5" />
        <span className="sr-only">Incluído</span>
      </span>
    );
  if (value === false)
    return (
      <span className="inline-grid h-6 w-6 place-items-center rounded-pill bg-surface text-muted">
        <Minus className="h-3.5 w-3.5" />
        <span className="sr-only">Não incluído</span>
      </span>
    );
  return <span className="font-mono text-body-sm text-body">{value}</span>;
}
