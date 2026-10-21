import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';

/**
 * Todos os valores de cor apontam para CSS variables definidas em
 * app/globals.css. As semânticas (`bg`, `title`, `body`, `brand`...) mudam com
 * o chão da seção (`data-ground="carbon" | "ivory"`), então o mesmo componente
 * funciona no palco escuro e na tela clara sem saber em qual está.
 */
const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './sections/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx,mdx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', sm: '2rem', lg: '2.5rem', '2xl': '4rem' },
      screens: { '2xl': '1320px' },
    },
    extend: {
      /**
       * Escala de opacidade completa (0–100 em passos de 1).
       * Sem isso o Tailwind descarta silenciosamente modificadores fora da
       * escala padrão (ex.: `bg-bg/96`) e o estilo some.
       */
      opacity: Object.fromEntries(
        Array.from({ length: 101 }, (_, index) => [index, String(index / 100)]),
      ),
      colors: {
        // Paleta da marca (fixa)
        carbon: 'rgb(var(--carbon) / <alpha-value>)',
        ivory: 'rgb(var(--ivory) / <alpha-value>)',
        violet: 'rgb(var(--violet) / <alpha-value>)',
        peach: 'rgb(var(--peach) / <alpha-value>)',
        sage: 'rgb(var(--sage) / <alpha-value>)',
        slate: { DEFAULT: 'rgb(var(--slate) / <alpha-value>)' },
        /* `ink-*` é o nome antigo do carvão; segue vivo para os poucos
           componentes que pintam algo sempre escuro (moldura de imagem). */
        ink: {
          900: 'rgb(var(--carbon) / <alpha-value>)',
          800: 'rgb(var(--carbon-2) / <alpha-value>)',
          700: 'rgb(var(--carbon-3) / <alpha-value>)',
        },
        // Camada semântica (muda com o chão)
        bg: 'rgb(var(--bg) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        elevated: 'rgb(var(--surface-2) / <alpha-value>)',
        title: 'rgb(var(--text) / <alpha-value>)',
        body: 'rgb(var(--body) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        line: 'rgb(var(--border) / <alpha-value>)',
        brand: {
          DEFAULT: 'rgb(var(--brand) / <alpha-value>)',
          hover: 'rgb(var(--brand-hover) / <alpha-value>)',
          soft: 'rgb(var(--brand-soft) / <alpha-value>)',
          ink: 'rgb(var(--brand-ink) / <alpha-value>)',
        },
        accent: 'rgb(var(--accent) / <alpha-value>)',
        glow: 'rgb(var(--glow) / <alpha-value>)',
      },
      fontFamily: {
        display: ['var(--font-body)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['var(--font-body)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-body)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      /* A marca usa três pesos (Regular, Medium, Semibold). `bold` aponta para
         o semibold: não existe arquivo 700, e o navegador inventaria um
         negrito sintético e borrado. */
      fontWeight: { bold: '600' },
      fontSize: {
        /* Escala fluida, calibrada para a Geist: uma família só, então a
           hierarquia vem de tamanho e peso (500 nos títulos, 400 no texto).
           Display com tracking negativo moderado, nunca abaixo de -0,04em, e
           teto de 6rem: no palco, uma ideia grande, não uma ideia gritada. */
        'display-hero': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '0.98', letterSpacing: '-0.04em', fontWeight: '500' }],
        'display-xl': ['clamp(2.25rem, 4.6vw, 4rem)', { lineHeight: '1.02', letterSpacing: '-0.035em', fontWeight: '500' }],
        'display-lg': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.08', letterSpacing: '-0.03em', fontWeight: '500' }],
        'display-md': ['clamp(1.375rem, 2vw, 1.75rem)', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '500' }],
        'display-sm': ['clamp(1.125rem, 1.4vw, 1.3125rem)', { lineHeight: '1.3', letterSpacing: '-0.015em', fontWeight: '500' }],
        lead: ['clamp(1.125rem, 1.4vw, 1.3125rem)', { lineHeight: '1.55' }],
        body: ['1.0625rem', { lineHeight: '1.65' }],
        'body-sm': ['0.9375rem', { lineHeight: '1.6' }],
        label: ['0.8125rem', { lineHeight: '1.2', letterSpacing: '0.02em' }],
      },
      spacing: {
        section: 'var(--space-section)',
        gutter: 'var(--space-gutter)',
        18: '4.5rem',
        22: '5.5rem',
      },
      maxWidth: { content: '1180px', prose: '68ch', shell: '1320px' },
      /* Cantos discretos: geometria limpa, sem "bolha". O pill fica para
         botões, como o anel do logo. */
      borderRadius: { input: '12px', card: '16px', bento: '20px', pill: '999px' },
      boxShadow: {
        e1: 'var(--shadow-1)',
        e2: 'var(--shadow-2)',
        e3: 'var(--shadow-3)',
        /* `glow` não brilha mais: o nome ficou, o halo saiu. É elevação de
           verdade (deslocamento + desfoque) definida por chão em globals.css. */
        glow: 'var(--shadow-2)',
        'glow-lg': 'var(--shadow-3)',
        card: 'var(--shadow-1)',
        float: 'var(--shadow-2)',
      },
      transitionTimingFunction: {
        expo: 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-out-soft': 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
      transitionDuration: { micro: '180ms', enter: '700ms', cinema: '1200ms' },
      keyframes: {
        marquee: { from: { transform: 'translate3d(0,0,0)' }, to: { transform: 'translate3d(-50%,0,0)' } },
        /* Entrada de rota e de card filtrado. CSS puro de propósito: as versões
           em Framer Motion (AnimatePresence, `layout`, `layoutId`) manipulam o
           DOM por fora do React e, desmontadas no meio da navegação, faziam o
           React estourar `removeChild` e a página de destino virar erro. */
        'enter-up': {
          from: { opacity: '0', transform: 'translate3d(0,10px,0)' },
          to: { opacity: '1', transform: 'translate3d(0,0,0)' },
        },
        /* Traço do "certo" da confirmação do formulário. */
        'draw-check': {
          from: { strokeDasharray: '1', strokeDashoffset: '1' },
          to: { strokeDasharray: '1', strokeDashoffset: '0' },
        },
        'enter-card': {
          from: { opacity: '0', transform: 'translate3d(0,16px,0)' },
          to: { opacity: '1', transform: 'translate3d(0,0,0)' },
        },
        // Única exceção consciente à regra "só transform/opacity": o accordion
        // precisa da altura real do conteúdo (Radix expõe a variável abaixo).
        'accordion-down': {
          from: { height: '0', opacity: '0' },
          to: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
          to: { height: '0', opacity: '0' },
        },
      },
      animation: {
        marquee: 'marquee var(--marquee-duration, 40s) linear infinite',
        /* `backwards`, NUNCA `both`. Esta animação envolve a PÁGINA INTEIRA
           (components/motion/page-transition.tsx). Com `both` o último quadro,
           `translate3d(0,0,0)`, fica aplicado para sempre, e qualquer
           transform diferente de `none`, mesmo o identidade, vira o bloco de
           referência de todo `position: fixed` lá dentro (o pin do GSAP em
           "Como trabalhamos" grudava no topo do documento e sumia). */
        'enter-up': 'enter-up 350ms cubic-bezier(0.16, 1, 0.3, 1) backwards',
        'enter-card': 'enter-card 500ms cubic-bezier(0.16, 1, 0.3, 1) backwards',
        'draw-check': 'draw-check 600ms cubic-bezier(0.16, 1, 0.3, 1) 150ms both',
        'accordion-down': 'accordion-down 380ms cubic-bezier(0.16, 1, 0.3, 1)',
        'accordion-up': 'accordion-up 300ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [animate],
};

export default config;
