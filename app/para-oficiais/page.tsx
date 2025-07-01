import Header from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Scale, 
  Shield, 
  Clock, 
  Users,
  ArrowRight,
  CheckCircle,
  Gavel,
  FileText,
  Brain
} from "lucide-react";

const benefits = [
  {
    icon: Scale,
    title: "Decisões Fundamentadas",
    description: "Tome decisões registrais com base sólida na legislação vigente e jurisprudência atualizada.",
    features: ["Consulta rápida à legislação", "Análise de precedentes", "Orientação jurídica precisa"]
  },
  {
    icon: Shield,
    title: "Redução de Riscos",
    description: "Minimize riscos operacionais e jurídicos com validações automáticas e alertas preventivos.",
    features: ["Detecção de inconsistências", "Alertas de conformidade", "Prevenção de fraudes"]
  },
  {
    icon: Clock,
    title: "Agilidade Operacional",
    description: "Acelere processos de qualificação e registro com análises instantâneas e precisas.",
    features: ["Qualificação automática", "Análise documental rápida", "Relatórios instantâneos"]
  },
  {
    icon: Users,
    title: "Gestão de Equipe",
    description: "Padronize procedimentos e capacite sua equipe com orientações consistentes.",
    features: ["Procedimentos padronizados", "Treinamento contínuo", "Supervisão eficiente"]
  }
];

const useCases = [
  {
    title: "Qualificação de Títulos",
    description: "Análise automática de títulos para identificar vícios e requisitos pendentes",
    time: "Redução de 80% no tempo"
  },
  {
    title: "Consulta Legislativa",
    description: "Acesso instantâneo à legislação aplicável e interpretação jurídica",
    time: "Resposta em segundos"
  },
  {
    title: "Análise de Risco",
    description: "Avaliação de riscos em operações complexas e orientação preventiva",
    time: "Análise completa em minutos"
  },
  {
    title: "Supervisão de Atos",
    description: "Monitoramento e validação de atos praticados pela equipe",
    time: "Supervisão em tempo real"
  }
];

const testimonials = [
  {
    content: "O Dante AI transformou nossa rotina cartorária. A **segurança jurídica** que ele proporciona nas decisões é incomparável. Reduziu significativamente o tempo de qualificação.",
    author: "Dr. Roberto Silva",
    role: "Oficial de Registro",
    company: "1º RI de Florianópolis"
  },
  {
    content: "Como oficial, preciso de **agilidade e precisão**. O Dante me permite tomar decisões fundamentadas rapidamente, com total confiança na base legal.",
    author: "Dra. Marina Costa",
    role: "Oficial de Registro",
    company: "2º RI de Joinville"
  }
];

export default function ParaOficiaisPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-neutral-50 to-white pt-20 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-6">
              Para Oficiais
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
              Dante AI para{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Oficiais de Registro
              </span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-neutral-600">
              Potencialize sua gestão cartorária com IA especializada. Tome decisões mais rápidas 
              e seguras com base na legislação vigente.
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

      {/* Use Cases Section */}
      <section className="py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Casos de Uso para Oficiais
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Como Dante AI pode otimizar sua rotina cartorária
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {useCases.map((useCase) => (
              <Card key={useCase.title} className="border-0 bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-neutral-900">
                      {useCase.title}
                    </h3>
                    <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                      {useCase.time}
                    </Badge>
                  </div>
                  <p className="text-neutral-600 text-sm">
                    {useCase.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              O que dizem os Oficiais
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Depoimentos de oficiais que já utilizam Dante AI
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-neutral-200 hover:border-orange-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <blockquote className="text-neutral-600 mb-6 leading-relaxed">
                    <span className="text-2xl text-orange-500 font-serif leading-none">"</span>
                    <span 
                      className="text-[15px] leading-6 [&_strong]:font-semibold [&_strong]:text-neutral-800"
                      dangerouslySetInnerHTML={{ 
                        __html: testimonial.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                      }}
                    />
                    <span className="text-2xl text-orange-500 font-serif leading-none">"</span>
                  </blockquote>

                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                      <Gavel className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-neutral-900">
                        {testimonial.author}
                      </div>
                      <div className="text-xs text-neutral-500">
                        {testimonial.role} • {testimonial.company}
                      </div>
                    </div>
                  </div>
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
              Pronto para modernizar seu cartório?
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Experimente Dante AI e veja como pode transformar sua gestão cartorária
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-neutral-900 text-white hover:bg-neutral-800">
                Começar teste grátis
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