'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { ArrowRight } from '@/components/icons/ui-icons';
import { Button } from '@/components/ui/button';
import { hero } from '@/content/hero';
import { useEntranceDelay } from '@/hooks/use-entrance-delay';
import { track } from '@/lib/analytics';

/** Onde fica o núcleo escuro da esfera em repouso (em % da própria esfera).
 *  Abaixo e à direita do centro: a borda de luz mais larga fica no alto e à
 *  esquerda, o lado que aparece na tela, virado para o título. */
const CORE_REST = { x: 60, y: 60 };
/** Quanto o núcleo pode andar, em pontos percentuais, quando o cursor vai de
 *  um canto ao outro da tela. Pouco de propósito: é luz mudando, não objeto
 *  se mexendo. */
const CORE_REACH = 9;

/**
 * Hero: um pôster.
 *
 * COMPOSIÇÃO
 * A esfera da marca é maior que a tela e nasce do canto inferior direito,
 * cortada pela borda; só o quarto de cima e da esquerda aparece. O título
 * fica no alto à esquerda, em três linhas, com o apoio e os botões logo abaixo.
 * A diagonal entre os dois cantos é o espaço vazio que dá escala ao palco, e
 * o texto nunca passa sobre a borda colorida (marfim sobre pêssego daria
 * 1,5:1). O tamanho da esfera sai de `--orb-size` e a posição é proporcional
 * a ele, então a geometria é a mesma do celular ao monitor grande.
 *
 * MOVIMENTO
 * Entrada em CSS (a esfera cresce de 92% e acende; o texto sobe 12px). Depois,
 * a luz gira devagar pela borda (globals.css, `.orb`) e, com mouse, se inclina
 * na direção do cursor: o núcleo escuro anda para o lado oposto, então a
 * borda acesa engorda do lado de onde o cursor está. Um listener só, com
 * suavização em rAF que para quando a luz assenta. Nada preso à rolagem; no
 * toque e com menos movimento pedido, a esfera só gira sozinha.
 */
export function Hero() {
  const base = useEntranceDelay();
  const delay = (extra: number) => ({ animationDelay: `${base + extra}s` });
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const orb = orbRef.current;
    if (!orb) return;
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!fine.matches || reduced.matches) return;

    const current = { ...CORE_REST };
    const target = { ...CORE_REST };
    let frame = 0;

    const step = () => {
      current.x += (target.x - current.x) * 0.06;
      current.y += (target.y - current.y) * 0.06;
      orb.style.setProperty('--orb-core', `${current.x.toFixed(2)}% ${current.y.toFixed(2)}%`);
      const settled =
        Math.abs(target.x - current.x) < 0.05 && Math.abs(target.y - current.y) < 0.05;
      frame = settled ? 0 : requestAnimationFrame(step);
    };

    const onMove = (event: PointerEvent) => {
      /* -1 a 1 em cada eixo; o núcleo vai para o lado contrário do cursor. */
      const dx = (event.clientX / window.innerWidth) * 2 - 1;
      const dy = (event.clientY / window.innerHeight) * 2 - 1;
      target.x = CORE_REST.x - dx * CORE_REACH;
      target.y = CORE_REST.y - dy * CORE_REACH;
      if (!frame) frame = requestAnimationFrame(step);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      id="hero"
      data-ground="carbon"
      className="relative isolate flex min-h-svh overflow-hidden pb-16 pt-[var(--header-h)] [--orb-size:clamp(560px,135vmin,1250px)]"
    >
      {/* A esfera. Decorativa: o conteúdo da tela é o título. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -z-10 w-[var(--orb-size)] [bottom:calc(var(--orb-size)*-0.4)] [right:calc(var(--orb-size)*-0.3)]"
      >
        <div
          ref={orbRef}
          className="orb origin-bottom-right animate-[hero-orb_1.6s_cubic-bezier(0.16,1,0.3,1)_backwards] [--orb-core:60%_60%]"
          style={delay(0)}
        />
      </div>

      <div className="shell relative flex w-full flex-col items-start pt-[14svh] md:pt-[16svh]">
        <h1
          className="max-w-[11ch] animate-[hero-rise_1s_cubic-bezier(0.16,1,0.3,1)_backwards] text-display-hero text-title md:text-[clamp(4rem,6.4vw,6.25rem)]"
          style={delay(0.35)}
        >
          {hero.title}
          {/* A barra reta no lugar do ponto final: um traço da altura das
              maiúsculas, da grossura da haste da letra, na cor do título. */}
          <span
            aria-hidden="true"
            className="ml-[0.22em] inline-block h-[0.72em] w-[0.085em] bg-current align-baseline"
          />
        </h1>

        <p
          className="mt-6 max-w-md text-balance animate-[hero-rise_1s_cubic-bezier(0.16,1,0.3,1)_backwards] text-lead text-muted"
          style={delay(0.5)}
        >
          {hero.lead}
        </p>

        <div
          className="mt-10 flex animate-[hero-rise_1s_cubic-bezier(0.16,1,0.3,1)_backwards] flex-wrap items-center gap-3"
          style={delay(0.65)}
        >
          <Button
            asChild
            size="lg"
            trailing={<ArrowRight className="h-5 w-5" />}
            onClick={() => track('cta_click', { location: 'hero', label: 'ideia' })}
          >
            <Link href="#contato">{hero.cta}</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="secondary"
            onClick={() => track('cta_click', { location: 'hero', label: 'produtos' })}
          >
            <Link href="#produtos">{hero.secondary}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
