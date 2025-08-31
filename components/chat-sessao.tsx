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
  Copy,
  ThumbsUp,
  ThumbsDown,
  Loader2,
  Plus,
  MessageSquare,
  Trash2
} from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  isLoading?: boolean;
}

interface ChatSession {
  id: string;
  title: string;
  messages: Message[];
  createdAt: Date;
  lastActivity: Date;
}

interface ChatSessaoProps {
  className?: string;
}

export default function ChatSessao({ className = "" }: ChatSessaoProps) {
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Inicializar com uma sessão padrão
  useEffect(() => {
    const defaultSession: ChatSession = {
      id: 'default',
      title: 'Nova Conversa',
      messages: [{
        id: '1',
        content: 'Olá! Sou Dante, uma IA especializada exclusivamente em Registro de Imóveis. Como posso ajudar você hoje? Você pode me perguntar sobre procedimentos registrais, qualificação de títulos, legislação aplicável ou qualquer dúvida técnica sobre RI.',
        sender: 'bot',
        timestamp: new Date()
      }],
      createdAt: new Date(),
      lastActivity: new Date()
    };
    
    setSessions([defaultSession]);
    setCurrentSessionId('default');
  }, []);

  const currentSession = sessions.find(s => s.id === currentSessionId);

  const sendToLangflow = async (message: string): Promise<string> => {
    try {
      const response = await fetch('https://lf142.prompt-master.org/api/v1/run/1060b727-10e5-4597-aa26-4662f5bccd46?stream=false', {
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
      
      if (data && data.outputs && data.outputs.length > 0) {
        const output = data.outputs[0];
        if (output.outputs && output.outputs.length > 0) {
          const messageOutput = output.outputs[0];
          if (messageOutput.results && messageOutput.results.message) {
            return messageOutput.results.message.text || messageOutput.results.message;
          }
        }
      }
      
      return data.result || data.response || data.output || 'Desculpe, não consegui processar sua mensagem. Tente novamente.';
      
    } catch (error) {
      console.error('Erro ao comunicar com Langflow:', error);
      return 'Desculpe, ocorreu um erro ao processar sua mensagem. Verifique sua conexão e tente novamente.';
    }
  };

  const createNewSession = () => {
    const newSession: ChatSession = {
      id: Date.now().toString(),
      title: 'Nova Conversa',
      messages: [{
        id: '1',
        content: 'Olá! Sou Dante, uma IA especializada exclusivamente em Registro de Imóveis. Como posso ajudar você hoje?',
        sender: 'bot',
        timestamp: new Date()
      }],
      createdAt: new Date(),
      lastActivity: new Date()
    };
    
    setSessions(prev => [newSession, ...prev]);
    setCurrentSessionId(newSession.id);
  };

  const deleteSession = (sessionId: string) => {
    if (sessions.length <= 1) return; // Não deletar se for a única sessão
    
    setSessions(prev => prev.filter(s => s.id !== sessionId));
    
    if (currentSessionId === sessionId) {
      const remainingSessions = sessions.filter(s => s.id !== sessionId);
      setCurrentSessionId(remainingSessions[0]?.id || null);
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading || !currentSessionId) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    // Atualizar sessão atual com nova mensagem
    setSessions(prev => prev.map(session => 
      session.id === currentSessionId 
        ? {
            ...session,
            messages: [...session.messages, userMessage],
            lastActivity: new Date(),
            title: session.title === 'Nova Conversa' ? inputValue.slice(0, 30) + '...' : session.title
          }
        : session
    ));

    setInputValue('');
    setIsLoading(true);

    // Adicionar mensagem de loading
    const loadingMessage: Message = {
      id: (Date.now() + 1).toString(),
      content: '',
      sender: 'bot',
      timestamp: new Date(),
      isLoading: true
    };

    setSessions(prev => prev.map(session => 
      session.id === currentSessionId 
        ? { ...session, messages: [...session.messages, loadingMessage] }
        : session
    ));

    try {
      const botResponse = await sendToLangflow(inputValue);
      
      // Remover loading e adicionar resposta
      setSessions(prev => prev.map(session => 
        session.id === currentSessionId 
          ? {
              ...session,
              messages: session.messages.filter(msg => !msg.isLoading).concat({
                id: (Date.now() + 2).toString(),
                content: botResponse,
                sender: 'bot',
                timestamp: new Date()
              }),
              lastActivity: new Date()
            }
          : session
      ));
    } catch (error) {
      // Remover loading e adicionar erro
      setSessions(prev => prev.map(session => 
        session.id === currentSessionId 
          ? {
              ...session,
              messages: session.messages.filter(msg => !msg.isLoading).concat({
                id: (Date.now() + 2).toString(),
                content: 'Desculpe, ocorreu um erro ao processar sua mensagem. Tente novamente.',
                sender: 'bot',
                timestamp: new Date()
              })
            }
          : session
      ));
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className={`flex h-[600px] bg-white border border-neutral-200 rounded-lg shadow-lg ${className}`}>
      {/* Sidebar */}
      <div className="w-80 border-r border-neutral-200 flex flex-col">
        {/* Header do Sidebar */}
        <div className="p-4 border-b border-neutral-200">
          <Button 
            onClick={createNewSession}
            className="w-full bg-orange-500 text-white hover:bg-orange-600"
          >
            <Plus className="mr-2 h-4 w-4" />
            Novo Chat
          </Button>
        </div>

        {/* Lista de Sessões */}
        <div className="flex-1 overflow-y-auto p-2">
          {sessions.map((session) => (
            <div
              key={session.id}
              className={`p-3 mb-2 rounded-lg cursor-pointer transition-colors group ${
                currentSessionId === session.id 
                  ? 'bg-orange-50 border border-orange-200' 
                  : 'hover:bg-neutral-50'
              }`}
              onClick={() => setCurrentSessionId(session.id)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center mb-1">
                    <MessageSquare className="h-4 w-4 text-neutral-500 mr-2 flex-shrink-0" />
                    <span className="text-sm font-medium text-neutral-900 truncate">
                      {session.title}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500">
                    {session.lastActivity.toLocaleDateString()} às {session.lastActivity.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
                {sessions.length > 1 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 h-6 w-6 p-0 text-neutral-400 hover:text-red-500"
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteSession(session.id);
                    }}
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Área do Chat */}
      <div className="flex-1 flex flex-col">
        {currentSession && (
          <>
            {/* Header do Chat */}
            <CardHeader className="flex flex-row items-center justify-between p-4 border-b border-neutral-200">
              <div className="flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-orange-600">
                  <Scale className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900">
                    Dante AI - Registro de Imóveis
                  </h3>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-neutral-500">Especialista Online</span>
                  </div>
                </div>
              </div>
            </CardHeader>

            {/* Messages */}
            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
              {currentSession.messages.map((message) => (
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
                            <div className="prose prose-sm max-w-none">
                              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {message.content}
                              </ReactMarkdown>
                            </div>
                          ) : (
                            <p className="text-sm leading-relaxed whitespace-pre-wrap">
                              {message.content}
                            </p>
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
                  onClick={handleSendMessage}
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
      </div>
    </div>
  );
}