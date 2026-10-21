import { JsonLd } from '@/components/json-ld';
import { About } from '@/sections/about';
import { DeliveryBand } from '@/sections/delivery-band';
import { CtaFinal } from '@/sections/cta-final';
import { Faq } from '@/sections/faq';
import { Hero } from '@/sections/hero';
import { LogoMarquee } from '@/sections/logo-marquee';
import { Portfolio } from '@/sections/portfolio';
import { Pricing } from '@/sections/pricing';
import { Process } from '@/sections/process';
import { Services } from '@/sections/services';
import {
  faqSchema,
  localBusinessSchema,
  organizationSchema,
  servicesSchema,
  websiteSchema,
} from '@/lib/jsonld';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/',
  ogTitle: 'Software que traz cliente e devolve o seu tempo',
  ogSubtitle: 'Sites, apps, sistemas e automações com IA para empresas que precisam crescer.',
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          organizationSchema(),
          websiteSchema(),
          localBusinessSchema(),
          faqSchema(),
          ...servicesSchema(),
        ]}
      />

      <Hero />
      <DeliveryBand />
      <LogoMarquee />
      <Services />
      <Process />
      <Portfolio />
      <Pricing />
      {/* <Stats /> fica fora até haver números reais: os de content/stats.ts
          são de exemplo (+87 projetos para uma empresa de 2025), e o
          PRODUCT.md proíbe apresentá-los como fato. Para voltar, descomente e
          reimporte de '@/sections/stats'. */}
      <About />
      <Faq />
      <CtaFinal />
    </>
  );
}
