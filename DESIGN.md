---
name: IDEON
description: Ideas into products.
colors:
  carbon: "#0B0B0D"
  carbon-2: "#161619"
  carbon-3: "#202025"
  ivory: "#F6F6F4"
  slate: "#A1A1AA"
  violet: "#A78BFA"
  violet-ink: "#6B4FD3"
  peach: "#FFB38A"
  sage: "#A7D7C5"
typography:
  display:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "clamp(3rem, 8vw, 6rem)"
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 4.6vw, 4rem)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 2vw, 1.75rem)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.02em"
rounded:
  input: "12px"
  card: "16px"
  bento: "20px"
  pill: "999px"
spacing:
  gutter: "clamp(20px, 4vw, 64px)"
  header: "72px"
components:
  button-primary-carbon:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.carbon}"
    rounded: "{rounded.pill}"
    height: "56px"
    padding: "0 28px"
  button-primary-ivory:
    backgroundColor: "{colors.carbon}"
    textColor: "{colors.ivory}"
    rounded: "{rounded.pill}"
    height: "56px"
    padding: "0 28px"
  card:
    backgroundColor: "transparent"
    rounded: "{rounded.card}"
    padding: "28px"
  input:
    backgroundColor: "transparent"
    rounded: "{rounded.input}"
    height: "48px"
---

# Design System: IDEON

## Overview

**Creative North Star: "Palco de lançamento"**

Cada seção é uma tela de lançamento de produto: uma ideia só, em escala de palco, com o mínimo de texto em volta. O site alterna dois chãos sem meio-termo, palco carvão e tela marfim, e a cor de verdade vive em um lugar só: a esfera da marca, no hero. A tecnologia aparece como consequência (precisão, ritmo, nitidez), nunca como tema visual.

O tom é humano, criativo e elegante: uma família tipográfica só, títulos grandes e justos, estrutura feita de filete de 1px e muito espaço vazio. Recusa a landing de agência padrão, com grade de cards iguais, gradientes espalhados, rótulos técnicos, brilho azul e ar de startup de IA.

**Key Characteristics:**
- Dois chãos alternados por seção (`data-ground="carbon" | "ivory"`), cada um redefinindo os tokens semânticos.
- Uma família (Geist 400/500/600); hierarquia por tamanho e peso.
- A esfera é o único gradiente do site.
- Estrutura por filete, profundidade por sombra discreta, nunca por cartão cinza.
- Movimento contido: entradas curtas em CSS, nada de sequência longa presa à rolagem.

## Colors

Neutros quase puros com um acento frio e duas cores quentes guardadas para a luz da marca.

### Primary
- **Violeta IDEON** (violet): o único acento de interface sobre carvão (barra de progresso, foco, detalhes de estado). Sobre marfim vira **Violeta Tinta** (violet-ink), que dá 5,3:1 de contraste.

### Secondary
- **Pêssego** (peach) e **Sálvia** (sage): só dentro da esfera e na luz de canto do marfim (pêssego a 8%). Nunca em texto, botão ou borda.

### Neutral
- **Carvão** (carbon): chão escuro, header, rodapé, intro; texto sobre marfim.
- **Carvão 2 e 3** (carbon-2, carbon-3): superfícies e filetes sobre carvão.
- **Marfim** (ivory): chão claro; texto e botão principal sobre carvão.
- **Ardósia** (slate): texto de apoio e legendas.

### Named Rules
**The Inverse Brand Rule.** A cor de marca é sempre o inverso do chão: marfim sobre carvão, carvão sobre marfim. Texto sobre ela usa `brand-ink`, nunca branco fixo.

**The One Orb Rule.** O único gradiente do site é a esfera. Nada de gradiente em botão, título, borda ou fundo de seção.

## Typography

**Display Font:** Geist (com system-ui)
**Body Font:** Geist (com system-ui)

**Character:** Uma grotesca contemporânea e calma; o contraste vem de escala, não de troca de família.

### Hierarchy
- **Display** (500, até 6rem, 0,98): títulos de página. O hero da home sobe até 6,25rem no desktop, em duas linhas.
- **Headline** (500, até 4rem, 1,02): título de seção.
- **Title** (500, até 1,75rem, 1,2): títulos de card e de etapa.
- **Body** (400, 17px, 1,65): texto corrido, até ~65ch. O apoio (lead) vai de 18 a 21px.
- **Label** (500, 13px, +0,02em): metadados curtos, sem caixa alta.

### Named Rules
**The No Kicker Rule.** Nenhum rótulo acima de título. O título fala sozinho; o contexto vem depois dele.

## Layout

Coluna central `shell` (até 1320px) com respiro lateral fluido de 20 a 64px. Grade de 12 colunas. Seções com altura de palco e muito vazio; no hero, composição de pôster assimétrica (título no alto à esquerda, esfera nascendo do canto inferior direito, maior que a tela). Header fixo de 72px. No celular tudo empilha em uma coluna e os alvos de toque têm pelo menos 44px.

## Elevation & Depth

Plano por padrão, com profundidade por filete de 1px e três sombras de elevação definidas por chão: mais densas no carvão, quase invisíveis no marfim. Não existe brilho colorido.

### Shadow Vocabulary
- **e1** (`0 1px 2px rgb(0 0 0 / .5), 0 8px 24px -12px rgb(0 0 0 / .7)` no carvão): cartões em repouso.
- **e2** (`0 2px 6px …, 0 20px 48px -20px …`): camadas do processo, plano em destaque, botões flutuantes.
- **e3** (`0 4px 12px …, 0 36px 80px -32px …`): menus e sobreposições.

### Named Rules
**The Line Before Shadow Rule.** Separar com filete primeiro; sombra só quando a peça de fato flutua sobre outra.

## Shapes

Cantos suaves e constantes: 12px em campo, 16px em cartão, 20px em bloco grande, pílula em botão e chip. A esfera e o anel do logo são as únicas formas circulares de destaque.

## Components

### Buttons
- **Shape:** pílula (999px).
- **Primary:** cor de marca do chão (marfim no carvão, carvão no marfim), texto `brand-ink`; tamanhos 40, 48, 56 e 64px de altura.
- **Hover / Focus:** a cor de fundo escurece um passo; a seta à direita desliza; foco com anel visível.
- **Secondary / Outline:** transparente com filete; o filete vira cor de título no hover. **Ghost:** texto com sublinhado no hover.

### Cards / Containers
- **Corner Style:** 16px.
- **Background:** o próprio chão (transparente).
- **Shadow Strategy:** e1 em repouso, e2 quando empilham.
- **Border:** filete de 1px na cor `line` do chão.
- **Internal Padding:** 20 a 28px.

### Inputs / Fields
- **Style:** filete de 1px, fundo do chão, cantos de 12px.
- **Focus:** o filete vira cor de título e aparece o anel de foco.

### Navigation
- Header sempre carvão, com a palavra IDEON à esquerda e um botão de contato à direita. Links com sublinhado na cor de título. No celular, menu em tela cheia, também carvão.

### A Esfera
CSS puro: anel cônico violeta, pêssego e sálvia com um núcleo de carvão deslocado e uma bruma desfocada. A luz gira em 28s pela borda; com mouse, o núcleo anda até 9 pontos para o lado oposto do cursor, então a borda acesa se inclina na direção dele. Parada com menos movimento pedido. Aparece uma vez, no hero.

### O Logo
Palavra IDEON medida da prancha da marca (traço 17,2 em altura 100, letras largas, O elíptico cortado por uma faixa horizontal). O anel sozinho é o ícone. Sempre em uma cor só (`currentColor`).

## Do's and Don'ts

### Do:
- **Do** alternar carvão e marfim seção a seção, sempre pelo atributo de chão.
- **Do** usar Geist 500 com tracking negativo nos títulos e 400 no texto.
- **Do** separar por filete de 1px e espaço vazio.
- **Do** manter o texto fora da borda colorida da esfera.

### Don't:
- **Don't** usar gradiente fora da esfera, nem brilho colorido em sombra.
- **Don't** colocar rótulo ou numeração acima de título.
- **Don't** usar travessão em nenhum texto do site.
- **Don't** criar sequência longa animada presa à rolagem.
- **Don't** usar pêssego ou sálvia em texto, botão ou borda.
