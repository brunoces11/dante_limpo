# Implementation Plan - Chat Modal

- [ ] 1. Set up core component structure and TypeScript interfaces
  - Create ChatModal component with proper TypeScript interfaces
  - Define Message interface with id, content, sender, timestamp, and isLoading properties
  - Define ChatModalProps interface with isOpen, onClose, and initialMessage properties
  - Set up basic component shell with conditional rendering based on isOpen prop
  - _Requirements: 1.1, 1.2_

- [ ] 2. Implement modal lifecycle and overlay management
  - [ ] 2.1 Create modal overlay with proper z-index and backdrop
    - Implement fixed positioning overlay with bg-black/50 backdrop
    - Set z-index to 50 for proper layering above page content
    - Add flex centering for modal positioning
    - _Requirements: 1.1, 1.2_

  - [ ] 2.2 Implement modal opening and closing behavior
    - Handle isOpen prop changes to show/hide modal
    - Implement onClose callback integration
    - Add ESC key handler for modal closing
    - Prevent accidental closing when clicking inside modal
    - _Requirements: 1.1, 1.3, 1.4_

  - [ ] 2.3 Add modal state cleanup on close
    - Clear input field when modal closes
    - Reset hasProcessedInitialMessage flag
    - Maintain message history across modal sessions
    - _Requirements: 1.5_

- [ ] 3. Create message display system with proper formatting
  - [ ] 3.1 Implement message rendering with alignment and styling
    - Create message bubble components with proper alignment (user right, bot left)
    - Implement avatar system with Scale icon for bot and User icon for user
    - Add proper spacing and max-width constraints for readability
    - Style user messages with dark background and bot messages with light background
    - _Requirements: 2.4, 2.5_

  - [ ] 3.2 Integrate ReactMarkdown for bot message formatting
    - Set up ReactMarkdown with remark-gfm plugin for GitHub Flavored Markdown
    - Configure custom components for headings, paragraphs, lists, and code blocks
    - Implement proper styling for legal references and code highlighting
    - Add support for links, blockquotes, and emphasis formatting
    - _Requirements: 2.1, 2.2, 2.3_

  - [ ] 3.3 Add timestamp display for all messages
    - Format timestamps using toLocaleTimeString with HH:MM format
    - Position timestamps appropriately for both user and bot messages
    - Style timestamps with appropriate opacity and size
    - _Requirements: 2.6_

- [ ] 4. Implement real-time communication with loading states
  - [ ] 4.1 Create loading indicator system
    - Implement loading message with Loader2 spinning icon
    - Add "Analisando legislação..." text for context-specific loading
    - Handle loading message insertion and removal from message array
    - _Requirements: 3.2, 3.3_

  - [ ] 4.2 Integrate Langflow API communication
    - Implement sendToLangflow async function with proper error handling
    - Configure API endpoint and request structure for Langflow integration
    - Handle response parsing with fallback for different response structures
    - Add proper error messages for network failures and API errors
    - _Requirements: 3.1, 3.4_

  - [ ] 4.3 Implement message flow with loading states
    - Add user message immediately when sent
    - Show loading indicator while processing API request
    - Replace loading message with bot response when received
    - Handle error scenarios with user-friendly error messages
    - _Requirements: 3.1, 3.2, 3.3, 3.4_

  - [ ] 4.4 Add send button state management
    - Disable send button during loading states
    - Show loading spinner in send button when processing
    - Re-enable button after response or error
    - _Requirements: 3.5_

- [ ] 5. Create input management system with validation
  - [ ] 5.1 Implement text input with character counting
    - Add controlled input component with value and onChange handlers
    - Implement character counter showing current/500 characters
    - Style counter appropriately and position in status bar
    - _Requirements: 4.1_

  - [ ] 5.2 Add keyboard event handling for message sending
    - Implement Enter key handler for sending messages
    - Add Shift+Enter support for line breaks without sending
    - Prevent default form submission behavior
    - _Requirements: 4.2, 4.3_

  - [ ] 5.3 Implement send button state and validation
    - Disable send button when input is empty or only whitespace
    - Enable send button only when valid input is present
    - Clear input field automatically after sending message
    - _Requirements: 4.4, 4.5_

- [ ] 6. Add initial message processing functionality
  - [ ] 6.1 Implement automatic initial message handling
    - Process initialMessage prop when modal opens
    - Add delay to ensure modal is fully rendered before processing
    - Send initial message automatically through existing message flow
    - _Requirements: 5.1_

  - [ ] 6.2 Add initial message state management
    - Track hasProcessedInitialMessage to prevent duplicate processing
    - Reset processing state when modal closes and reopens
    - Handle cases where no initial message is provided
    - _Requirements: 5.2, 5.3, 5.4_

- [ ] 7. Implement message action buttons and interactions
  - [ ] 7.1 Create message action button system
    - Add copy, thumbs up, and thumbs down buttons for bot messages
    - Position action buttons appropriately in message layout
    - Hide action buttons for user messages and loading messages
    - Style buttons with appropriate hover states and sizing
    - _Requirements: 6.1, 6.4, 6.5_

  - [ ] 7.2 Implement copy to clipboard functionality
    - Add copyToClipboard function using navigator.clipboard API
    - Handle copy button click events with proper error handling
    - Provide visual feedback for successful copy operations
    - _Requirements: 6.2_

  - [ ] 7.3 Add feedback button functionality
    - Implement like/dislike button click handlers
    - Add visual feedback for button interactions
    - Store feedback state for UI purposes (no backend integration needed)
    - _Requirements: 6.3_

- [ ] 8. Create welcome message system
  - [ ] 8.1 Implement default welcome message
    - Create initial message from Dante explaining specialization in Registro de Imóveis
    - Include suggestions for types of questions users can ask
    - Format welcome message with proper branding and tone
    - _Requirements: 7.1, 7.2, 7.3_

  - [ ] 8.2 Handle welcome message with initial message flow
    - Maintain welcome message when initial message is processed
    - Ensure welcome message appears first in conversation
    - Handle proper message ordering and timing
    - _Requirements: 7.4_

- [ ] 9. Implement responsive design and mobile optimization
  - [ ] 9.1 Add responsive modal sizing
    - Set max-width of 1100px for desktop displays
    - Implement responsive padding and margins for mobile devices
    - Ensure modal adapts properly to different screen sizes
    - _Requirements: 8.1, 8.2_

  - [ ] 9.2 Optimize message area for different viewports
    - Set fixed height of 400px for message area with scroll
    - Ensure proper scrolling behavior for long conversations
    - Maintain responsive text sizing and spacing
    - Handle window resize events gracefully
    - _Requirements: 8.3, 8.4, 8.5_

- [ ] 10. Add header section with branding and status
  - Create header with Dante AI branding and Scale icon
  - Add status indicator showing "Especialista Online" with green dot
  - Implement proper header styling and spacing
  - Ensure header remains visible and properly positioned
  - _Requirements: 7.1, 7.2_

- [ ] 11. Implement input section with status bar
  - Create input area with proper spacing and borders
  - Add status bar with specialist badge and usage hints
  - Include "Pressione Enter para enviar" hint text
  - Position character counter and status elements appropriately
  - _Requirements: 4.1, 7.2_

- [ ] 12. Add comprehensive error handling and edge cases
  - Implement proper error boundaries for component crashes
  - Handle API timeout scenarios with appropriate user feedback
  - Add validation for malformed API responses
  - Ensure graceful degradation when JavaScript features are unavailable
  - _Requirements: 3.4, 4.4_