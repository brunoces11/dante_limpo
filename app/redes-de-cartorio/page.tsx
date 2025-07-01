import Header from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Building2, 
  Users, 
  BarChart3, 
  Shield,
  ArrowRight,
  CheckCircle,
  Settings,
  Globe,
  Zap
} from "lucide-react";

const benefits = [
  {
    icon: Building2,
    title: "Gestão Centralizada",
    description: "Gerencie múltiplos cartórios com padrões unificados e controle centralizado de qualidade.",
    features: ["Dashboard unificado", "Relatórios consolidados", "Gestão de usuários"]
  },
  {
    icon: Users,
    title: "Padronização de Processos",
    description: "Garanta consistência nos procedimentos entre todos os cartórios da rede.",
    features: ["Procedimentos uniformes", "Treinamento padronizado", "Qualidade consistente"]
  },
  {
    icon: BarChart3,
    title: "Analytics Avançado",
    description: "Monitore performance, produtividade e qualidade com métricas detalhadas.",
    features: ["Métricas em tempo real", "Comparativos de performance", "Insights acionáveis"]
  },
  {
    icon: Shield,
    title: "Compliance Corporativo",
    description: "Mantenha todos os cartórios em conformidade com regulamentações e melhores práticas.",
    features: ["Auditoria automática", "Alertas de conformidade", "Relatórios de compliance"]
  }
];

const features = [
  {
    icon: Settings,
    title: "Configuração Flexível",
    description: "Adapte configurações específicas para cada cartório mantendo padrões corporativos"
  },
  {
    icon: Globe,
    title: "Acesso Remoto",
    description: "Monitore e gerencie todos os cartórios remotamente com segurança"
  },
  {
    icon: Zap,
    title: "Escalabilidade",
    description: "Adicione novos cartórios facilmente sem comprometer a performance"
  },
  {
    icon: Users,
    title: "Suporte Dedicado",
    description: "Gerente de conta exclusivo e suporte prioritário para redes"
  }
];

const plans = [
  {
    name: "Rede Pequena",
    cartories: "3-10 cartórios",
    price: "R$ 299",
    features: [
      "Dashboard centralizado",
      "Relatórios básicos",
      "Suporte por email",
      "Treinamento online"
    ]
  },
  {
    name: "Rede Média",
    cartories: "11-25 cartórios",
    price: "R$ 599",
    features: [
      "Analytics avançado",
      "Gerente de conta",
      "Suporte prioritário",
      "Treinamento presencial"
    ],
    popular: true
  },
  {
    name: "Rede Grande",
    cartories: "25+ cartórios",
    price: "Sob consulta",
    features: [
      "Solução customizada",
      "SLA garantido",
      "Suporte 24/7",
      "Consultoria especializada"
    ]
  }
];

export default function RedesDeCartorioPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-neutral-50 to-white pt-20 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-6">
              Redes de Cartório
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
              Dante AI para{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Redes de Cartório
              </span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-neutral-600">
              Gerencie múltiplos cartórios com eficiência, padronização e controle de qualidade 
              unificado através de uma plataforma inteligente.
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

      {/* Features Section */}
      <section className="py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Recursos Exclusivos para Redes
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Funcionalidades desenvolvidas especificamente para gestão de múltiplos cartórios
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="border-0 bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
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

      {/* Plans Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Planos para Redes
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Escolha o plano ideal para o tamanho da sua rede de cartórios
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {plans.map((plan) => (
              <Card 
                key={plan.name} 
                className={`relative overflow-hidden ${
                  plan.popular 
                    ? 'border-orange-200 shadow-lg ring-1 ring-orange-200' 
                    : 'border-neutral-200'
                } hover:shadow-lg transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center py-2 text-sm font-medium">
                    Mais Popular
                  </div>
                )}
                
                <CardContent className={`p-8 ${plan.popular ? 'pt-16' : ''}`}>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-neutral-600 text-sm mb-6">
                    {plan.cartories}
                  </p>

                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold text-neutral-900">
                        {plan.price}
                      </span>
                      {plan.price !== "Sob consulta" && (
                        <span className="text-neutral-500 ml-1">/mês</span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-3">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-neutral-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-orange-500 text-white hover:bg-orange-600' 
                        : 'bg-neutral-900 text-white hover:bg-neutral-800'
                    }`}
                    size="lg"
                  >
                    {plan.price === "Sob consulta" ? "Falar com vendas" : "Começar teste"}
                    <ArrowRight className="ml-2 h-4 w-4" />
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
              Pronto para modernizar sua rede?
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Fale com nossos especialistas e descubra como Dante AI pode transformar sua rede de cartórios
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-neutral-900 text-white hover:bg-neutral-800">
                Falar com especialista
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