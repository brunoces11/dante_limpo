"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { 
  X, 
  Send, 
  Scale, 
  User, 
  Minimize2, 
  Maximize2,
  Copy,
  ThumbsUp,
  ThumbsDown,
  Loader2
} from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  isLoading?: boolean;
}

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMessage?: string;
}

export default function ChatModal({ isOpen, onClose, initialMessage = "" }: ChatModalProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Olá! Sou Dante, uma IA especializada exclusivamente em Registro de Imóveis. Como posso ajudar você hoje? Você pode me perguntar sobre procedimentos registrais, qualificação de títulos, legislação aplicável ou qualquer dúvida técnica sobre RI.',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [hasProcessedInitialMessage, setHasProcessedInitialMessage] = useState(false);

  const sendToLangflow = async (message: string): Promise<string> => {
    try {
      const response = await fetch('https://lf142.prompt-master.org/api/v1/run/a476cf1c-9390-4828-b119-47cd00e10a79?stream=false', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          input_value: message,
          output_type: "chat",
          input_type: "chat"
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      // Extrair a resposta do Langflow - ajuste conforme a estrutura real da resposta
      if (data && data.outputs && data.outputs.length > 0) {
        const output = data.outputs[0];
        if (output.outputs && output.outputs.length > 0) {
          const messageOutput = output.outputs[0];
          if (messageOutput.results && messageOutput.results.message) {
            return messageOutput.results.message.text || messageOutput.results.message;
          }
        }
      }
      
      // Fallback se a estrutura for diferente
      return data.result || data.response || data.output || 'Desculpe, não consegui processar sua mensagem. Tente novamente.';
      
    } catch (error) {
      console.error('Erro ao comunicar com Langflow:', error);
      return 'Desculpe, ocorreu um erro ao processar sua mensagem. Verifique sua conexão e tente novamente.';
    }
  };

  const handleSendMessage = async (messageToSend?: string) => {
    const messageText = messageToSend || inputValue;
    if (!messageText.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: messageText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    if (!messageToSend) {
      setInputValue('');
    }
    setIsLoading(true);

    // Adicionar mensagem de loading
    const loadingMessage: Message = {
      id: (Date.now() + 1).toString(),
      content: '',
      sender: 'bot',
      timestamp: new Date(),
      isLoading: true
    };
    setMessages(prev => [...prev, loadingMessage]);

    try {
      const botResponse = await sendToLangflow(messageText);
      
      // Remover mensagem de loading e adicionar resposta real
      setMessages(prev => {
        const withoutLoading = prev.filter(msg => !msg.isLoading);
        return [...withoutLoading, {
          id: (Date.now() + 2).toString(),
          content: botResponse,
          sender: 'bot',
          timestamp: new Date()
        }];
      });
    } catch (error) {
      // Remover mensagem de loading e adicionar mensagem de erro
      setMessages(prev => {
        const withoutLoading = prev.filter(msg => !msg.isLoading);
        return [...withoutLoading, {
          id: (Date.now() + 2).toString(),
          content: 'Desculpe, ocorreu um erro ao processar sua mensagem. Tente novamente.',
          sender: 'bot',
          timestamp: new Date()
        }];
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Process initial message when modal opens
  useEffect(() => {
    if (isOpen && initialMessage.trim() && !hasProcessedInitialMessage) {
      setHasProcessedInitialMessage(true);
      // Small delay to ensure modal is fully rendered
      setTimeout(() => {
        handleSendMessage(initialMessage);
      }, 100);
    }
    
    // Reset when modal closes
    if (!isOpen) {
      setHasProcessedInitialMessage(false);
      setInputValue("");
    }
  }, [isOpen, initialMessage, hasProcessedInitialMessage]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <Card className={`w-full max-w-[990px] bg-white shadow-2xl transition-all duration-300 ${
        isMinimized ? 'h-16' : 'h-[600px]'
      }`}>
        {/* Header */}
        <CardHeader className="flex flex-row items-center justify-between p-4 border-b border-neutral-200">
          <div className="flex items-center space-x-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-orange-600">
              <Scale className="h-4 w-4 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-neutral-900">
                Dante AI - RI
              </h3>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                <span className="text-xs text-neutral-500">Especialista Online</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMinimized(!isMinimized)}
              className="h-8 w-8 p-0"
            >
              {isMinimized ? (
                <Maximize2 className="h-4 w-4" />
              ) : (
                <Minimize2 className="h-4 w-4" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        {!isMinimized && (
          <>
            {/* Messages */}
            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 h-[400px]">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-3 max-w-[85%] ${
                    message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}>
                    <div className={`flex h-8 w-8 items-center justify-center rounded-lg flex-shrink-0 ${
                      message.sender === 'user' 
                        ? 'bg-neutral-900' 
                        : 'bg-gradient-to-br from-orange-500 to-orange-600'
                    }`}>
                      {message.sender === 'user' ? (
                        <User className="h-4 w-4 text-white" />
                      ) : (
                        <Scale className="h-4 w-4 text-white" />
                      )}
                    </div>
                    
                    <div className={`rounded-lg p-3 ${
                      message.sender === 'user'
                        ? 'bg-neutral-900 text-white'
                        : 'bg-neutral-100 text-neutral-900'
                    }`}>
                      {message.isLoading ? (
                        <div className="flex items-center space-x-2">
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span className="text-sm">Analisando legislação...</span>
                        </div>
                      ) : (
                        <>
                          {message.sender === 'bot' ? (
                            <div className="prose prose-sm max-w-none prose-headings:text-neutral-900 prose-p:text-neutral-700 prose-strong:text-neutral-900 prose-code:text-orange-600 prose-code:bg-orange-50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-neutral-800 prose-pre:text-white prose-blockquote:border-orange-500 prose-blockquote:text-neutral-600 prose-ul:text-neutral-700 prose-ol:text-neutral-700 prose-li:text-neutral-700">
                              <ReactMarkdown 
                                remarkPlugins={[remarkGfm]}
                                components={{
                                  h1: ({children}) => <h1 className="text-xl font-bold text-neutral-900 mb-2">{children}</h1>,
                                  h2: ({children}) => <h2 className="text-lg font-semibold text-neutral-900 mb-2">{children}</h2>,
                                  h3: ({children}) => <h3 className="text-base font-medium text-neutral-900 mb-1">{children}</h3>,
                                  p: ({children}) => <p className="text-sm leading-relaxed text-neutral-700 mb-2 last:mb-0">{children}</p>,
                                  strong: ({children}) => <strong className="font-semibold text-neutral-900">{children}</strong>,
                                  em: ({children}) => <em className="italic text-neutral-700">{children}</em>,
                                  ul: ({children}) => <ul className="list-disc list-inside text-sm text-neutral-700 mb-2 space-y-1">{children}</ul>,
                                  ol: ({children}) => <ol className="list-decimal list-inside text-sm text-neutral-700 mb-2 space-y-1">{children}</ol>,
                                  li: ({children}) => <li className="text-sm text-neutral-700">{children}</li>,
                                  code: ({children}) => <code className="text-orange-600 bg-orange-50 px-1 py-0.5 rounded text-xs font-mono">{children}</code>,
                                  pre: ({children}) => <pre className="bg-neutral-800 text-white p-3 rounded-lg text-xs overflow-x-auto mb-2">{children}</pre>,
                                  blockquote: ({children}) => <blockquote className="border-l-4 border-orange-500 pl-3 text-neutral-600 italic mb-2">{children}</blockquote>,
                                  img: ({src, alt}) => <img src={src} alt={alt} className="max-w-full h-auto rounded-lg mb-2" />,
                                  a: ({href, children}) => <a href={href} className="text-orange-600 hover:text-orange-700 underline" target="_blank" rel="noopener noreferrer">{children}</a>
                                }}
                              >
                                {message.content}
                              </ReactMarkdown>
                            </div>
                          ) : (
                            <p className="text-sm leading-relaxed whitespace-pre-wrap text-white">{message.content}</p>
                          )}
                          <div className="flex items-center justify-between mt-2">
                            <span className={`text-xs ${
                              message.sender === 'user' ? 'text-neutral-300' : 'text-neutral-500'
                            }`}>
                              {message.timestamp.toLocaleTimeString([], { 
                                hour: '2-digit', 
                                minute: '2-digit' 
                              })}
                            </span>
                            
                            {message.sender === 'bot' && !message.isLoading && (
                              <div className="flex items-center space-x-1 ml-4">
                                <Button 
                                  variant="ghost" 
                                  size="sm" 
                                  className="h-6 w-6 p-0"
                                  onClick={() => copyToClipboard(message.content)}
                                >
                                  <Copy className="h-3 w-3" />
                                </Button>
                                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                                  <ThumbsUp className="h-3 w-3" />
                                </Button>
                                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                                  <ThumbsDown className="h-3 w-3" />
                                </Button>
                              </div>
                            )}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>

            {/* Input */}
            <div className="p-4 border-t border-neutral-200">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Digite sua pergunta sobre Registro de Imóveis..."
                  className="flex-1"
                  disabled={isLoading}
                />
                <Button
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim() || isLoading}
                  className="bg-orange-500 text-white hover:bg-orange-600"
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </Button>
              </div>
              
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary" className="text-xs">
                    ⚖️ Especialista RI
                  </Badge>
                  <span className="text-xs text-neutral-500">
                    Pressione Enter para enviar
                  </span>
                </div>
                <span className="text-xs text-neutral-400">
                  {inputValue.length}/500
                </span>
              </div>
            </div>
          </>
        )}
      </Card>
    </div>
  );
}