/**
 * Copia os .woff2 auto-hospedados do node_modules (@fontsource) para app/fonts.
 * Rodar apenas quando trocar/atualizar as famílias: `npm run fonts:sync`.
 * Os arquivos ficam versionados no repositório para que o build não dependa de rede.
 */
import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const out = resolve(root, 'app/fonts');
mkdirSync(out, { recursive: true });

/** [pacote, arquivo de origem, arquivo de destino] */
const FILES = [
  ['geist-sans', 'geist-sans-latin-400-normal.woff2', 'Geist-400.woff2'],
  ['geist-sans', 'geist-sans-latin-500-normal.woff2', 'Geist-500.woff2'],
  ['geist-sans', 'geist-sans-latin-600-normal.woff2', 'Geist-600.woff2'],
];

for (const [pkg, from, to] of FILES) {
  copyFileSync(resolve(root, 'node_modules/@fontsource', pkg, 'files', from), resolve(out, to));
  console.log(`✓ ${pkg}/${from} → app/fonts/${to}`);
}
