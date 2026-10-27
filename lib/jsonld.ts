import { about } from '@/content/about';
import { plans } from '@/content/pricing';
import { services } from '@/content/services';
import { site } from '@/content/site';
import { absoluteUrl } from '@/lib/seo';
import type { Project } from '@/content/projects';

/**
 * Dados estruturados (schema.org). Cada função devolve um objeto que é
 * serializado num <script type="application/ld+json"> pelo componente JsonLd.
 */

export const organizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${absoluteUrl('/')}#organization`,
  name: site.name,
  alternateName: [...site.alternateNames],
  legalName: site.legalName,
  url: absoluteUrl('/'),
  // PNG em vez do SVG: o logo do resultado de busca precisa de bitmap de 112px ou mais.
  logo: absoluteUrl('/apple-icon.png'),
  description: site.description,
  foundingDate: String(site.foundedYear),
  email: site.contact.email,
  telephone: `+${site.contact.whatsappNumber}`,
  // Sem rua nem CEP: a IDEON não tem escritório físico. Só a cidade da equipe.
  address: {
    '@type': 'PostalAddress',
    addressLocality: site.contact.city,
    addressRegion: site.contact.state,
    addressCountry: 'BR',
  },
  areaServed: { '@type': 'Country', name: 'Brasil' },
  sameAs: [site.social.instagram],
  numberOfEmployees: { '@type': 'QuantitativeValue', value: about.team.length },
});

export const servicesSchema = () =>
  services.map((service) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    serviceType: service.title,
    provider: { '@id': `${absoluteUrl('/')}#organization` },
    areaServed: { '@type': 'Country', name: 'Brasil' },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'BRL',
      priceSpecification: {
        '@type': 'PriceSpecification',
        minPrice: plans[0]?.priceMonthly ?? 7900,
        priceCurrency: 'BRL',
      },
    },
  }));

export const websiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${absoluteUrl('/')}#website`,
  url: absoluteUrl('/'),
  name: site.name,
  alternateName: [...site.alternateNames],
  inLanguage: 'pt-BR',
  publisher: { '@id': `${absoluteUrl('/')}#organization` },
});

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

export const caseStudySchema = (project: Project) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: project.title,
  description: project.summary,
  about: project.client,
  datePublished: `${project.year}-01-01`,
  author: { '@id': `${absoluteUrl('/')}#organization` },
  publisher: { '@id': `${absoluteUrl('/')}#organization` },
  mainEntityOfPage: absoluteUrl(`/projetos/${project.slug}`),
});

export const articleSchema = (input: {
  title: string;
  description: string;
  date: string;
  slug: string;
  author: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: input.title,
  description: input.description,
  datePublished: input.date,
  dateModified: input.date,
  author: { '@type': 'Person', name: input.author },
  publisher: { '@id': `${absoluteUrl('/')}#organization` },
  mainEntityOfPage: absoluteUrl(`/insights/${input.slug}`),
  inLanguage: 'pt-BR',
});
