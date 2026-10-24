/**
 * "Como uma ideia vira produto": etapas que se empilham como camadas ao rolar
 * (sections/process.tsx). A última não fecha o ciclo, abre o próximo.
 */
export const processIntro = {
  title: 'Como uma ideia vira produto.',
  description: 'Cinco etapas. A última não tem fim.',
} as const;

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Descobrir',
    description: 'Entender o problema, quem sente ele e se existe ali um produto.',
  },
  {
    number: '02',
    title: 'Definir',
    description:
      'Transformar a ideia numa proposta clara: o que o produto faz, para quem, e o que fica para depois.',
  },
  {
    number: '03',
    title: 'Construir',
    description:
      'Design, desenvolvimento, integrações e infraestrutura, com entregas semanais que você acompanha.',
  },
  {
    number: '04',
    title: 'Lançar',
    description: 'Colocar no ar com usuários de verdade, cobrança funcionando e tudo monitorado.',
  },
  {
    number: '05',
    title: 'Evoluir',
    description: 'Aprender com quem usa e melhorar. Um produto não fica pronto; ele cresce.',
  },
];
