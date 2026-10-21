import localFont from 'next/font/local';

/**
 * Fonte da IDEON: uma família só, auto-hospedada (nenhuma requisição a
 * terceiros). Os arquivos vivem em `app/fonts` e são gerados por
 * `npm run fonts:sync` a partir de @fontsource/geist-sans.
 *
 * A identidade pede Suisse Intl (Regular, Medium, Semibold). Ela é paga; a
 * Geist é uma grotesca suíça gratuita (licença OFL) do mesmo desenho limpo e
 * neutro. Para trocar quando houver a licença:
 *   1. coloque SuisseIntl-Regular/Medium/SemiBold.woff2 em app/fonts
 *   2. troque os três `path` abaixo
 *   3. remova @fontsource/geist-sans do package.json e a linha dela no
 *      scripts/sync-fonts.mjs
 * Nenhum outro arquivo muda: tudo consome `--font-body`.
 *
 * Não há mais fonte display nem mono separadas. Título e texto são a mesma
 * família em pesos diferentes, como nas pranchas da marca, e a mono saiu de
 * propósito: monoespaçada em rótulo era fantasia de "técnico", o oposto do
 * que a IDEON quer parecer. `--font-display` e `--font-mono` continuam
 * existindo (apontam para a Geist, em globals.css) só para não quebrar quem
 * ainda usa as classes `font-display` e `font-mono`.
 */
export const fontBody = localFont({
  src: [
    { path: '../app/fonts/Geist-400.woff2', weight: '400', style: 'normal' },
    { path: '../app/fonts/Geist-500.woff2', weight: '500', style: 'normal' },
    { path: '../app/fonts/Geist-600.woff2', weight: '600', style: 'normal' },
  ],
  variable: '--font-body',
  display: 'swap',
  preload: true,
  fallback: ['ui-sans-serif', 'system-ui', 'sans-serif'],
  adjustFontFallback: 'Arial',
});

export const fontVariables = fontBody.variable;
