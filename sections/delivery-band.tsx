import { Reveal } from '@/components/motion/reveal';
import { delivery } from '@/content/delivery';

/**
 * Faixa "Padrão de entrega": a segunda tela do palco, uma ideia só.
 *
 * Era um painel de instrumentos (barras de progresso, nota do Lighthouse,
 * uma linha de luz varrendo a superfície), o objeto mais "tecnológico demais"
 * do site, e também o formato número-grande-com-rótulo-pequeno que toda
 * landing repete. Agora é uma frase, com os três dados dentro de frases
 * curtas, separadas por filete.
 */
export function DeliveryBand() {
  return (
    <section
      data-ground="carbon"
      aria-labelledby="padrao-titulo"
      className="relative pb-section pt-16 lg:pt-24"
    >
      <div className="shell">
        <Reveal>
          <h2 id="padrao-titulo" className="max-w-4xl text-display-xl text-title">
            {delivery.statement}
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-x-10 gap-y-8 sm:grid-cols-3 lg:mt-20">
          {delivery.facts.map((fact, index) => (
            <li key={fact.figure} className="border-t border-line pt-6">
              <Reveal delay={0.08 * (index + 1)}>
                <p className="text-lead text-body">
                  <span className="numeric font-medium text-title">{fact.figure}</span>{' '}
                  {fact.text}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>

        <p className="mt-10 max-w-prose text-body text-muted">{delivery.note}</p>
      </div>
    </section>
  );
}
