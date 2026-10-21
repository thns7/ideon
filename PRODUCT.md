# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Donos e gestores de empresas pequenas e médias que precisam de um site, um aplicativo, um sistema sob medida ou uma automação, e que não têm, nem querem montar, um time técnico próprio. Os casos atuais vêm de clínicas, logística e alimentação. Chegam ao site para entender se a IDEON resolve o problema deles, quanto custa e como é trabalhar com ela, e saem pedindo orçamento pelo formulário ou pelo WhatsApp.

## Product Purpose

Site institucional da IDEON (antes Softly), empresa de engenharia de produto digital. A IDEON projeta e constrói sites, aplicativos, sistemas sob medida, automações e IA aplicada. O site existe para apresentar a empresa, mostrar o portfólio e captar clientes. Sucesso é um visitante qualificado pedir orçamento.

## Positioning

Os dois fundadores, Thiago Nascimento e Vinicius Herreira, são os engenheiros de software que fazem o trabalho: não há repasse para terceiros. O ponto de partida é o resultado do negócio do cliente, e a tecnologia aparece como consequência do trabalho, não como vitrine. Todo projeto sai com escopo, prazo e preço fechados, e o cliente acompanha entregas parciais toda semana.

## Operating Context

- Contato: formulário (`POST /api/contato`) e WhatsApp, (11) 99192-6994. E-mail softlytech01@gmail.com. Instagram @softlytech. Sem LinkedIn por enquanto.
- Fundada em 2025, em São Paulo/SP.
- O repositório é compartilhado com o viniherreira, que também trabalha nele por PR.

## Capabilities and Constraints

- Next.js 14 (App Router), TypeScript estrito, Tailwind com tokens em CSS variables (`app/globals.css`).
- Regra do projeto: componente não guarda texto nem cor. Texto em `content/`, cor em tokens.
- Sem componentes do Framer Motion que reposicionem o DOM (`layout`, `layoutId`, `AnimatePresence` com `mode`) em nada que desmonte na navegação: derrubava a rota de destino (commit `188be59`).
- Analytics só depois do consentimento LGPD (Consent Mode v2).
- Em aberto: domínio de produção, razão social, endereço e CEP.

## Brand Commitments

- Nome: **IDEON**. Assinatura: "Ideias em produtos." (versão em inglês nas pranchas: "Ideas into products.").
- Logo: palavra IDEON com o "O" aberto, um anel partido nas laterais; o anel sozinho é o ícone.
- Essência: elegante, criativa, humana, jovem, simples. Personalidade: inteligente, autêntica, curiosa, inovadora, confiante, contemporânea. Núcleo: humana + criativa + elegante.
- Não pode parecer: genérica, corporativa demais, "startup de IA" clichê, futurista exagerada, cheia de gradientes, tecnológica demais, infantil, luxuosa demais, fria, artificial.
- Tecnologia aparece como consequência do trabalho, nunca como estética principal.
- Texto do site sem travessão (—) nem meia-risca (–), em nenhum lugar visível.

## Evidence on Hand

- Portfólio real, 5 casos em `content/projects.ts`: VAR Center Log, Benjamin, ClinicaIQ, MarmitaPRO, Dra. Michele Herreira, com imagens em `public/images/projects/`.
- Pranchas da identidade IDEON fornecidas pelo Thiago (logo, paleta, tipografia, elementos, aplicações).
- **Não são reais e não podem ser apresentados como fatos:** os números de `content/stats.ts` e os preços de `content/pricing.ts`. Nenhum cliente tem depoimento.

## Product Principles

1. Resultado do negócio antes da tecnologia: falar do problema do cliente, não da ferramenta.
2. Menos é mais: cada rodada pediu menos texto, menos ornamento e menos elementos por card.
3. Honestidade: nada de número, depoimento ou selo inventado na página.
4. Gente de verdade por trás: a empresa são duas pessoas que fazem o trabalho, e isso deve se sentir.
