import { ImageResponse } from 'next/og';
import { LETTERS, RING_BOTTOM, RING_TOP, WORDMARK_VIEWBOX } from '@/components/icons/logo';
import { site } from '@/content/site';

export const runtime = 'edge';

/**
 * Imagem de Open Graph gerada sob demanda (prévia do link no WhatsApp,
 * LinkedIn etc.). Uso: /api/og?title=...&subtitle=...&tag=...
 *
 * Mesma identidade do site: palco carvão, a palavra IDEON no canto, o título
 * em marfim e a luz da esfera entrando pelo canto de cima. O gerador (Satori)
 * não desenha gradiente cônico, então a esfera aqui são dois gradientes
 * radiais, violeta e pêssego. Ele também não lê .woff2: a fonte é a padrão
 * embutida, e os tamanhos foram ajustados para ela.
 */
const CARBON = '#0B0B0D';
const IVORY = '#F6F6F4';
const SLATE = '#A1A1AA';

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = (searchParams.get('title') ?? site.tagline).slice(0, 110);
  const subtitle = (searchParams.get('subtitle') ?? site.description).slice(0, 170);
  const tag = (searchParams.get('tag') ?? new URL(site.url).host).slice(0, 40);

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          backgroundColor: CARBON,
          backgroundImage:
            'radial-gradient(circle at 92% -8%, rgba(167,139,250,0.55), rgba(11,11,13,0) 42%), radial-gradient(circle at 70% -20%, rgba(255,179,138,0.32), rgba(11,11,13,0) 40%)',
          color: IVORY,
        }}
      >
        <svg width="160" height="26" viewBox={WORDMARK_VIEWBOX} fill={IVORY}>
          {LETTERS.map((d) => (
            <path key={d} d={d} />
          ))}
          <path d={RING_TOP} />
          <path d={RING_BOTTOM} />
        </svg>

        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 960 }}>
          <div
            style={{
              fontSize: title.length > 60 ? 60 : 76,
              fontWeight: 500,
              lineHeight: 1.04,
              letterSpacing: '-0.035em',
            }}
          >
            {title}
          </div>
          <div style={{ marginTop: 24, fontSize: 28, lineHeight: 1.4, color: SLATE }}>{subtitle}</div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 22, color: SLATE }}>
          <span>{tag}</span>
          <span>{site.tagline}</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
