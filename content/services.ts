/**
 * "O que fazemos": quatro frentes com hierarquia explícita. A primeira é o
 * foco da IDEON e aparece maior; as outras existem a serviço de produtos e
 * negócios, e aparecem como linha. Sem ícone e sem card: a ordem e o tamanho
 * já dizem o que importa.
 */
export type Service = {
  id: string;
  title: string;
  description: string;
  /** Só a primeira: o centro do que a IDEON faz. */
  focus?: boolean;
};

export const servicesIntro = {
  title: 'Tudo gira em torno do produto.',
} as const;

export const services: Service[] = [
  {
    id: 'saas',
    title: 'SaaS e produtos digitais',
    description:
      'Os nossos e os seus: da ideia ao produto por assinatura, com usuários, cobrança recorrente e a evolução que vem depois do lançamento.',
    focus: true,
  },
  {
    id: 'sistemas',
    title: 'Sistemas e plataformas',
    description: 'Para o problema específico que nenhum software pronto resolve.',
  },
  {
    id: 'automacoes',
    title: 'Automações e integrações',
    description: 'Sistemas conversando entre si e tarefas que deixam de ser manuais.',
  },
  {
    id: 'sites',
    title: 'Sites e landing pages',
    description: 'A vitrine de um produto ou de um negócio, rápida e bem construída.',
  },
];
