import Header from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  FileCheck, 
  FileText, 
  Search, 
  FileSearch,
  ArrowRight,
  CheckCircle,
  Scale,
  Brain,
  Settings,
  Sparkles
} from "lucide-react";

const agents = [
  {
    icon: FileCheck,
    title: "Agente de Validação de Títulos",
    description: "Analisa e valida títulos para registro, verificando conformidade com a legislação vigente.",
    features: ["Verificação automática de conformidade", "Análise de requisitos legais", "Relatório detalhado de pendências"],
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: FileText,
    title: "Agente para Análise de Documentos",
    description: "Examina documentos registrais identificando inconsistências, erros e requisitos pendentes de forma automatizada.",
    features: ["Análise completa de documentos", "Detecção automática de erros", "Sugestões de correção"],
    color: "from-green-500 to-green-600"
  },
  {
    icon: Search,
    title: "Agente Extrator de Entidades",
    description: "Extrai informações relevantes de documentos como nomes, CPFs, endereços, valores e datas automaticamente.",
    features: ["Extração automática de dados", "Estruturação de informações", "Validação cruzada de dados"],
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: FileSearch,
    title: "Análise de Contratos",
    description: "Analisa contratos imobiliários identificando cláusulas importantes e verificando conformidade legal.",
    features: ["Análise de cláusulas contratuais", "Verificação de conformidade", "Identificação de riscos"],
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: Settings,
    title: "Agentes Personalizados",
    description: "Crie agentes especializados para necessidades específicas do seu cartório com treinamento customizado.",
    features: ["Treinamento personalizado", "Fluxos de trabalho específicos", "Integração com sistemas internos"],
    color: "from-indigo-500 to-indigo-600",
    isCustom: true
  }
];

const benefits = [
  {
    icon: Brain,
    title: "IA Especializada",
    description: "Cada agente é treinado especificamente para sua função no contexto de Registro de Imóveis."
  },
  {
    icon: Scale,
    title: "Base Legal Sólida",
    description: "Todos os agentes operam com base na legislação federal, estadual e normas do CNJ aplicáveis."
  },
  {
    icon: CheckCircle,
    title: "Precisão Garantida",
    description: "Algoritmos validados que garantem alta precisão nas análises e validações registrais."
  }
];

export default function AgentesDeIAPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-neutral-50 to-white pt-20 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-6">
              Agentes de IA
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
              Agentes Especializados em{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Registro de Imóveis
              </span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-neutral-600">
              Cada agente é especializado em uma função específica do Registro de Imóveis, 
              oferecendo precisão e eficiência para seu cartório.
            </p>
          </div>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {agents.map((agent) => (
              <Card key={agent.title} className={`relative overflow-hidden border-neutral-200 hover:shadow-lg transition-all duration-300 cursor-pointer group ${
                agent.isCustom ? 'hover:border-indigo-200 ring-1 ring-indigo-100' : 'hover:border-orange-200'
              }`}>
                <CardContent className="p-8">
                  {agent.isCustom && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-indigo-100 text-indigo-800 text-xs">
                        <Sparkles className="h-3 w-3 mr-1" />
                        Novo
                      </Badge>
                    </div>
                  )}
                  
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${agent.color} mb-6`}>
                    <agent.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                    {agent.title}
                  </h3>
                  
                  <p className="text-neutral-600 mb-6">
                    {agent.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {agent.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-3">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-neutral-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button variant="outline" className={`w-full transition-colors ${
                    agent.isCustom 
                      ? 'group-hover:bg-indigo-50 group-hover:border-indigo-200 group-hover:text-indigo-600' 
                      : 'group-hover:bg-orange-50 group-hover:border-orange-200 group-hover:text-orange-600'
                  }`}>
                    {agent.isCustom ? 'Criar Agente' : 'Acessar Agente'}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Por que usar nossos Agentes de IA?
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Cada agente é desenvolvido com foco específico para maximizar eficiência e precisão
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="border-0 bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 mx-auto mb-6">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-neutral-600">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Agents Feature Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Card className="overflow-hidden border-indigo-200 bg-gradient-to-r from-indigo-50 to-purple-50">
              <CardContent className="p-12">
                <div className="text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-600 mx-auto mb-8">
                    <Settings className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                    Agentes Personalizados
                  </h2>
                  <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
                    Precisa de um agente específico para uma necessidade única do seu cartório? 
                    Criamos agentes personalizados treinados especificamente para seus fluxos de trabalho.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {[
                      { title: "Análise Específica", description: "Agentes para análises muito específicas do seu cartório" },
                      { title: "Integração Customizada", description: "Conecte com seus sistemas internos existentes" },
                      { title: "Treinamento Dedicado", description: "IA treinada com seus dados e procedimentos" }
                    ].map((feature) => (
                      <div key={feature.title} className="text-center">
                        <h3 className="font-semibold text-neutral-900 mb-2">{feature.title}</h3>
                        <p className="text-sm text-neutral-600">{feature.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-center gap-x-6">
                    <Button size="lg" className="bg-indigo-600 text-white hover:bg-indigo-700">
                      Solicitar Agente Personalizado
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="lg" className="border-indigo-200 text-indigo-600 hover:bg-indigo-50">
                      Falar com especialista
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Pronto para começar?
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Experimente nossos agentes especializados e transforme a eficiência do seu cartório
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-neutral-900 text-white hover:bg-neutral-800">
                Comece grátis
                <ArrowRight className="ml-2 h-4 w-4" />
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