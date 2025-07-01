import Header from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  BookOpen, 
  Video, 
  MessageCircle, 
  Users, 
  Phone,
  Mail,
  ArrowRight,
  ExternalLink,
  Play,
  FileText,
  Scale,
  Clock
} from "lucide-react";

const supportOptions = [
  {
    category: "Documentação",
    icon: BookOpen,
    items: [
      { title: "Guia de Início Rápido", description: "Como começar a usar Dante AI em 5 minutos", type: "guide" },
      { title: "Manual do Usuário", description: "Documentação completa da plataforma", type: "docs" },
      { title: "Legislação de Referência", description: "Base legal utilizada pelo Dante AI", type: "legal" },
      { title: "FAQ - Perguntas Frequentes", description: "Respostas para dúvidas comuns", type: "faq" }
    ]
  },
  {
    category: "Tutoriais",
    icon: Video,
    items: [
      { title: "Primeiros Passos com Dante AI", description: "Tutorial em vídeo para iniciantes", type: "video" },
      { title: "Casos Práticos de Uso", description: "Exemplos reais de aplicação", type: "video" },
      { title: "Qualificação Registral", description: "Como usar Dante para análise documental", type: "video" },
      { title: "Interpretação Legal", description: "Consultando legislação com IA", type: "video" }
    ]
  },
  {
    category: "Suporte Técnico",
    icon: MessageCircle,
    items: [
      { title: "Chat ao Vivo", description: "Suporte em tempo real durante horário comercial", type: "chat" },
      { title: "Ticket de Suporte", description: "Abra um chamado para questões específicas", type: "ticket" },
      { title: "Base de Conhecimento", description: "Artigos e soluções para problemas comuns", type: "kb" },
      { title: "Atualizações do Sistema", description: "Novidades e melhorias da plataforma", type: "updates" }
    ]
  }
];

const contactMethods = [
  {
    icon: MessageCircle,
    title: "Chat ao Vivo",
    description: "Suporte instantâneo durante horário comercial",
    availability: "Seg-Sex: 8h às 18h",
    action: "Iniciar chat"
  },
  {
    icon: Mail,
    title: "Email",
    description: "Envie sua dúvida por email e receba resposta em até 24h",
    availability: "Resposta em até 24h",
    action: "Enviar email"
  },
  {
    icon: Phone,
    title: "Telefone",
    description: "Fale diretamente com nossa equipe especializada",
    availability: "Seg-Sex: 8h às 18h",
    action: "Ligar agora"
  }
];

const legalResources = [
  {
    title: "Lei de Registros Públicos",
    description: "Lei 6.015/73 e suas atualizações",
    category: "Federal"
  },
  {
    title: "Código Civil",
    description: "Dispositivos aplicáveis ao Registro de Imóveis",
    category: "Federal"
  },
  {
    title: "Normas do CNJ",
    description: "Provimentos e resoluções do Conselho Nacional de Justiça",
    category: "CNJ"
  },
  {
    title: "Legislação Estadual SC",
    description: "Normas específicas de Santa Catarina",
    category: "Estadual"
  }
];

export default function SuportePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-neutral-50 to-white pt-20 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-6">
              Suporte
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
              Central de{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Suporte
              </span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-neutral-600">
              Encontre respostas, tutoriais e suporte especializado para maximizar 
              o uso do Dante AI em seu cartório.
            </p>
          </div>
        </div>
      </section>

      {/* Support Options Grid */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {supportOptions.map((category) => (
              <div key={category.category}>
                <div className="flex items-center space-x-3 mb-8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500">
                    <category.icon className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">
                    {category.category}
                  </h2>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {category.items.map((item) => (
                    <Card key={item.title} className="border-neutral-200 hover:border-orange-200 hover:shadow-md transition-all duration-300 cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-lg font-semibold text-neutral-900">
                            {item.title}
                          </h3>
                          {item.type === 'video' && <Play className="h-4 w-4 text-orange-500" />}
                          {item.type === 'docs' && <BookOpen className="h-4 w-4 text-blue-500" />}
                          {item.type === 'legal' && <Scale className="h-4 w-4 text-purple-500" />}
                          {item.type === 'chat' && <MessageCircle className="h-4 w-4 text-green-500" />}
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

      {/* Contact Methods */}
      <section className="py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Fale Conosco
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Nossa equipe especializada está pronta para ajudar
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {contactMethods.map((method) => (
              <Card key={method.title} className="border-0 bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 mx-auto mb-6">
                    <method.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                    {method.title}
                  </h3>
                  <p className="text-neutral-600 text-sm mb-4">
                    {method.description}
                  </p>
                  <div className="flex items-center justify-center space-x-1 text-xs text-neutral-500 mb-6">
                    <Clock className="h-3 w-3" />
                    <span>{method.availability}</span>
                  </div>
                  <Button className="w-full bg-neutral-900 text-white hover:bg-neutral-800">
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Resources */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Base Legal de Referência
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Legislação e normas utilizadas pelo Dante AI
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {legalResources.map((resource) => (
              <Card key={resource.title} className="border-neutral-200 hover:border-orange-200 hover:shadow-md transition-all duration-300 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Scale className="h-5 w-5 text-orange-500" />
                    <Badge variant="secondary" className="text-xs">
                      {resource.category}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                    {resource.title}
                  </h3>
                  <p className="text-neutral-600 text-sm mb-4">
                    {resource.description}
                  </p>
                  <Button variant="ghost" size="sm" className="p-0 h-auto text-orange-500 hover:text-orange-600">
                    Consultar
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Não encontrou o que procura?
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Nossa equipe especializada está sempre pronta para ajudar
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-neutral-900 text-white hover:bg-neutral-800">
                <MessageCircle className="mr-2 h-4 w-4" />
                Falar com suporte
              </Button>
              <Button variant="outline" size="lg">
                Agendar demonstração
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}