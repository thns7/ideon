import { JsonLd } from '@/components/json-ld';
import { About } from '@/sections/about';
import { CtaFinal } from '@/sections/cta-final';
import { Hero } from '@/sections/hero';
import { Portfolio } from '@/sections/portfolio';
import { Pricing } from '@/sections/pricing';
import { Process } from '@/sections/process';
import { Services } from '@/sections/services';
import {
  localBusinessSchema,
  organizationSchema,
  servicesSchema,
  websiteSchema,
} from '@/lib/jsonld';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/',
  ogTitle: 'Ideias que viram produtos',
  ogSubtitle: 'Criamos SaaS e produtos digitais que resolvem um problema real e continuam crescendo depois do lançamento.',
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          organizationSchema(),
          websiteSchema(),
          localBusinessSchema(),
          ...servicesSchema(),
        ]}
      />

      <Hero />
      <Portfolio />
      <About />
      <Services />
      <Process />
      <Pricing />
      {/* <Stats /> fica fora até haver números reais: os de content/stats.ts
          são de exemplo (+87 projetos para uma empresa de 2025), e o
          PRODUCT.md proíbe apresentá-los como fato. Para voltar, descomente e
          reimporte de '@/sections/stats'. */}
      <CtaFinal />
    </>
  );
}
