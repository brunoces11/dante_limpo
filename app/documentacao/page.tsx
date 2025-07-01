import Header from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  BookOpen, 
  FileText, 
  Code, 
  Video,
  ArrowRight,
  ExternalLink,
  Search,
  Download
} from "lucide-react";

const docSections = [
  {
    category: "Primeiros Passos",
    icon: BookOpen,
    items: [
      { title: "Guia de Início Rápido", description: "Como começar a usar Dante AI em 5 minutos", type: "guide" },
      { title: "Configuração Inicial", description: "Configure sua conta e preferências", type: "setup" },
      { title: "Primeiro Chat", description: "Faça sua primeira pergunta ao Dante", type: "tutorial" },
      { title: "Dicas de Uso", description: "Melhores práticas para obter respostas precisas", type: "tips" }
    ]
  },
  {
    category: "Manual do Usuário",
    icon: FileText,
    items: [
      { title: "Interface do Chat", description: "Navegue pela interface de forma eficiente", type: "interface" },
      { title: "Tipos de Consulta", description: "Diferentes formas de fazer perguntas", type: "queries" },
      { title: "Interpretação de Respostas", description: "Como interpretar e aplicar as respostas", type: "interpretation" },
      { title: "Histórico de Conversas", description: "Gerencie e organize suas consultas", type: "history" }
    ]
  },
  {
    category: "API e Integrações",
    icon: Code,
    items: [
      { title: "API Reference", description: "Documentação completa da API REST", type: "api" },
      { title: "Webhooks", description: "Configure notificações automáticas", type: "webhooks" },
      { title: "SDKs", description: "Bibliotecas para diferentes linguagens", type: "sdk" },
      { title: "Exemplos de Código", description: "Implementações práticas e casos de uso", type: "examples" }
    ]
  },
  {
    category: "Tutoriais em Vídeo",
    icon: Video,
    items: [
      { title: "Visão Geral da Plataforma", description: "Tour completo pelas funcionalidades", type: "video" },
      { title: "Casos Práticos", description: "Exemplos reais de uso no cartório", type: "video" },
      { title: "Dicas Avançadas", description: "Técnicas para usuários experientes", type: "video" },
      { title: "Solução de Problemas", description: "Como resolver problemas comuns", type: "video" }
    ]
  }
];

const quickLinks = [
  { title: "Perguntas Frequentes", href: "/faq", icon: BookOpen },
  { title: "Base Legal", href: "/base-legal", icon: FileText },
  { title: "Suporte Técnico", href: "/suporte", icon: Search },
  { title: "Downloads", href: "/downloads", icon: Download }
];

export default function DocumentacaoPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-neutral-50 to-white pt-20 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-6">
              Documentação
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
              Central de{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Documentação
              </span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-neutral-600">
              Tudo que você precisa saber para usar Dante AI de forma eficiente. 
              Guias, tutoriais, API e muito mais.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((link) => (
              <Card key={link.title} className="border-neutral-200 hover:border-orange-200 hover:shadow-md transition-all duration-300 cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500">
                      <link.icon className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-medium text-neutral-900">{link.title}</span>
                    <ExternalLink className="h-3 w-3 text-neutral-400 ml-auto" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {docSections.map((section) => (
              <div key={section.category}>
                <div className="flex items-center space-x-3 mb-8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500">
                    <section.icon className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">
                    {section.category}
                  </h2>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {section.items.map((item) => (
                    <Card key={item.title} className="border-neutral-200 hover:border-orange-200 hover:shadow-md transition-all duration-300 cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-lg font-semibold text-neutral-900">
                            {item.title}
                          </h3>
                          {item.type === 'video' && <Video className="h-4 w-4 text-orange-500" />}
                          {item.type === 'api' && <Code className="h-4 w-4 text-blue-500" />}
                          {item.type === 'guide' && <BookOpen className="h-4 w-4 text-green-500" />}
                        </div>
                        <p className="text-neutral-600 text-sm mb-4">
                          {item.description}
                        </p>
                        <Button variant="ghost" size="sm" className="p-0 h-auto text-orange-500 hover:text-orange-600">
                          Acessar
                          <ExternalLink className="ml-1 h-3 w-3" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Não encontrou o que procura?
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Use nossa busca inteligente ou entre em contato com nosso suporte
            </p>
            
            <div className="mt-10">
              <div className="flex gap-3 max-w-md mx-auto">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
                  <input
                    type="text"
                    placeholder="Buscar na documentação..."
                    className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <Button className="bg-orange-500 text-white hover:bg-orange-600">
                  Buscar
                </Button>
              </div>
            </div>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button variant="outline" size="lg">
                Falar com suporte
              </Button>
              <Button variant="outline" size="lg">
                Solicitar documentação
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}