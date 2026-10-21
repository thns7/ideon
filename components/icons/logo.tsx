import { cn } from '@/lib/utils';

/**
 * Logo da IDEON, em vetor, com as proporções MEDIDAS na prancha "Logo
 * principal" da marca (recorte ampliado 4x, medido pixel a pixel).
 *
 * Grade: altura de maiúscula 100. A primeira versão foi construída "de olho"
 * com traço 11 e letras estreitas, e saiu fina e alongada. Medida, a marca é
 * larga e pesada:
 *   - traço vertical 17,2; horizontal 15 a 16 (correção óptica clássica:
 *     o horizontal é um pouco mais fino para parecer igual);
 *   - D com 108,6 de largura, E com 79,9 (braço do meio mais curto, 72,5),
 *     N com 105,9 e diagonal de 24 de largura encostando nos cantos;
 *   - espaço entre letras de 60 a 71.
 *
 * O "O" é o anel da marca: uma ELIPSE de 125,6 × 109,6 (passa um pouco da
 * altura das outras letras, como todo O bem desenhado), mais grossa nas
 * laterais (20,4) que no topo (16,7), cortada por uma faixa horizontal de
 * y 40,4 a 60,4. Os pontos onde a faixa encontra as elipses saem da equação
 * x = cx ± rx·√(1 − (dy/ry)²). Sem `<clipPath>`, não há ID de SVG para
 * colidir quando o logo aparece mais de uma vez na página.
 *
 * O viewBox começa em y −5 para caber a sobra do O acima e abaixo.
 */
export const WORDMARK_VIEWBOX = '0 -5 692 110';

const I = 'M0 0H17.2V100H0Z';
const D =
  'M88.1 0H146.7A50 50 0 0 1 146.7 100H88.1Z' + 'M105.3 16V84H146.7A31.9 34 0 0 0 146.7 16Z';
const E = 'M256.3 0H336.2V14.9H273.5V41.55H328.8V56.45H273.5V85.1H336.2V100H256.3Z';
/** Metades do anel: a de cima e a de baixo, separadas pela faixa. */
export const RING_TOP = 'M398.312 40.4A62.8 54.8 0 0 1 521.888 40.4H501.073A42.4 38.1 0 0 0 419.127 40.4Z';
export const RING_BOTTOM = 'M521.802 60.4A62.8 54.8 0 0 1 398.398 60.4H419.248A42.4 38.1 0 0 0 500.952 60.4Z';
const N =
  'M585.9 0H603.1V100H585.9Z' + 'M674.6 0H691.8V100H674.6Z' + 'M585.9 0H610L691.8 100H667.7Z';

/** As letras sem o anel (a abertura anima o anel separado). */
export const LETTERS = [I, D, E, N] as const;

/**
 * Anel sozinho, o ícone da marca (aplicativo, favicon). Circular e mais
 * grosso, como nas pranchas de ícone: raio externo 40, interno 26, faixa de
 * 13 no meio de um quadrado 100x100.
 */
export const MARK_VIEWBOX = '0 0 100 100';
export const MARK_TOP = 'M10.532 43.5A40 40 0 0 1 89.468 43.5H75.175A26 26 0 0 0 24.825 43.5Z';
export const MARK_BOTTOM = 'M89.468 56.5A40 40 0 0 1 10.532 56.5H24.825A26 26 0 0 0 75.175 56.5Z';

/** O anel da marca, sozinho. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox={MARK_VIEWBOX} className={className} fill="currentColor" aria-hidden="true">
      <path d={MARK_TOP} />
      <path d={MARK_BOTTOM} />
    </svg>
  );
}

/** A palavra IDEON. Herda a cor do texto (`currentColor`). */
export function Wordmark({ className }: { className?: string }) {
  return (
    <svg
      viewBox={WORDMARK_VIEWBOX}
      className={cn('h-auto', className)}
      fill="currentColor"
      role="img"
      aria-label="IDEON"
    >
      {LETTERS.map((d) => (
        <path key={d} d={d} />
      ))}
      <path d={RING_TOP} />
      <path d={RING_BOTTOM} />
    </svg>
  );
}

/**
 * Logo do cabeçalho e do rodapé. `compact` troca a palavra pelo anel (header
 * depois de rolar), mantendo o mesmo espaço clicável.
 */
export function Logo({ compact = false, className }: { compact?: boolean; className?: string }) {
  return (
    <span className={cn('relative inline-flex items-center text-title', className)}>
      <Wordmark
        className={cn(
          'w-[7.25rem] transition-[opacity,transform] duration-500 ease-expo',
          compact ? 'pointer-events-none -translate-y-1 opacity-0' : 'translate-y-0 opacity-100',
        )}
      />
      <LogoMark
        className={cn(
          'absolute left-0 top-1/2 h-7 w-7 -translate-y-1/2 transition-[opacity,transform] duration-500 ease-expo',
          compact ? 'scale-100 opacity-100' : 'pointer-events-none scale-75 opacity-0',
        )}
      />
    </span>
  );
}
