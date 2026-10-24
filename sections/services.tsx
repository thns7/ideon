import { Reveal } from '@/components/motion/reveal';
import { SectionHeading } from '@/components/section-heading';
import { services, servicesIntro } from '@/content/services';
import { cn } from '@/lib/utils';

/**
 * O que fazemos: uma lista com hierarquia, não uma grade de serviços.
 *
 * A primeira linha (SaaS e produtos digitais) vem em tamanho de título e com
 * a marca "Nosso foco"; as outras três são linhas menores separadas por
 * filete. Quem bate o olho entende a ordem de importância antes de ler.
 */
export function Services() {
  return (
    <section data-ground="ivory" id="o-que-fazemos" aria-labelledby="servicos-titulo" className="section-y relative">
      <div className="shell">
        <SectionHeading titleId="servicos-titulo" title={servicesIntro.title} />

        <ul className="mt-14 border-b border-line lg:mt-20">
          {services.map((service, index) => (
            <li key={service.id} className="border-t border-line">
              <Reveal delay={0.04 * index}>
                <div
                  className={cn(
                    'grid gap-3 lg:grid-cols-12 lg:items-baseline lg:gap-10',
                    service.focus ? 'py-10 lg:py-14' : 'py-7',
                  )}
                >
                  <h3
                    className={cn(
                      'text-title lg:col-span-6',
                      service.focus ? 'text-display-lg' : 'text-display-sm',
                    )}
                  >
                    {service.title}
                  </h3>
                  <div className="lg:col-span-6">
                    {service.focus ? (
                      <p className="mb-2 text-body-sm font-medium text-brand-soft">Nosso foco</p>
                    ) : null}
                    <p className={cn('max-w-lg', service.focus ? 'text-lead text-body' : 'text-body text-muted')}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
