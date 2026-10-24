/**
 * "Por que existimos": o motivo da IDEON, sem texto institucional.
 * Junta o que seriam duas seções (Sobre e Filosofia), que separadas diziam a
 * mesma coisa duas vezes.
 */
export const about = {
  title: 'O software não termina quando entra em produção.',
  paragraphs: [
    'A maior parte do que construímos é nossa: produtos que lançamos, operamos e melhoramos todo mês. Por isso a gente pensa como dono, não como fornecedor.',
    'Quando construímos para alguém, a régua é a mesma: produto com motivo para continuar existindo, não entrega que acaba no lançamento.',
  ],
  /* O time é este: dois fundadores, os dois engenheiros de software.
     Nada de nome de enfeite para o quadro parecer maior. */
  team: [
    { name: 'Thiago Nascimento', role: 'Fundador, engenheiro de software' },
    { name: 'Vinícius Herreira', role: 'Fundador, engenheiro de software' },
  ],
} as const;
