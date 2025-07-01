import Header from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Award, 
  Shield, 
  CheckCircle, 
  FileText,
  ArrowRight,
  Scale,
  Lock,
  Globe,
  Users,
  Building
} from "lucide-react";

const certifications = [
  {
    category: "Conformidade Legal",
    icon: Scale,
    items: [
      {
        title: "Conformidade CNJ",
        description: "Alinhado com todas as normas e provimentos do Conselho Nacional de Justiça",
        status: "Certificado",
        date: "2024",
        authority: "CNJ"
      },
      {
        title: "Legislação Federal",
        description: "Base legal fundamentada na Lei 6.015/73 e Código Civil",
        status: "Validado",
        date: "2024",
        authority: "Jurídico Interno"
      },
      {
        title: "Normas Estaduais SC",
        description: "Conformidade com legislação específica de Santa Catarina",
        status: "Certificado",
        date: "2024",
        authority: "CGJ/SC"
      }
    ]
  },
  {
    category: "Segurança e Privacidade",
    icon: Shield,
    items: [
      {
        title: "LGPD Compliance",
        description: "Conformidade total com a Lei Geral de Proteção de Dados",
        status: "Certificado",
        date: "2024",
        authority: "ANPD"
      },
      {
        title: "ISO 27001",
        description: "Gestão de segurança da informação",
        status: "Em processo",
        date: "2024",
        authority: "ISO"
      },
      {
        title: "SOC 2 Type II",
        description: "Controles de segurança, disponibilidade e confidencialidade",
        status: "Planejado",
        date: "2025",
        authority: "AICPA"
      }
    ]
  },
  {
    category: "Qualidade e Processos",
    icon: Award,
    items: [
      {
        title: "ISO 9001",
        description: "Sistema de gestão da qualidade",
        status: "Certificado",
        date: "2024",
        authority: "ISO"
      },
      {
        title: "CMMI Level 3",
        description: "Maturidade em desenvolvimento de software",
        status: "Em processo",
        date: "2024",
        authority: "CMMI Institute"
      },
      {
        title: "Auditoria Independente",
        description: "Validação por terceiros especializados em RI",
        status: "Anual",
        date: "2024",
        authority: "IRIB"
      }
    ]
  }
];

const compliance = [
  {
    title: "Lei de Registros Públicos",
    description: "Lei 6.015/73 e suas atualizações",
    coverage: "100%"
  },
  {
    title: "Código Civil",
    description: "Dispositivos aplicáveis ao RI",
    coverage: "100%"
  },
  {
    title: "Normas CNJ",
    description: "Provimentos e resoluções",
    coverage: "100%"
  },
  {
    title: "Legislação Estadual SC",
    description: "Normas específicas de SC",
    coverage: "100%"
  }
];

const security = [
  {
    icon: Lock,
    title: "Criptografia End-to-End",
    description: "Todas as comunicações são criptografadas com padrão AES-256"
  },
  {
    icon: Shield,
    title: "Auditoria de Segurança",
    description: "Testes de penetração e auditoria de segurança regulares"
  },
  {
    icon: Users,
    title: "Controle de Acesso",
    description: "Autenticação multifator e controle granular de permissões"
  },
  {
    icon: Globe,
    title: "Infraestrutura Segura",
    description: "Hospedagem em data centers certificados com alta disponibilidade"
  }
];

export default function CertificacoesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-neutral-50 to-white pt-20 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-6">
              Certificações
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
              Certificações e{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Conformidade
              </span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-neutral-600">
              Dante AI atende aos mais rigorosos padrões de qualidade, segurança 
              e conformidade legal para o setor registral.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {certifications.map((category) => (
              <div key={category.category}>
                <div className="flex items-center space-x-3 mb-8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500">
                    <category.icon className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">
                    {category.category}
                  </h2>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  {category.items.map((item) => (
                    <Card key={item.title} className="border-neutral-200 hover:border-orange-200 hover:shadow-md transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-lg font-semibold text-neutral-900">
                            {item.title}
                          </h3>
                          <Badge variant={
                            item.status === 'Certificado' ? 'default' :
                            item.status === 'Validado' ? 'default' :
                            item.status === 'Em processo' ? 'secondary' :
                            item.status === 'Anual' ? 'default' :
                            'secondary'
                          } className={
                            item.status === 'Certificado' || item.status === 'Validado' || item.status === 'Anual'
                              ? 'bg-green-100 text-green-800' 
                              : item.status === 'Em processo'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-neutral-100 text-neutral-600'
                          }>
                            {item.status}
                          </Badge>
                        </div>
                        
                        <p className="text-neutral-600 text-sm mb-4">
                          {item.description}
                        </p>

                        <div className="space-y-2 text-xs text-neutral-500">
                          <div className="flex justify-between">
                            <span>Autoridade:</span>
                            <span className="font-medium">{item.authority}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Ano:</span>
                            <span className="font-medium">{item.date}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Compliance */}
      <section className="py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Conformidade Legal
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Cobertura completa da legislação aplicável ao Registro de Imóveis
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {compliance.map((item) => (
              <Card key={item.title} className="border-0 bg-white shadow-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">
                    {item.coverage}
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
        </div>
      </section>

      {/* Security Features */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Segurança e Proteção
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Medidas de segurança robustas para proteger dados sensíveis
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {security.map((feature) => (
              <Card key={feature.title} className="border-neutral-200 hover:border-orange-200 hover:shadow-md transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 mx-auto mb-6">
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

      {/* Audit Section */}
      <section className="py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Card className="border-0 bg-white shadow-lg">
              <CardContent className="p-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 mx-auto mb-8">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                  Relatórios de Auditoria
                </h2>
                <p className="text-lg text-neutral-600 mb-8">
                  Disponibilizamos relatórios detalhados de auditoria e conformidade 
                  para garantir transparência e confiança.
                </p>
                <div className="flex items-center justify-center gap-x-6">
                  <Button size="lg" className="bg-neutral-900 text-white hover:bg-neutral-800">
                    Solicitar relatório
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg">
                    Ver certificados
                  </Button>
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
              Confiança e Segurança Garantidas
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Use Dante AI com total segurança e conformidade legal
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-neutral-900 text-white hover:bg-neutral-800">
                Começar agora
                <ArrowRight className="ml-2 h-4 w-4" />
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