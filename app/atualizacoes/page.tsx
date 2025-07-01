import Header from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Zap, 
  Shield, 
  Brain, 
  FileText,
  ArrowRight,
  Calendar,
  Star,
  CheckCircle
} from "lucide-react";

const updates = [
  {
    version: "2.4.0",
    date: "15 de Janeiro, 2024",
    type: "major",
    title: "Nova Base Legal Integrada",
    description: "Integração completa com as últimas atualizações da legislação de Santa Catarina e normas do CNJ.",
    features: [
      "Provimento 88/2019 atualizado",
      "Novas resoluções CNJ integradas",
      "Jurisprudência TJSC atualizada",
      "Melhorias na precisão das respostas"
    ],
    icon: FileText
  },
  {
    version: "2.3.5",
    date: "8 de Janeiro, 2024",
    type: "minor",
    title: "Melhorias de Performance",
    description: "Otimizações significativas na velocidade de resposta e estabilidade da plataforma.",
    features: [
      "Tempo de resposta 40% mais rápido",
      "Maior estabilidade do sistema",
      "Otimização do processamento de consultas",
      "Melhor experiência do usuário"
    ],
    icon: Zap
  },
  {
    version: "2.3.0",
    date: "20 de Dezembro, 2023",
    type: "major",
    title: "Agentes Especializados",
    description: "Lançamento dos novos agentes de IA especializados em funções específicas do registro.",
    features: [
      "Agente de Validação de Títulos",
      "Agente de Análise Documental",
      "Agente Extrator de Entidades",
      "Interface unificada para todos os agentes"
    ],
    icon: Brain
  },
  {
    version: "2.2.8",
    date: "10 de Dezembro, 2023",
    type: "security",
    title: "Atualizações de Segurança",
    description: "Implementação de novas medidas de segurança e proteção de dados.",
    features: [
      "Criptografia end-to-end aprimorada",
      "Autenticação de dois fatores",
      "Logs de auditoria detalhados",
      "Conformidade LGPD atualizada"
    ],
    icon: Shield
  }
];

const roadmapItems = [
  {
    quarter: "Q1 2024",
    title: "IA Multimodal",
    description: "Capacidade de analisar documentos em PDF e imagens",
    status: "in-progress"
  },
  {
    quarter: "Q2 2024",
    title: "API Pública",
    description: "Lançamento da API para integrações com sistemas de cartório",
    status: "planned"
  },
  {
    quarter: "Q3 2024",
    title: "Mobile App",
    description: "Aplicativo móvel nativo para iOS e Android",
    status: "planned"
  },
  {
    quarter: "Q4 2024",
    title: "Analytics Avançado",
    description: "Dashboard com métricas e insights para cartórios",
    status: "planned"
  }
];

export default function AtualizacoesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-neutral-50 to-white pt-20 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-6">
              Atualizações
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
              Novidades do{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Dante AI
              </span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-neutral-600">
              Acompanhe as últimas atualizações, melhorias e novos recursos 
              da plataforma Dante AI.
            </p>
          </div>
        </div>
      </section>

      {/* Latest Update Highlight */}
      <section className="py-12 bg-orange-50 border-y border-orange-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Star className="h-5 w-5 text-orange-600" />
            <span className="text-sm font-medium text-orange-600">ÚLTIMA ATUALIZAÇÃO</span>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-neutral-900 mb-2">
              {updates[0].title} - v{updates[0].version}
            </h2>
            <p className="text-neutral-600 mb-4">
              {updates[0].description}
            </p>
            <Button className="bg-orange-500 text-white hover:bg-orange-600">
              Ver detalhes
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Updates Timeline */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Histórico de Atualizações
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Todas as melhorias e novos recursos implementados
            </p>
          </div>

          <div className="space-y-8">
            {updates.map((update, index) => (
              <Card key={update.version} className="border-neutral-200 hover:border-orange-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${
                      update.type === 'major' ? 'bg-blue-500' :
                      update.type === 'security' ? 'bg-red-500' :
                      'bg-green-500'
                    }`}>
                      <update.icon className="h-6 w-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <h3 className="text-xl font-semibold text-neutral-900">
                          {update.title}
                        </h3>
                        <Badge variant="secondary" className={
                          update.type === 'major' ? 'bg-blue-100 text-blue-800' :
                          update.type === 'security' ? 'bg-red-100 text-red-800' :
                          'bg-green-100 text-green-800'
                        }>
                          v{update.version}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center space-x-2 mb-4">
                        <Calendar className="h-4 w-4 text-neutral-400" />
                        <span className="text-sm text-neutral-500">{update.date}</span>
                      </div>
                      
                      <p className="text-neutral-600 mb-6">
                        {update.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {update.features.map((feature) => (
                          <div key={feature} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-neutral-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Preview */}
      <section className="py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Próximas Funcionalidades
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              O que está por vir no Dante AI
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {roadmapItems.map((item) => (
              <Card key={item.quarter} className="border-0 bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="text-xs">
                      {item.quarter}
                    </Badge>
                    <Badge variant={item.status === 'in-progress' ? 'default' : 'secondary'} className={
                      item.status === 'in-progress' 
                        ? 'bg-orange-100 text-orange-800' 
                        : 'bg-neutral-100 text-neutral-600'
                    }>
                      {item.status === 'in-progress' ? 'Em desenvolvimento' : 'Planejado'}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Ver roadmap completo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Fique sempre atualizado
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Receba notificações sobre novas funcionalidades e atualizações importantes
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-neutral-900 text-white hover:bg-neutral-800">
                Inscrever-se nas atualizações
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Ver todas as versões
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}