# Requirements Document - Chat Modal

## Introduction

Esta spec define o comportamento completo do Chat Modal do Dante AI, um componente de interface que permite aos usuários interagir com a IA especializada em Registro de Imóveis através de uma janela modal sobreposta à aplicação principal.

## Requirements

### Requirement 1 - Modal Lifecycle Management

**User Story:** Como um usuário do Dante AI, eu quero que o chat modal abra e feche de forma intuitiva, para que eu possa iniciar e encerrar conversas facilmente.

#### Acceptance Criteria

1. WHEN o usuário clica no botão "Perguntar" no hero THEN o sistema SHALL abrir o chat modal
2. WHEN o modal está aberto THEN o sistema SHALL exibir um overlay escuro sobre o conteúdo da página
3. WHEN o usuário clica fora do modal THEN o sistema SHALL manter o modal aberto (não fechar acidentalmente)
4. WHEN o usuário pressiona ESC THEN o sistema SHALL fechar o modal
5. WHEN o modal é fechado THEN o sistema SHALL limpar o campo de input mas manter o histórico da conversa

### Requirement 2 - Message Display and Formatting

**User Story:** Como um usuário consultando sobre Registro de Imóveis, eu quero que as respostas do Dante sejam bem formatadas e legíveis, para que eu possa compreender facilmente as informações jurídicas.

#### Acceptance Criteria

1. WHEN o Dante responde THEN o sistema SHALL renderizar markdown com formatação adequada
2. WHEN uma resposta contém listas THEN o sistema SHALL exibir bullets ou numeração apropriada
3. WHEN uma resposta contém código ou referências legais THEN o sistema SHALL destacar com background diferenciado
4. WHEN uma mensagem é do usuário THEN o sistema SHALL exibir com fundo escuro alinhado à direita
5. WHEN uma mensagem é do bot THEN o sistema SHALL exibir com fundo claro alinhado à esquerda
6. WHEN qualquer mensagem é exibida THEN o sistema SHALL mostrar timestamp no formato HH:MM

### Requirement 3 - Real-time Communication

**User Story:** Como um usuário fazendo perguntas ao Dante, eu quero ver indicadores visuais durante o processamento, para que eu saiba que minha pergunta está sendo analisada.

#### Acceptance Criteria

1. WHEN o usuário envia uma mensagem THEN o sistema SHALL exibir imediatamente a mensagem do usuário
2. WHEN o sistema está processando THEN o sistema SHALL exibir um indicador de loading com texto "Analisando legislação..."
3. WHEN a resposta da API chega THEN o sistema SHALL substituir o loading pela resposta real
4. WHEN há erro na comunicação THEN o sistema SHALL exibir mensagem de erro amigável
5. WHEN o sistema está carregando THEN o sistema SHALL desabilitar o botão de envio

### Requirement 4 - Input Management

**User Story:** Como um usuário digitando perguntas, eu quero uma experiência fluida de input, para que eu possa focar no conteúdo da minha pergunta.

#### Acceptance Criteria

1. WHEN o usuário digita no campo THEN o sistema SHALL mostrar contador de caracteres (atual/500)
2. WHEN o usuário pressiona Enter THEN o sistema SHALL enviar a mensagem
3. WHEN o usuário pressiona Shift+Enter THEN o sistema SHALL quebrar linha sem enviar
4. WHEN o campo está vazio THEN o sistema SHALL desabilitar o botão de envio
5. WHEN uma mensagem é enviada THEN o sistema SHALL limpar o campo de input automaticamente

### Requirement 5 - Initial Message Processing

**User Story:** Como um usuário que fez uma pergunta no hero da página, eu quero que essa pergunta seja automaticamente processada quando o modal abrir, para que eu não precise reescrever.

#### Acceptance Criteria

1. WHEN o modal abre com initialMessage THEN o sistema SHALL enviar automaticamente essa mensagem
2. WHEN o initialMessage é processado THEN o sistema SHALL marcar como processado para evitar reenvio
3. WHEN o modal fecha e reabre THEN o sistema SHALL resetar o estado de processamento
4. WHEN não há initialMessage THEN o sistema SHALL exibir apenas a mensagem de boas-vindas do Dante

### Requirement 6 - Message Actions

**User Story:** Como um usuário recebendo respostas do Dante, eu quero poder interagir com as mensagens, para que eu possa copiar informações importantes e dar feedback.

#### Acceptance Criteria

1. WHEN uma mensagem do bot é exibida THEN o sistema SHALL mostrar botões de ação (copiar, like, dislike)
2. WHEN o usuário clica em copiar THEN o sistema SHALL copiar o texto para a área de transferência
3. WHEN o usuário clica em like/dislike THEN o sistema SHALL registrar o feedback (visual feedback apenas)
4. WHEN uma mensagem está em loading THEN o sistema SHALL ocultar os botões de ação
5. WHEN uma mensagem é do usuário THEN o sistema SHALL não exibir botões de ação

### Requirement 7 - Welcome Message

**User Story:** Como um novo usuário do Dante AI, eu quero receber uma mensagem de boas-vindas clara, para que eu entenda como usar o sistema.

#### Acceptance Criteria

1. WHEN o modal abre pela primeira vez THEN o sistema SHALL exibir mensagem de boas-vindas do Dante
2. WHEN a mensagem de boas-vindas é exibida THEN o sistema SHALL explicar a especialização em Registro de Imóveis
3. WHEN a mensagem de boas-vindas é exibida THEN o sistema SHALL sugerir tipos de perguntas que podem ser feitas
4. WHEN há initialMessage THEN o sistema SHALL manter a mensagem de boas-vindas e processar a pergunta em seguida

### Requirement 8 - Responsive Design

**User Story:** Como um usuário acessando de diferentes dispositivos, eu quero que o chat modal funcione bem em qualquer tamanho de tela, para que eu possa usar o Dante em qualquer situação.

#### Acceptance Criteria

1. WHEN o modal é exibido em desktop THEN o sistema SHALL usar largura máxima de 1100px
2. WHEN o modal é exibido em mobile THEN o sistema SHALL adaptar para largura da tela com padding
3. WHEN o conteúdo das mensagens é muito longo THEN o sistema SHALL permitir scroll vertical
4. WHEN há muitas mensagens THEN o sistema SHALL manter altura fixa de 400px para área de mensagens
5. WHEN o usuário redimensiona a janela THEN o sistema SHALL manter a responsividade