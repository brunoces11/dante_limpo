import Header from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  FileText, 
  Search, 
  Clock, 
  BookOpen,
  ArrowRight,
  CheckCircle,
  Users,
  Brain,
  Shield
} from "lucide-react";

const benefits = [
  {
    icon: FileText,
    title: "Análise Documental Eficiente",
    description: "Analise documentos rapidamente com orientações precisas sobre conformidade e requisitos.",
    features: ["Verificação automática", "Lista de pendências", "Orientações de correção"]
  },
  {
    icon: Search,
    title: "Consulta Rápida",
    description: "Acesse informações sobre procedimentos e legislação de forma instantânea.",
    features: ["Base de conhecimento completa", "Busca inteligente", "Respostas contextualizadas"]
  },
  {
    icon: Clock,
    title: "Produtividade Aumentada",
    description: "Reduza tempo gasto em pesquisas e consultas, focando no que realmente importa.",
    features: ["Respostas instantâneas", "Procedimentos padronizados", "Menos retrabalho"]
  },
  {
    icon: BookOpen,
    title: "Aprendizado Contínuo",
    description: "Desenvolva suas competências com orientações educativas e casos práticos.",
    features: ["Explicações detalhadas", "Casos de exemplo", "Capacitação constante"]
  }
];

const dailyTasks = [
  {
    icon: FileText,
    title: "Qualificação de Documentos",
    description: "Verificação de conformidade e identificação de pendências",
    time: "5 min → 1 min"
  },
  {
    icon: Search,
    title: "Consulta de Procedimentos",
    description: "Acesso rápido a informações sobre atos registrais",
    time: "15 min → 30 seg"
  },
  {
    icon: Users,
    title: "Atendimento ao Público",
    description: "Orientações precisas para dúvidas dos usuários",
    time: "10 min → 3 min"
  },
  {
    icon: Shield,
    title: "Verificação de Segurança",
    description: "Validação de autenticidade e prevenção de fraudes",
    time: "20 min → 5 min"
  }
];

const features = [
  {
    title: "Interface Intuitiva",
    description: "Chat simples e direto, sem necessidade de treinamento complexo"
  },
  {
    title: "Respostas Educativas",
    description: "Explicações que ajudam no aprendizado e desenvolvimento profissional"
  },
  {
    title: "Suporte 24/7",
    description: "Disponível sempre que precisar, mesmo fora do horário comercial"
  },
  {
    title: "Atualizações Automáticas",
    description: "Base de conhecimento sempre atualizada com mudanças na legislação"
  }
];

export default function ParaEscreventesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-neutral-50 to-white pt-20 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-6">
              Para Escreventes
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
              Dante AI para{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Escreventes
              </span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-neutral-600">
              Seu assistente inteligente para o dia a dia cartorário. Agilize processos, 
              esclareça dúvidas e aprenda continuamente com IA especializada.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {benefits.map((benefit, index) => (
              <div key={benefit.title} className="flex flex-col">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-neutral-900">
                    {benefit.title}
                  </h3>
                </div>
                
                <p className="text-lg text-neutral-600 mb-6">
                  {benefit.description}
                </p>

                <ul className="space-y-3">
                  {benefit.features.map((feature) => (
                    <li key={feature} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Tasks Section */}
      <section className="py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Otimize suas Tarefas Diárias
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Veja como Dante AI pode acelerar suas atividades rotineiras
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {dailyTasks.map((task) => (
              <Card key={task.title} className="border-0 bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 mb-4">
                    <task.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    {task.title}
                  </h3>
                  <p className="text-neutral-600 text-sm mb-4">
                    {task.description}
                  </p>
                  <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                    {task.time}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Desenvolvido para Escreventes
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Recursos pensados especificamente para suas necessidades
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="border-neutral-200 hover:border-orange-200 hover:shadow-md transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Example Section */}
      <section className="py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
                Exemplo Prático
              </h2>
              <p className="mt-6 text-lg leading-8 text-neutral-600">
                Veja como seria uma consulta típica ao Dante AI
              </p>
            </div>

            <Card className="overflow-hidden shadow-xl">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* User Question */}
                  <div className="flex justify-end">
                    <div className="bg-neutral-900 text-white rounded-lg p-4 max-w-md">
                      <p className="text-sm">
                        "Preciso registrar uma escritura de compra e venda, mas o CPF do vendedor está com dígito verificador diferente. Como proceder?"
                      </p>
                    </div>
                  </div>

                  {/* AI Response */}
                  <div className="flex justify-start">
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 max-w-2xl">
                      <div className="flex items-center space-x-2 mb-3">
                        <Brain className="h-4 w-4 text-orange-600" />
                        <span className="text-sm font-medium text-orange-600">Dante AI</span>
                      </div>
                      <p className="text-sm text-neutral-700 leading-relaxed">
                        Para divergência no CPF, você deve exigir a **retificação da escritura** antes do registro. 
                        Conforme art. 213 da Lei 6.015/73, documentos com vícios impedem o registro. 
                        Oriente o apresentante a retificar junto ao tabelião ou apresentar certidão da Receita Federal 
                        confirmando o número correto.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Comece a usar hoje mesmo
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Experimente Dante AI e transforme sua rotina de trabalho no cartório
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-neutral-900 text-white hover:bg-neutral-800">
                Começar grátis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Ver demonstração
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}