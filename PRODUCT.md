# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Três públicos: empreendedores com uma ideia de SaaS ou produto digital; empresas com um processo, problema ou oportunidade que pode virar sistema ou plataforma; e pessoas sem conhecimento técnico com uma ideia que poderia virar negócio digital. O site precisa parecer acessível para quem está começando e profissional o bastante para empresas. Saem conversando pelo formulário ou pelo WhatsApp.

## Product Purpose

Site institucional da IDEON (antes Softly), estúdio que cria e opera os próprios SaaS. O objetivo da empresa é ser dona de vários SaaS; construir produtos para clientes é uma frente secundária. Hierarquia do que faz: 1) SaaS e produtos digitais; 2) sistemas e plataformas; 3) automações e integrações; 4) sites e landing pages. O site existe para que, ao entrar, a pessoa pense "eles não só desenvolvem software, eles criam produtos", veja os produtos reais (Dreamclin à frente) e comece uma conversa.

## Positioning

Não queremos só entregar software: queremos criar produtos com motivo para continuar existindo. Um produto passa por Problema, Produto, Sistema, Lançamento e Evolução, e não está "pronto" quando o código termina. A IDEON não é agência de sites, agência de marketing, fábrica de software nem consultoria corporativa, nem startup genérica de IA. Os dois fundadores, Thiago Nascimento e Vinicius Herreira, são os engenheiros que constroem. Pergunta de controle para qualquer decisão: isso faz a IDEON parecer uma empresa que cria produtos ou uma prestadora de serviço?

## Operating Context

- Contato: formulário (`POST /api/contato`) e WhatsApp, (11) 99192-6994. E-mail ideonworks@gmail.com. Instagram @ideonworks. Sem LinkedIn por enquanto.
- Fundada em 2025, em São Paulo/SP.
- O repositório é compartilhado com o viniherreira, que também trabalha nele por PR.

## Capabilities and Constraints

- Next.js 14 (App Router), TypeScript estrito, Tailwind com tokens em CSS variables (`app/globals.css`).
- Regra do projeto: componente não guarda texto nem cor. Texto em `content/`, cor em tokens.
- Sem componentes do Framer Motion que reposicionem o DOM (`layout`, `layoutId`, `AnimatePresence` com `mode`) em nada que desmonte na navegação: derrubava a rota de destino (commit `188be59`).
- Analytics só depois do consentimento LGPD (Consent Mode v2).
- Em aberto: domínio de produção, razão social, endereço e CEP.

## Brand Commitments

- Nome: **IDEON**. Tagline: "Ideas into products." (em inglês, junto do logo). No hero, em português: "Ideias que viram produtos."
- Voz: direta, confiante, humana, inteligente, jovem, concisa. Proibido: "soluções inovadoras", "transformação digital", "soluções personalizadas", "tecnologia de ponta", "próximo nível", "apaixonados por tecnologia", "estratégias digitais". CTA final não é "Solicite um orçamento".
- Logo: palavra IDEON com o "O" aberto, um anel partido nas laterais; o anel sozinho é o ícone.
- Essência: elegante, criativa, humana, jovem, simples. Personalidade: inteligente, autêntica, curiosa, inovadora, confiante, contemporânea. Núcleo: humana + criativa + elegante.
- Não pode parecer: genérica, corporativa demais, "startup de IA" clichê, futurista exagerada, cheia de gradientes, tecnológica demais, infantil, luxuosa demais, fria, artificial.
- Tecnologia aparece como consequência do trabalho, nunca como estética principal.
- Texto do site sem travessão (—) nem meia-risca (–), em nenhum lugar visível.

## Evidence on Hand

- Produtos reais em `content/projects.ts`. Da IDEON: Dreamclin, Benjamin e MarmitaPRO. Para clientes: VAR Center Log e Dra. Michele Herreira. Lista completa: Dreamclin (SaaS de gestão para clínicas, no ar em dreamclin.com; antes ClinicaIQ), Benjamin, MarmitaPRO, VAR Center Log e Dra. Michele Herreira. As telas do Dreamclin, Benjamin e MarmitaPRO são prévias remontadas, não capturas reais.
- Pranchas da identidade IDEON fornecidas pelo Thiago (logo, paleta, tipografia, elementos, aplicações).
- **Não são reais e não podem ser apresentados como fatos:** os números de `content/stats.ts` e os preços de `content/pricing.ts`. Nenhum cliente tem depoimento.

## Product Principles

1. Produto antes de serviço: mostrar produtos reais e mentalidade de longo prazo. Ser dona dos próprios SaaS é o objetivo da empresa, mas o site não alardeia isso: não pode parecer que os produtos dos clientes valem menos. A diferença aparece só como "Produto IDEON" na linha de estado de cada produto.
2. Menos é mais: cada rodada pediu menos texto, menos ornamento e menos elementos por card.
3. Honestidade: nada de número, depoimento ou selo inventado na página.
4. Gente de verdade por trás: a empresa são duas pessoas que fazem o trabalho, e isso deve se sentir.
