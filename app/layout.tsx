import '../globals.css';
import type { Metadata } from 'next';
import Assinatura from "@/components/assinatura";
import { AuthProvider } from "@/components/auth/AuthProvider";

export const metadata: Metadata = {
  title: 'Dante AI - IA Especializada em Registro de Imóveis',
  description: 'Dante é uma IA avançada especializada exclusivamente em Registro de Imóveis. Respostas objetivas e precisas baseadas na legislação vigente.',
  keywords: 'registro de imóveis, IA, cartório, legislação, procedimentos registrais, qualificação registral',
  authors: [{ name: 'Dante AI Team' }],
  creator: 'Dante AI',
  publisher: 'Dante AI',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://danteai.app',
    siteName: 'Dante AI',
    title: 'Dante AI - IA Especializada em Registro de Imóveis',
    description: 'IA avançada especializada exclusivamente em Registro de Imóveis.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dante AI - IA Especializada em Registro de Imóveis',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dante AI - IA Especializada em Registro de Imóveis',
    description: 'IA avançada especializada exclusivamente em Registro de Imóveis.',
    images: ['/og-image.jpg'],
    creator: '@danteai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: undefined,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <AuthProvider>
          {children}
          <Assinatura />
        </AuthProvider>
      </body>
    </html>
  );
}