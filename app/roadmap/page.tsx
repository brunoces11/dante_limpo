import Header from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle, 
  Clock, 
  Calendar, 
  Zap,
  ArrowRight,
  Star,
  Brain,
  Smartphone,
  BarChart3,
  Globe
} from "lucide-react";

const roadmapItems = [
  {
    quarter: "Q1 2024",
    status: "in-progress",
    items: [
      {
        title: "IA Multimodal",
        description: "Capacidade de analisar documentos em PDF, imagens e outros formatos",
        icon: Brain,
        priority: "high",
        progress: 75
      },
      {
        title: "Melhorias de Performance",
        description: "Otimização da velocidade de resposta e capacidade de processamento",
        icon: Zap,
        priority: "high",
        progress: 90
      },
      {
        title: "Interface Aprimorada",
        description: "Nova interface mais intuitiva e recursos de acessibilidade",
        icon: Star,
        priority: "medium",
        progress: 60
      }
    ]
  },
  {
    quarter: "Q2 2024",
    status: "planned",
    items: [
      {
        title: "API Pública",
        description: "Lançamento da API REST para integrações com sistemas de cartório",
        icon: Globe,
        priority: "high",
        progress: 0
      },
      {
        title: "Webhooks",
        description: "Sistema de notificações automáticas para eventos importantes",
        icon: Zap,
        priority: "medium",
        progress: 0
      },
      {
        title: "Relatórios Avançados",
        description: "Geração de relatórios detalhados sobre uso e performance",
        icon: BarChart3,
        priority: "medium",
        progress: 0
      }
    ]
  },
  {
    quarter: "Q3 2024",
    status: "planned",
    items: [
      {
        title: "Aplicativo Mobile",
        description: "App nativo para iOS e Android com funcionalidades completas",
        icon: Smartphone,
        priority: "high",
        progress: 0
      },
      {
        title: "IA Conversacional Avançada",
        description: "Capacidades de conversação mais naturais e contextuais",
        icon: Brain,
        priority: "high",
        progress: 0
      },
      {
        title: "Integração com ERPs",
        description: "Conectores para principais sistemas de gestão cartorária",
        icon: Globe,
        priority: "medium",
        progress: 0
      }
    ]
  },
  {
    quarter: "Q4 2024",
    status: "planned",
    items: [
      {
        title: "Analytics Preditivo",
        description: "Insights e previsões baseadas em dados históricos",
        icon: BarChart3,
        priority: "medium",
        progress: 0
      },
      {
        title: "Automação de Processos",
        description: "Automatização de tarefas rotineiras do cartório",
        icon: Zap,
        priority: "high",
        progress: 0
      },
      {
        title: "Marketplace de Integrações",
        description: "Loja de integrações e plugins desenvolvidos pela comunidade",
        icon: Star,
        priority: "low",
        progress: 0
      }
    ]
  }
];

const completedFeatures = [
  {
    title: "Agentes Especializados",
    description: "Sistema de agentes de IA para funções específicas",
    completedDate: "Dezembro 2023"
  },
  {
    title: "Base Legal Completa",
    description: "Integração com toda legislação de RI/SC",
    completedDate: "Janeiro 2024"
  },
  {
    title: "Chat Inteligente",
    description: "Interface de chat com IA conversacional",
    completedDate: "Novembro 2023"
  },
  {
    title: "Suporte Multi-usuário",
    description: "Gestão de equipes e permissões",
    completedDate: "Outubro 2023"
  }
];

export default function RoadmapPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-neutral-50 to-white pt-20 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-6">
              Roadmap
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
              Futuro do{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Dante AI
              </span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-neutral-600">
              Acompanhe nossos planos de desenvolvimento e veja o que está por vir 
              na evolução da IA para Registro de Imóveis.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Overview */}
      <section className="py-12 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <Card className="border-0 bg-white shadow-sm">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">12</div>
                <div className="text-sm text-neutral-600">Funcionalidades Concluídas</div>
              </CardContent>
            </Card>
            <Card className="border-0 bg-white shadow-sm">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-orange-600 mb-2">3</div>
                <div className="text-sm text-neutral-600">Em Desenvolvimento</div>
              </CardContent>
            </Card>
            <Card className="border-0 bg-white shadow-sm">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">9</div>
                <div className="text-sm text-neutral-600">Planejadas</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Roadmap Timeline */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Cronograma de Desenvolvimento
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Nosso plano detalhado para os próximos trimestres
            </p>
          </div>

          <div className="space-y-12">
            {roadmapItems.map((quarter) => (
              <div key={quarter.quarter} className="relative">
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${
                    quarter.status === 'in-progress' ? 'bg-orange-500' : 'bg-neutral-300'
                  }`}>
                    {quarter.status === 'in-progress' ? (
                      <Clock className="h-6 w-6 text-white" />
                    ) : (
                      <Calendar className="h-6 w-6 text-white" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-900">
                      {quarter.quarter}
                    </h3>
                    <Badge variant={quarter.status === 'in-progress' ? 'default' : 'secondary'} className={
                      quarter.status === 'in-progress' 
                        ? 'bg-orange-100 text-orange-800' 
                        : 'bg-neutral-100 text-neutral-600'
                    }>
                      {quarter.status === 'in-progress' ? 'Em desenvolvimento' : 'Planejado'}
                    </Badge>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3 ml-16">
                  {quarter.items.map((item) => (
                    <Card key={item.title} className="border-neutral-200 hover:border-orange-200 hover:shadow-md transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                            item.priority === 'high' ? 'bg-red-500' :
                            item.priority === 'medium' ? 'bg-yellow-500' :
                            'bg-green-500'
                          }`}>
                            <item.icon className="h-4 w-4 text-white" />
                          </div>
                          <Badge variant="secondary" className={
                            item.priority === 'high' ? 'bg-red-100 text-red-800' :
                            item.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-green-100 text-green-800'
                          }>
                            {item.priority === 'high' ? 'Alta' : item.priority === 'medium' ? 'Média' : 'Baixa'}
                          </Badge>
                        </div>
                        
                        <h4 className="text-lg font-semibold text-neutral-900 mb-3">
                          {item.title}
                        </h4>
                        
                        <p className="text-neutral-600 text-sm mb-4">
                          {item.description}
                        </p>

                        {quarter.status === 'in-progress' && item.progress > 0 && (
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-neutral-500">Progresso</span>
                              <span className="text-neutral-600">{item.progress}%</span>
                            </div>
                            <div className="w-full bg-neutral-200 rounded-full h-2">
                              <div 
                                className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${item.progress}%` }}
                              ></div>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Completed Features */}
      <section className="py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Funcionalidades Concluídas
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              O que já foi entregue e está disponível
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {completedFeatures.map((feature) => (
              <Card key={feature.title} className="border-0 bg-white shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                      Concluído
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 text-sm mb-3">
                    {feature.description}
                  </p>
                  <p className="text-xs text-neutral-500">
                    {feature.completedDate}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Sua opinião importa
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Ajude-nos a priorizar funcionalidades e melhorias que realmente fazem diferença
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-neutral-900 text-white hover:bg-neutral-800">
                Sugerir funcionalidade
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Votar em prioridades
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}