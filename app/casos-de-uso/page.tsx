import Header from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  FileText, 
  Search, 
  CheckCircle, 
  Clock,
  ArrowRight,
  Users,
  Building,
  Scale,
  Shield,
  Zap,
  BarChart3
} from "lucide-react";

const useCases = [
  {
    category: "Qualificação Registral",
    icon: FileText,
    description: "Análise e validação de documentos para registro",
    cases: [
      {
        title: "Escritura de Compra e Venda",
        description: "Verificação de conformidade e requisitos para registro",
        time: "5 min → 30 seg",
        complexity: "Média"
      },
      {
        title: "Formal de Partilha",
        description: "Análise de documentos de inventário e partilha",
        time: "15 min → 2 min",
        complexity: "Alta"
      },
      {
        title: "Carta de Adjudicação",
        description: "Validação de documentos de execução judicial",
        time: "10 min → 1 min",
        complexity: "Alta"
      }
    ]
  },
  {
    category: "Procedimentos Especiais",
    icon: Scale,
    description: "Orientações para atos registrais complexos",
    cases: [
      {
        title: "Usucapião Extrajudicial",
        description: "Procedimento completo de usucapião administrativa",
        time: "2 horas → 30 min",
        complexity: "Muito Alta"
      },
      {
        title: "Retificação de Registro",
        description: "Correção de dados no registro imobiliário",
        time: "45 min → 10 min",
        complexity: "Alta"
      },
      {
        title: "Incorporação Imobiliária",
        description: "Registro de empreendimentos imobiliários",
        time: "1 hora → 20 min",
        complexity: "Muito Alta"
      }
    ]
  },
  {
    category: "Consultas Legislativas",
    icon: Search,
    description: "Esclarecimentos sobre legislação aplicável",
    cases: [
      {
        title: "Interpretação de Normas CNJ",
        description: "Consulta a provimentos e resoluções",
        time: "30 min → 1 min",
        complexity: "Média"
      },
      {
        title: "Legislação Estadual SC",
        description: "Normas específicas de Santa Catarina",
        time: "20 min → 30 seg",
        complexity: "Baixa"
      },
      {
        title: "Jurisprudência TJSC",
        description: "Consulta a decisões do tribunal",
        time: "45 min → 2 min",
        complexity: "Alta"
      }
    ]
  }
];

const benefits = [
  {
    icon: Clock,
    title: "Redução de Tempo",
    description: "Até 90% menos tempo gasto em pesquisas e consultas",
    metric: "90%"
  },
  {
    icon: Shield,
    title: "Maior Segurança",
    description: "Redução significativa de erros e retrabalho",
    metric: "85%"
  },
  {
    icon: Users,
    title: "Produtividade",
    description: "Aumento na capacidade de atendimento",
    metric: "150%"
  },
  {
    icon: BarChart3,
    title: "Eficiência",
    description: "Melhoria nos processos cartorários",
    metric: "200%"
  }
];

const testimonials = [
  {
    content: "Com o Dante AI, conseguimos **reduzir drasticamente** o tempo de qualificação. O que antes levava horas, agora resolvemos em minutos.",
    author: "Dra. Fernanda Santos",
    role: "Oficial de Registro",
    company: "3º RI de Florianópolis"
  },
  {
    content: "A **precisão das orientações** sobre procedimentos complexos como usucapião é impressionante. Ganho muito tempo e segurança.",
    author: "Dr. Paulo Oliveira",
    role: "Oficial de Registro", 
    company: "1º RI de Blumenau"
  }
];

export default function CasosDeUsoPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-neutral-50 to-white pt-20 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-6">
              Casos de Uso
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
              Casos Práticos de{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Aplicação
              </span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-neutral-600">
              Veja como o Dante AI resolve problemas reais do dia a dia cartorário, 
              com exemplos práticos e resultados mensuráveis.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases by Category */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {useCases.map((category) => (
              <div key={category.category}>
                <div className="flex items-center space-x-3 mb-12">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500">
                    <category.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-neutral-900">
                      {category.category}
                    </h2>
                    <p className="text-neutral-600">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                  {category.cases.map((useCase) => (
                    <Card key={useCase.title} className="border-neutral-200 hover:border-orange-200 hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-lg font-semibold text-neutral-900">
                            {useCase.title}
                          </h3>
                          <Badge variant="secondary" className={
                            useCase.complexity === 'Muito Alta' ? 'bg-red-100 text-red-800' :
                            useCase.complexity === 'Alta' ? 'bg-orange-100 text-orange-800' :
                            useCase.complexity === 'Média' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-green-100 text-green-800'
                          }>
                            {useCase.complexity}
                          </Badge>
                        </div>
                        
                        <p className="text-neutral-600 text-sm mb-6">
                          {useCase.description}
                        </p>

                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-neutral-500">Tempo economizado:</span>
                            <Badge variant="secondary" className="bg-green-100 text-green-800">
                              {useCase.time}
                            </Badge>
                          </div>
                        </div>

                        <Button variant="outline" className="w-full mt-6 group">
                          Ver exemplo detalhado
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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

      {/* Benefits Section */}
      <section className="py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Resultados Comprovados
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Métricas reais de cartórios que utilizam Dante AI
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="border-0 bg-white shadow-sm text-center">
                <CardContent className="p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 mx-auto mb-6">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    {benefit.metric}
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Depoimentos Reais
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              O que dizem os profissionais que usam Dante AI
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
                      <Scale className="h-6 w-6 text-white" />
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
              Pronto para ver os resultados?
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Experimente Dante AI e comprove a eficiência em seu cartório
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