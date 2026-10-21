/**
 * Faixa "Padrão de entrega", logo depois do hero (sections/delivery-band.tsx).
 *
 * Os três números são os mesmos do painel antigo (1,1 s, 98/100 e 5,2 semanas).
 * Antes eles eram barras de progresso com rótulo técnico ("Lighthouse
 * (performance)"); agora são frases, com a tecnologia como consequência.
 */
export const delivery = {
  statement: 'Todo projeto sai com escopo, prazo e preço fechados.',
  facts: [
    { figure: '5,2 semanas', text: 'do aceite da proposta ao lançamento, em média.' },
    { figure: '1,1 s', text: 'para o site abrir no celular.' },
    { figure: '98 de 100', text: 'na nota de desempenho do Google.' },
  ],
  note: 'Você acompanha cada etapa em ambiente de testes, desde a primeira semana.',
} as const;
