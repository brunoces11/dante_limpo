import Header from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Scale, 
  FileText, 
  Gavel, 
  Building,
  ArrowRight,
  ExternalLink,
  Search,
  BookOpen
} from "lucide-react";

const legalSources = [
  {
    category: "Legislação Federal",
    icon: Scale,
    items: [
      { 
        title: "Lei 6.015/73", 
        description: "Lei de Registros Públicos - Base fundamental do sistema registral brasileiro",
        lastUpdate: "Atualizada em 2024",
        articles: "450+ artigos"
      },
      { 
        title: "Código Civil (Lei 10.406/02)", 
        description: "Dispositivos aplicáveis ao Registro de Imóveis",
        lastUpdate: "Atualizada em 2024",
        articles: "200+ artigos relevantes"
      },
      { 
        title: "Lei 8.935/94", 
        description: "Lei dos Cartórios - Regulamenta as atividades notariais e de registro",
        lastUpdate: "Atualizada em 2023",
        articles: "50+ artigos"
      },
      { 
        title: "Lei 11.977/09", 
        description: "Programa Minha Casa Minha Vida e regularização fundiária",
        lastUpdate: "Atualizada em 2024",
        articles: "100+ artigos"
      }
    ]
  },
  {
    category: "Normas do CNJ",
    icon: Gavel,
    items: [
      { 
        title: "Provimento 88/2019", 
        description: "Institui o Código Nacional de Normas da Corregedoria-Geral da Justiça",
        lastUpdate: "Atualizado em 2024",
        articles: "1000+ artigos"
      },
      { 
        title: "Provimento 89/2019", 
        description: "Institui o Código de Normas dos Serviços Notariais e de Registro",
        lastUpdate: "Atualizado em 2024",
        articles: "800+ artigos"
      },
      { 
        title: "Provimento 102/2020", 
        description: "Dispõe sobre a prática de atos notariais eletrônicos",
        lastUpdate: "Atualizado em 2023",
        articles: "50+ artigos"
      },
      { 
        title: "Resoluções CNJ", 
        description: "Conjunto de resoluções aplicáveis aos serviços registrais",
        lastUpdate: "Atualizadas em 2024",
        articles: "200+ resoluções"
      }
    ]
  },
  {
    category: "Legislação Estadual SC",
    icon: Building,
    items: [
      { 
        title: "Código de Normas CGJ/SC", 
        description: "Normas específicas da Corregedoria-Geral da Justiça de Santa Catarina",
        lastUpdate: "Atualizado em 2024",
        articles: "500+ artigos"
      },
      { 
        title: "Provimentos CGJ/SC", 
        description: "Provimentos específicos para cartórios de Santa Catarina",
        lastUpdate: "Atualizados em 2024",
        articles: "100+ provimentos"
      },
      { 
        title: "Lei Estadual 6.745/85", 
        description: "Código Tributário do Estado de Santa Catarina",
        lastUpdate: "Atualizada em 2024",
        articles: "300+ artigos"
      },
      { 
        title: "Decretos Estaduais", 
        description: "Decretos aplicáveis aos serviços registrais em SC",
        lastUpdate: "Atualizados em 2024",
        articles: "50+ decretos"
      }
    ]
  },
  {
    category: "Jurisprudência",
    icon: FileText,
    items: [
      { 
        title: "STJ - Registro de Imóveis", 
        description: "Súmulas e precedentes do Superior Tribunal de Justiça",
        lastUpdate: "Atualizada em 2024",
        articles: "500+ decisões"
      },
      { 
        title: "STF - Direito Registral", 
        description: "Decisões do Supremo Tribunal Federal sobre registro",
        lastUpdate: "Atualizada em 2024",
        articles: "100+ decisões"
      },
      { 
        title: "TJSC - Jurisprudência Local", 
        description: "Decisões do Tribunal de Justiça de Santa Catarina",
        lastUpdate: "Atualizada em 2024",
        articles: "1000+ decisões"
      },
      { 
        title: "Enunciados IRIB", 
        description: "Enunciados do Instituto de Registro Imobiliário do Brasil",
        lastUpdate: "Atualizados em 2024",
        articles: "200+ enunciados"
      }
    ]
  }
];

const searchCategories = [
  { name: "Qualificação Registral", count: "1.200+ artigos" },
  { name: "Procedimentos de Registro", count: "800+ artigos" },
  { name: "Retificação de Registro", count: "300+ artigos" },
  { name: "Usucapião", count: "250+ artigos" },
  { name: "Incorporação Imobiliária", count: "400+ artigos" },
  { name: "Alienação Fiduciária", count: "200+ artigos" }
];

export default function BaseLegalPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-neutral-50 to-white pt-20 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-6">
              Base Legal
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
              Base Legal{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Completa
              </span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-neutral-600">
              Acesse toda a legislação, normas e jurisprudência que fundamentam 
              as respostas do Dante AI sobre Registro de Imóveis em Santa Catarina.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Buscar na base legal (ex: art. 213 Lei 6.015/73)..."
                  className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <Button className="bg-orange-500 text-white hover:bg-orange-600">
                Buscar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Categories */}
      <section className="py-12 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold text-neutral-900 mb-6">Categorias Populares</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {searchCategories.map((category) => (
              <Card key={category.name} className="border-neutral-200 hover:border-orange-200 hover:shadow-md transition-all duration-300 cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-neutral-900">{category.name}</span>
                    <Badge variant="secondary" className="text-xs">{category.count}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Sources */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {legalSources.map((source) => (
              <div key={source.category}>
                <div className="flex items-center space-x-3 mb-8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500">
                    <source.icon className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">
                    {source.category}
                  </h2>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {source.items.map((item) => (
                    <Card key={item.title} className="border-neutral-200 hover:border-orange-200 hover:shadow-md transition-all duration-300 cursor-pointer">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                          {item.title}
                        </h3>
                        <p className="text-neutral-600 text-sm mb-4">
                          {item.description}
                        </p>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-neutral-500">Última atualização:</span>
                            <Badge variant="secondary" className="bg-green-100 text-green-800">
                              {item.lastUpdate}
                            </Badge>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-neutral-500">Conteúdo:</span>
                            <span className="text-neutral-600">{item.articles}</span>
                          </div>
                        </div>

                        <Button variant="ghost" size="sm" className="p-0 h-auto text-orange-500 hover:text-orange-600">
                          Consultar
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

      {/* Stats Section */}
      <section className="py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Base de Conhecimento Completa
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Nossa base legal é constantemente atualizada e validada por especialistas
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Artigos de Lei", value: "3.000+" },
              { label: "Decisões Judiciais", value: "1.500+" },
              { label: "Normas CNJ", value: "200+" },
              { label: "Atualizações/Ano", value: "500+" }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-neutral-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Precisa de uma consulta específica?
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Use o Dante AI para consultas diretas ou fale com nossos especialistas jurídicos
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-neutral-900 text-white hover:bg-neutral-800">
                <BookOpen className="mr-2 h-4 w-4" />
                Consultar Dante AI
              </Button>
              <Button variant="outline" size="lg">
                Falar com especialista
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}