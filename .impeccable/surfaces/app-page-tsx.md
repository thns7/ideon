---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: ["components/layout/header.tsx","components/layout/footer.tsx"]
---

# Home da IDEON

Escopo: a home (`app/page.tsx`) e a casca global (header, rodapé, intro, botões flutuantes), mais as páginas internas herdando o mesmo mundo. Modo: Persuade.

Público e tarefa: empreendedor com ideia de SaaS, empresa com um processo que pode virar sistema, ou pessoa sem conhecimento técnico com uma ideia de produto. Ação: começar uma conversa (formulário ou WhatsApp). Estrutura: Hero, Produtos (Dreamclin em destaque), Por que existimos, O que fazemos (hierarquia SaaS primeiro), Processo (Descobrir a Evoluir), Preços, Conversa.

Prova disponível: 5 casos reais do portfólio com imagens; processo de 5 etapas; os dois fundadores. Números de `content/stats.ts` e preços ainda são de exemplo.

Restrições: texto em `content/`, cor em tokens; nenhum travessão no texto; sem componentes do Framer Motion que reposicionem o DOM; o usuário rejeitou uma sequência longa presa à rolagem ("O número"), então o movimento é contido.

Momento memorável: a esfera da marca nascendo do canto, maior que a tela, ao lado de "Ideias que viram produtos.", e o processo empilhando uma camada por etapa.

Em aberto: domínio, razão social, endereço; fotos reais dos fundadores.

## Direction contract

THESIS: Cada seção é uma tela de lançamento de produto: uma ideia só, em escala de palco, com o mínimo de texto em volta. Recusa a landing de agência padrão, com grade de cards iguais, gradientes espalhados, rótulos técnicos e brilho azul.

OWN-WORLD: Dois chãos e nenhum meio-termo: palco carvão #0B0B0D e tela marfim #F6F6F4, sem cartão cinza. Uma família só, Geist 400/500/600, display grande e justo (-0,035em), texto 17px. Violeta #A78BFA é o único acento de interface; pêssego #FFB38A e sálvia #A7D7C5 vivem só dentro da esfera. Estrutura por filete de 1px. Estado por traço (sublinhado, contorno), nunca só por cor. Telas marfim têm luz própria, um calor sutil vindo de um canto. Grade única de 12 colunas. Sem rótulo acima de título.

STORY: Em uma tela o visitante entende que a IDEON transforma ideias em produtos digitais; descendo, vê o que ela constrói, como trabalha (camadas que se empilham por etapa), casos reais e quanto custa; termina sabendo que fala direto com quem constrói e pede orçamento.

FIRST VIEWPORT: Carvão de ponta a ponta, composto como pôster. Header fino: palavra IDEON à esquerda, botão "Falar com a IDEON" à direita. A esfera, maior que a tela (cerca de 135vmin), nasce do canto inferior direito, cortada pela borda; só o quarto de cima e da esquerda aparece. No alto à esquerda, "Ideias que viram produtos." em Geist 500, duas linhas, até 6,25rem. Abaixo, em ardósia, "Criamos SaaS e produtos digitais que resolvem um problema real e continuam crescendo depois do lançamento." e dois botões: "Tenho uma ideia" (marfim) e "Ver produtos" (contorno). O texto nunca passa sobre a borda colorida.

FORM: Palco de lançamento, posição 3 da lista ordenada, seed c6a870ae. Interação assinatura: a luz gira devagar pela borda da esfera e, com mouse, se inclina na direção do cursor (só desktop, nada preso à rolagem); o processo empilha camadas fixas ao rolar.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
