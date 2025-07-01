import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Scale, 
  FileText, 
  Brain, 
  Shield, 
  Clock, 
  Users,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "IA Especializada",
    description: "Dante é treinado exclusivamente em legislação e procedimentos de Registro de Imóveis.",
    image: "/api/placeholder/500/300",
    list: ["Base de conhecimento atualizada", "Respostas precisas e objetivas", "Foco exclusivo em RI"]
  },
  {
    icon: FileText,
    title: "Qualificação Registral",
    description: "Auxilia na análise documental e qualificação de títulos para registro, seguindo rigorosamente a legislação.",
    image: "/api/placeholder/500/300",
    list: ["Análise de documentos", "Verificação de conformidade", "Orientação sobre procedimentos"]
  },
  {
    icon: Scale,
    title: "Base Legal Completa",
    description: "Aplicação rigorosa da hierarquia das leis, priorizando legislação federal, estadual e normas do CNJ.",
    image: "/api/placeholder/500/300",
    list: ["Legislação federal e estadual", "Normas do CNJ", "Jurisprudência atualizada"]
  },
  {
    icon: Shield,
    title: "Segurança Jurídica",
    description: "Garante conformidade e segurança nos procedimentos registrais, evitando erros e fraudes.",
    image: "/api/placeholder/500/300",
    list: ["Procedimentos validados", "Prevenção de erros", "Conformidade legal"]
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">
            Recursos Especializados
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Tudo que você precisa para o Registro de Imóveis
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Nossa IA combina conhecimento jurídico especializado com tecnologia avançada 
            para entregar respostas precisas e fundamentadas.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-20 space-y-24">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-neutral-900">
                    {feature.title}
                  </h3>
                </div>
                
                <p className="text-lg text-neutral-600 mb-8">
                  {feature.description}
                </p>

                <ul className="space-y-4 mb-8">
                  {feature.list.map((item) => (
                    <li key={item} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-600">{item}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="group">
                  Saiba mais
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>

              {/* Visual/Image */}
              <div className={`mt-12 lg:mt-0 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <Card className="overflow-hidden shadow-2xl">
                  <CardContent className="p-0">
                    <div className="aspect-[4/3] bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center">
                      <div className="text-center text-neutral-400">
                        <feature.icon className="h-16 w-16 mx-auto mb-4 opacity-50" />
                        <p className="text-sm">Demonstração Interativa</p>
                        <p className="text-xs mt-1">{feature.title}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="mt-32">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Clock,
                title: "Respostas Instantâneas",
                description: "Obtenha informações precisas em segundos, sem necessidade de consultar múltiplas fontes."
              },
              {
                icon: Users,
                title: "Suporte Especializado",
                description: "Equipe jurídica especializada em Registro de Imóveis para casos complexos."
              },
              {
                icon: Shield,
                title: "Atualização Constante",
                description: "Base de conhecimento sempre atualizada com as últimas mudanças na legislação."
              }
            ].map((feature) => (
              <Card key={feature.title} className="relative overflow-hidden border-0 bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 mb-6">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}