/**
 * Dados institucionais da IDEON.
 * Este arquivo é a fonte única de verdade para contato, SEO e navegação.
 * Tudo marcado com `TODO: substituir por dado real` é um valor plausível de
 * exemplo — trocar antes de publicar.
 */

export const site = {
  name: 'IDEON',
  /** Outros nomes pelos quais a marca é buscada. Vão para o JSON-LD
   *  (alternateName), que o Google usa para reconhecer o nome do site. */
  alternateNames: ['IDEON Works', 'IdeonWork'],
  /** Sem CNPJ ainda: o nome legal é só a marca. Ao formalizar, entra a razão
   *  social aqui e na seção 1 de content/legal.ts. */
  legalName: 'IDEON',
  /** Assinatura da marca, a mesma das pranchas. Fica em inglês, como no logo. */
  tagline: 'Ideas into products.',
  description:
    'A IDEON cria SaaS e produtos digitais: transforma uma ideia ou um problema real em produto, lança e continua evoluindo. Também constrói sistemas, automações e sites.',
  /** Domínio de produção (registrado na Hostinger, site hospedado na Vercel). */
  url: 'https://ideonwork.com',
  locale: 'pt-BR',
  foundedYear: 2025,

  contact: {
    // Apenas dígitos, com DDI e DDD — é o que o wa.me e o JSON-LD esperam.
    whatsappNumber: '5511991926994',
    whatsappLabel: '(11) 99192-6994',
    email: 'ideonworks@gmail.com',
    city: 'São Paulo',
    state: 'SP',
    // Sem endereço de propósito: a IDEON não tem escritório físico, a equipe
    // trabalha de forma remota a partir de São Paulo/SP. Só a cidade aparece.
    hours: 'Seg a sex, 9h às 18h',
    responseTime: 'Respondemos em até 1 dia útil.',
  },

  social: {
    instagram: 'https://instagram.com/ideonworks',
    // LinkedIn e GitHub ainda não existem com o nome IDEON. Ao criar, entram
    // aqui, no rodapé (components/layout/footer.tsx) e no `sameAs` de lib/jsonld.ts.
  },

  /** Mensagem pré-preenchida ao abrir o WhatsApp a partir do site. */
  whatsappMessage:
    'Olá! Vim pelo site da IDEON e quero conversar sobre um projeto.',
} as const;

export const whatsappUrl = (message: string = site.whatsappMessage): string =>
  `https://wa.me/${site.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;

export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: 'Produtos', href: '/#produtos' },
  { label: 'O que fazemos', href: '/#o-que-fazemos' },
  { label: 'Processo', href: '/#processo' },
  { label: 'Preços', href: '/#precos' },
  { label: 'Insights', href: '/insights' },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: 'Navegação',
    items: [
      { label: 'Produtos', href: '/#produtos' },
      { label: 'O que fazemos', href: '/#o-que-fazemos' },
      { label: 'Processo', href: '/#processo' },
      { label: 'Preços', href: '/#precos' },
      { label: 'Insights', href: '/insights' },
      { label: 'Contato', href: '/#contato' },
    ],
  },
  {
    title: 'O que fazemos',
    items: [
      { label: 'SaaS e produtos digitais', href: '/#o-que-fazemos' },
      { label: 'Sistemas e plataformas', href: '/#o-que-fazemos' },
      { label: 'Automações e integrações', href: '/#o-que-fazemos' },
      { label: 'Sites e landing pages', href: '/#o-que-fazemos' },
    ],
  },
];

export const legalNav: NavItem[] = [
  { label: 'Política de Privacidade', href: '/politica-de-privacidade' },
  { label: 'Termos de Uso', href: '/termos-de-uso' },
];
