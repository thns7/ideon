'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { LETTERS, RING_BOTTOM, RING_TOP, WORDMARK_VIEWBOX } from '@/components/icons/logo';
import { useSmoothScroll } from '@/components/motion/smooth-scroll';
import { cn } from '@/lib/utils';

/**
 * Abertura da IDEON.
 *
 * O logo se monta a partir do "O", que é o símbolo da marca:
 *   1. as duas metades do anel vêm uma de cima e a outra de baixo e se
 *      encontram, parando com a faixa aberta entre elas (a ideia ganhando
 *      forma);
 *   2. I, D, E e N saem de perto do anel e andam até o espaçamento largo da
 *      marca, como quem abre espaço;
 *   3. a tela se abre (só opacidade) e o hero entra.
 *
 * Tudo em CSS. Uma intro é exatamente a animação que está em voo quando
 * alguém navega rápido, e componentes do Framer Motion que reposicionam o
 * DOM já derrubaram a navegação deste site (commit 188be59).
 *
 * Qualquer toque, tecla ou rolagem pula direto para a saída. `?intro=0` não
 * mostra nada. Com menos movimento pedido, o logo só aparece e some.
 */

/** Segundos. Mudar aqui ajusta sozinho o atraso de entrada do hero. */
const T = {
  ring: 0.1,
  ringDur: 0.7,
  letters: 0.45,
  lettersDur: 0.75,
  leave: 1.35,
  leaveDur: 0.5,
} as const;

/** Quando o hero deve começar a entrar (hooks/use-entrance-delay.ts). */
export const INTRO_DURATION = T.leave + 0.1;

/** Deslocamento inicial de cada letra, em unidades do logo: I, D e E vêm
 *  da direita (de perto do anel), o N vem da esquerda. */
const LETTER_FROM = [96, 76, 56, -56] as const;

export function CinematicIntro() {
  const { stop, start } = useSmoothScroll();
  const [phase, setPhase] = useState<'off' | 'run' | 'leave' | 'reduced'>('off');
  /** O StrictMode monta o efeito duas vezes em desenvolvimento; a decisão de
   *  rodar a intro só pode ser tomada uma vez. */
  const decidedRef = useRef(false);

  useEffect(() => {
    if (decidedRef.current) return;
    decidedRef.current = true;
    if (new URLSearchParams(window.location.search).get('intro') === '0') return;
    /* A preferência vem do matchMedia, não do hook: na hidratação o hook
       ainda devolve o valor do servidor e erraria justamente para quem pediu
       menos movimento. */
    setPhase(
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'reduced' : 'run',
    );
  }, []);

  /* Linha do tempo: trava a rolagem enquanto a tela está fechada, abre na
     hora certa e desmonta no fim. */
  useEffect(() => {
    if (phase === 'off') return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    stop();

    const leaveAt = phase === 'reduced' ? 0.6 : T.leave;
    const toLeave =
      phase === 'leave' ? undefined : window.setTimeout(() => setPhase('leave'), leaveAt * 1000);
    const toOff =
      phase === 'leave'
        ? window.setTimeout(() => setPhase('off'), T.leaveDur * 1000)
        : undefined;

    return () => {
      window.clearTimeout(toLeave);
      window.clearTimeout(toOff);
      document.body.style.overflow = previous;
      start();
    };
  }, [phase, stop, start]);

  /* Pular: qualquer intenção de entrar corta para a saída. */
  useEffect(() => {
    if (phase !== 'run') return;
    const skip = () => setPhase('leave');
    window.addEventListener('pointerdown', skip, { once: true });
    window.addEventListener('keydown', skip, { once: true });
    window.addEventListener('wheel', skip, { once: true, passive: true });
    return () => {
      window.removeEventListener('pointerdown', skip);
      window.removeEventListener('keydown', skip);
      window.removeEventListener('wheel', skip);
    };
  }, [phase]);

  if (phase === 'off') return null;

  const reduced = phase === 'reduced';
  const piece = (from: string, delay: number, duration: number): CSSProperties =>
    reduced
      ? {}
      : {
          ['--from' as string]: from,
          animation: `intro-piece ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s backwards`,
          transformBox: 'fill-box',
        };

  return (
    <div
      aria-hidden="true"
      data-ground="carbon"
      className={cn(
        'fixed inset-0 z-[200] grid place-items-center bg-bg transition-opacity ease-in-out',
        phase === 'leave' ? 'pointer-events-none opacity-0' : 'opacity-100',
      )}
      style={{ transitionDuration: `${T.leaveDur}s` }}
    >
      <svg
        viewBox={WORDMARK_VIEWBOX}
        className="w-[min(62vw,26rem)] overflow-visible text-title"
        fill="currentColor"
      >
        {LETTERS.map((d, index) => (
          <path
            key={d}
            d={d}
            style={piece(
              `translateX(${LETTER_FROM[index]}px)`,
              T.letters + Math.abs(index - 1.5) * 0.04,
              T.lettersDur,
            )}
          />
        ))}
        <path d={RING_TOP} style={piece('translateY(-34px)', T.ring, T.ringDur)} />
        <path d={RING_BOTTOM} style={piece('translateY(34px)', T.ring, T.ringDur)} />
      </svg>
    </div>
  );
}
