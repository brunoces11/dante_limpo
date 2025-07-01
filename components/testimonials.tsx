import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const testimonials = [
  {
    content: "O Dante AI revolucionou nosso cartório. Conseguimos **esclarecer dúvidas complexas** sobre qualificação registral em segundos. A precisão das respostas baseadas na legislação é impressionante.",
    author: "Dr. Carlos Mendes",
    role: "Oficial de Registro",
    company: "1º RI de Florianópolis",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
    logo: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=100",
    rating: 5
  },
  {
    content: "Como escrevente, sempre tive dificuldades com interpretação de normas específicas. O Dante me deu **segurança jurídica** - agora posso consultar a legislação de forma rápida e precisa.",
    author: "Ana Paula Silva",
    role: "Escrevente Autorizada",
    company: "2º RI de Joinville",
    avatar: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150",
    logo: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=100",
    rating: 5
  },
  {
    content: "Usamos o Dante para padronizar procedimentos em nossa rede de cartórios. A **economia de tempo** é absurda - o que levava horas de pesquisa agora leva minutos.",
    author: "Roberto Costa",
    role: "Diretor Operacional",
    company: "Rede Cartórios",
    avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150",
    logo: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=100",
    rating: 5
  }
];

const companies = [
  { 
    name: "1º RI Florianópolis", 
    logo: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=120" 
  },
  { 
    name: "2º RI Joinville", 
    logo: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=120" 
  },
  { 
    name: "RI Blumenau", 
    logo: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=120" 
  },
  { 
    name: "RI Chapecó", 
    logo: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=120" 
  },
  { 
    name: "RI Criciúma", 
    logo: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=120" 
  },
  { 
    name: "RI Itajaí", 
    logo: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=120" 
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Trusted by section */}
        <div className="text-center mb-20">
          <p className="text-sm font-medium text-neutral-500 mb-8">
            Confiado por mais de 200 cartórios no Brasil
          </p>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {companies.map((company) => (
              <div key={company.name} className="flex flex-col items-center space-y-3 opacity-60 hover:opacity-100 transition-opacity">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-12 w-12 rounded-lg object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
                <span className="text-xs font-medium text-neutral-600 text-center leading-tight">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Depoimentos
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Confiado por profissionais de cartório
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Veja como profissionais estão transformando seus procedimentos registrais com o Dante AI
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden bg-white border-neutral-200 hover:border-orange-200 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-8">
                {/* Company Logo */}
                <div className="mb-6">
                  <img
                    src={testimonial.logo}
                    alt={testimonial.company}
                    className="h-8 w-auto opacity-60"
                  />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-orange-400 text-orange-400" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-neutral-600 mb-8 leading-relaxed">
                  <span className="text-2xl text-orange-500 font-serif leading-none">"</span>
                  <span 
                    className="text-[15px] leading-6 [&_strong]:font-semibold [&_strong]:text-neutral-800"
                    dangerouslySetInnerHTML={{ 
                      __html: testimonial.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                    }}
                  />
                  <span className="text-2xl text-orange-500 font-serif leading-none">"</span>
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="h-12 w-12 rounded-lg border border-neutral-200 object-cover"
                  />
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

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-2 text-sm text-neutral-500">
            <span>⭐ 4.9/5</span>
            <span>•</span>
            <span>Baseado em 847 avaliações de cartórios</span>
          </div>
        </div>
      </div>
    </section>
  );
}