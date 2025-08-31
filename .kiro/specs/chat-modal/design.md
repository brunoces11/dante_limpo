# Design Document - Chat Modal

## Overview

O Chat Modal é um componente React complexo que implementa uma interface de chat completa para interação com a IA Dante. O componente utiliza uma arquitetura baseada em hooks do React para gerenciar estado local, comunicação assíncrona com API externa, e renderização condicional de UI responsiva.

## Architecture

### Component Structure
```
ChatModal (Main Component)
├── Modal Overlay (Fixed positioning)
├── Card Container (Responsive sizing)
│   ├── Header Section
│   │   ├── Dante AI Branding
│   │   └── Status Indicator
│   ├── Messages Area (Scrollable)
│   │   ├── Message Bubbles
│   │   │   ├── User Messages (Right-aligned)
│   │   │   └── Bot Messages (Left-aligned, Markdown)
│   │   └── Loading Indicator
│   └── Input Section
│       ├── Text Input Field
│       ├── Send Button
│       └── Status Bar (Character count, hints)
```

### State Management Architecture
O componente utiliza múltiplos hooks do React para gerenciar diferentes aspectos do estado:

- **Messages State**: Array de objetos Message para histórico da conversa
- **Input State**: String para controle do campo de texto
- **Loading State**: Boolean para indicadores de processamento
- **Modal State**: Boolean para controle de visibilidade (gerenciado pelo componente pai)
- **Processing State**: Boolean para controle de processamento de mensagem inicial

## Components and Interfaces

### Core Interfaces

```typescript
interface Message {
  id: string;              // Identificador único da mensagem
  content: string;         // Conteúdo textual da mensagem
  sender: 'user' | 'bot';  // Tipo do remetente
  timestamp: Date;         // Momento de criação
  isLoading?: boolean;     // Indicador de mensagem em processamento
}

interface ChatModalProps {
  isOpen: boolean;         // Controle de visibilidade do modal
  onClose: () => void;     // Callback para fechamento
  initialMessage?: string; // Mensagem inicial opcional
}
```

### External Dependencies

#### UI Components (shadcn/ui)
- **Card, CardContent, CardHeader**: Estrutura principal do modal
- **Button**: Botões de ação (enviar, copiar, feedback)
- **Input**: Campo de entrada de texto
- **Badge**: Indicadores de status

#### Icon Library (Lucide React)
- **Scale**: Ícone do Dante AI (tema jurídico)
- **User**: Representação do usuário
- **Send, Copy, ThumbsUp, ThumbsDown**: Ações de mensagem
- **Loader2**: Indicador de carregamento animado

#### Markdown Processing
- **ReactMarkdown**: Renderização de conteúdo markdown
- **remark-gfm**: Suporte a GitHub Flavored Markdown

## Data Models

### Message Flow Architecture
```
User Input → Validation → API Call → Response Processing → UI Update
     ↓           ↓            ↓              ↓               ↓
  Input State  Loading UI   Langflow    Message Array   Re-render
```

### API Integration Model
```typescript
// Langflow API Structure
const apiPayload = {
  input_value: string,    // Mensagem do usuário
  output_type: "chat",    // Tipo de saída esperada
  input_type: "chat"      // Tipo de entrada
}

// Expected Response Structure
const apiResponse = {
  outputs: [{
    outputs: [{
      results: {
        message: {
          text: string    // Resposta da IA
        }
      }
    }]
  }]
}
```

### State Transitions
```
Initial State:
- messages: [welcomeMessage]
- inputValue: ""
- isLoading: false

User Sends Message:
- Add user message to array
- Set isLoading: true
- Add loading message to array
- Clear input field

API Response:
- Remove loading message
- Add bot response to array
- Set isLoading: false

Error Handling:
- Remove loading message
- Add error message to array
- Set isLoading: false
```

## Error Handling

### API Communication Errors
- **Network Failures**: Timeout, connection issues
- **HTTP Errors**: 4xx, 5xx status codes
- **Response Parsing**: Malformed JSON, unexpected structure

### Error Recovery Strategy
1. **Graceful Degradation**: Sempre exibir mensagem de erro amigável
2. **User Feedback**: Mensagens claras sobre o que aconteceu
3. **Retry Capability**: Usuário pode tentar novamente facilmente
4. **Logging**: Console.error para debugging (desenvolvimento)

### Error Message Templates
```typescript
const errorMessages = {
  network: "Desculpe, ocorreu um erro ao processar sua mensagem. Verifique sua conexão e tente novamente.",
  parsing: "Desculpe, não consegui processar sua mensagem. Tente novamente.",
  generic: "Desculpe, ocorreu um erro inesperado. Tente novamente."
}
```

## Testing Strategy

### Unit Testing Approach
Baseado nos critérios EARS dos requirements:

#### Modal Lifecycle Tests
- Teste de abertura/fechamento do modal
- Teste de comportamento do overlay
- Teste de limpeza de estado ao fechar

#### Message Processing Tests
- Teste de envio de mensagem do usuário
- Teste de exibição de loading
- Teste de processamento de resposta da API
- Teste de tratamento de erros

#### Input Management Tests
- Teste de validação de input vazio
- Teste de contador de caracteres
- Teste de comportamento do Enter/Shift+Enter
- Teste de desabilitação durante loading

#### Initial Message Tests
- Teste de processamento automático
- Teste de prevenção de reprocessamento
- Teste de reset ao fechar modal

### Integration Testing
- Teste de comunicação com API Langflow
- Teste de renderização de markdown
- Teste de responsividade em diferentes viewports

### E2E Testing Scenarios
1. **Fluxo completo de conversa**: Abrir modal → Enviar pergunta → Receber resposta → Fechar
2. **Fluxo com mensagem inicial**: Hero input → Modal abre → Mensagem processada automaticamente
3. **Fluxo de erro**: Simular falha de API → Verificar mensagem de erro → Retry

## Performance Considerations

### Optimization Strategies
- **Lazy Loading**: Modal só renderiza quando isOpen=true
- **Message Virtualization**: Para conversas muito longas (implementação futura)
- **Debounced Input**: Evitar re-renders desnecessários no contador de caracteres
- **Memoization**: React.memo para componentes de mensagem

### Memory Management
- **Cleanup Effects**: useEffect cleanup para evitar memory leaks
- **State Reset**: Limpeza de estado ao fechar modal
- **API Cancellation**: AbortController para cancelar requests em andamento

### Bundle Size Impact
- **Tree Shaking**: Importações específicas do Lucide React
- **Code Splitting**: Modal pode ser lazy-loaded se necessário
- **Markdown Bundle**: ReactMarkdown adiciona ~50KB ao bundle

## Accessibility Compliance

### WCAG 2.1 AA Standards
- **Keyboard Navigation**: Tab order lógico, Enter para enviar, ESC para fechar
- **Screen Reader Support**: ARIA labels apropriados, roles semânticos
- **Color Contrast**: Cores atendem contraste mínimo 4.5:1
- **Focus Management**: Focus trap no modal, retorno ao elemento que abriu

### Semantic HTML
- **Modal Structure**: Uso correto de dialog/modal patterns
- **Message Structure**: Estrutura semântica para conversas
- **Form Elements**: Labels associados corretamente aos inputs

## Security Considerations

### Input Sanitization
- **XSS Prevention**: ReactMarkdown com configuração segura
- **Input Validation**: Limite de caracteres, sanitização básica
- **API Security**: Headers apropriados, HTTPS obrigatório

### Data Privacy
- **Local Storage**: Mensagens não persistem por padrão
- **API Communication**: Dados enviados apenas para Langflow configurado
- **No Tracking**: Sem analytics ou tracking de conversas