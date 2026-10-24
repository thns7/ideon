/**
 * "Por que existimos": o motivo da IDEON, sem texto institucional.
 * Junta o que seriam duas seções (Sobre e Filosofia), que separadas diziam a
 * mesma coisa duas vezes.
 */
export const about = {
  title: 'O software não termina quando entra em produção.',
  paragraphs: [
    'Não queremos só entregar código. Queremos criar produtos com motivo para continuar existindo: que ganham usuários, recebem recursos novos e se pagam.',
    'Por isso a gente pensa no produto antes da tela, e continua por perto depois do lançamento.',
  ],
  /* O time é este: dois fundadores, os dois engenheiros de software.
     Nada de nome de enfeite para o quadro parecer maior. */
  team: [
    { name: 'Thiago Nascimento', role: 'Fundador, engenheiro de software' },
    { name: 'Vinícius Herreira', role: 'Fundador, engenheiro de software' },
  ],
} as const;
