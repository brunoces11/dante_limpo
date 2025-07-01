import Link from "next/link";
import { Scale, Twitter, Github, Linkedin, Mail } from "lucide-react";

const footerSections = [
  {
    title: "Produto",
    links: [
      { name: "Agentes de IA", href: "/agentes-de-ia" },
      { name: "Planos", href: "/planos" },
      { name: "Atualizações", href: "/atualizacoes" },
      { name: "Roadmap", href: "/roadmap" },
      { name: "Status", href: "/status" }
    ]
  },
  {
    title: "Recursos",
    links: [
      { name: "Documentação", href: "/documentacao" },
      { name: "Base Legal", href: "/base-legal" },
      { name: "Tutoriais", href: "/tutorials" },
      { name: "Suporte", href: "/suporte" },
      { name: "Treinamentos", href: "/training" }
    ]
  },
  {
    title: "Cartórios",
    links: [
      { name: "Para Oficiais", href: "/para-oficiais" },
      { name: "Para Escreventes", href: "/para-escreventes" },
      { name: "Redes de Cartório", href: "/redes-de-cartorio" },
      { name: "Casos de Uso", href: "/casos-uso" },
      { name: "Certificações", href: "/certificacoes" }
    ]
  },
  {
    title: "Legal",
    links: [
      { name: "Privacidade", href: "/privacy" },
      { name: "Termos de Uso", href: "/terms" },
      { name: "Cookies", href: "/cookies" },
      { name: "LGPD", href: "/lgpd" },
      { name: "Contato", href: "/contact" }
    ]
  }
];

const socialLinks = [
  { name: "Twitter", href: "https://twitter.com/danteai", icon: Twitter },
  { name: "GitHub", href: "https://github.com/danteai", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com/company/danteai", icon: Linkedin },
  { name: "Email", href: "mailto:contato@danteai.app", icon: Mail }
];

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-6">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-orange-600">
                <Scale className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Dante AI</span>
            </Link>
            <p className="text-neutral-400 mb-8 max-w-md leading-relaxed">
              IA especializada exclusivamente em Registro de Imóveis. 
              Respostas precisas baseadas na legislação vigente para profissionais de cartório.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-white mb-6">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-8 border-t border-neutral-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Fique por dentro das atualizações
              </h3>
              <p className="text-neutral-400">
                Receba updates sobre mudanças na legislação e novos recursos do Dante AI.
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="flex-1 px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors whitespace-nowrap">
                Inscrever-se
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-400">
            © 2024 Dante AI. Todos os direitos reservados.
          </p>
          <div className="flex items-center space-x-6 text-sm text-neutral-400">
            <span>🇧🇷 Feito no Brasil</span>
            <span>•</span>
            <span>⚖️ Especializado em RI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}