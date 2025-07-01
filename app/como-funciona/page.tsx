import Header from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MessageCircle, 
  Brain, 
  FileCheck, 
  Users,
  ArrowRight,
  CheckCircle,
  Scale,
  Clock,
  Shield
} from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Faça sua Pergunta",
    description: "Digite sua dúvida sobre Registro de Imóveis no chat do Dante AI.",
    details: ["Interface intuitiva", "Perguntas em linguagem natural", "Disponível 24/7"]
  },
  {
    icon: Brain,
    title: "IA Analisa e Processa",
    description: "Dante analisa sua pergunta e consulta sua base de conhecimento especializada em RI.",
    details: ["Análise contextual", "Base de dados atualizada", "Processamento em segundos"]
  },
  {
    icon: FileCheck,
    title: "Resposta Fundamentada",
    description: "Receba uma resposta objetiva, precisa e baseada na legislação vigente.",
    details: ["Legislação aplicável", "Procedimentos detalhados", "Referências normativas"]
  },
  {
    icon: Users,
    title: "Aplicação Prática",
    description: "Implemente as orientações em seu cartório com segurança jurídica e conformidade legal.",
    details: ["Procedimentos seguros", "Prevenção de erros", "Padronização de processos"]
  }
];

const benefits = [
  {
    icon: Clock,
    title: "Respostas Instantâneas",
    description: "Obtenha informações precisas em segundos, sem necessidade de consultar múltiplas fontes."
  },
  {
    icon: Scale,
    title: "Base Legal Sólida",
    description: "Todas as respostas são fundamentadas na legislação federal, estadual e normas do CNJ."
  },
  {
    icon: Shield,
    title: "Segurança Jurídica",
    description: "Procedimentos validados que garantem conformidade e reduzem riscos operacionais."
  }
];

export default function ComoFuncionaPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-neutral-50 to-white pt-20 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-6">
              Como funciona
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
              Como funciona o{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Dante AI
              </span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-neutral-600">
              Descubra como nossa IA especializada pode revolucionar seu trabalho 
              no Registro de Imóveis.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500 text-white font-bold text-lg">
                      {index + 1}
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-orange-600">
                      <step.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-lg text-neutral-600 mb-8">
                    {step.description}
                  </p>

                  <ul className="space-y-3">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className={`mt-12 lg:mt-0 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <Card className="overflow-hidden shadow-2xl">
                    <CardContent className="p-0">
                      <div className="aspect-[4/3] bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center">
                        <div className="text-center text-neutral-400">
                          <step.icon className="h-16 w-16 mx-auto mb-4 opacity-50" />
                          <p className="text-sm">Demonstração</p>
                          <p className="text-xs mt-1">{step.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Principais Vantagens
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Por que escolher Dante AI para seu cartório
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="border-0 bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 mb-6">
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

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Pronto para experimentar?
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Comece a usar Dante AI hoje mesmo e transforme seu trabalho no Registro de Imóveis
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-neutral-900 text-white hover:bg-neutral-800">
                Comece grátis
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