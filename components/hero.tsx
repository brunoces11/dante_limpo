"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Play, MessageCircle } from "lucide-react";
import ChatModal from "./chat-modal";

export default function Hero() {
  const [question, setQuestion] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChat = () => {
    if (question.trim()) {
      setIsChatOpen(true);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && question.trim()) {
      e.preventDefault();
      handleChat();
    }
  };

  return (
    <>
      <section 
        className="relative overflow-hidden bg-white pt-8 pb-20 sm:pt-16 sm:pb-18"
        style={{
          backgroundImage: 'url(/DANTE_BG_v5.jpg)',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% auto'
        }}
      >
        {/* Background overlay for better text readability - reduced opacity from 80% to 40% */}
        <div className="absolute inset-0 bg-white/40"></div>
        
        {/* Background grid - changed from lines to dots with reduced opacity */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, #80808040 1px, transparent 1px)',
            backgroundSize: '14px 24px',
            opacity: 0.63
          }}
        ></div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            {/* Main headline */}
            <h1 className="font-display text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl leading-[1.9]">
  <span className="block">IA Especializada em</span>
  <span className="block relative mt-2">
    <span className="font-bold sm:text-5xl relative z-10 bg-gradient-to-r from-orange-200 to-orange-600 bg-clip-text text-transparent">
      Registro de Imóveis
    </span>
    <span className="absolute -bottom-2 left-0 right-0 h-3 bg-orange-500/20 -z-10"></span>
  </span>
</h1>

            
            {/* Subtitle */}
            <p className="mx-auto mt-6 text-[1.1rem] leading-8 text-neutral-700 max-w-[600px]">
              Dante é uma IA avançada especializada fornecer embasamento jurídico para cartórios e registros imobiliários
              Respostas objetivas, concisas e rigorosamente baseadas na legislação vigente.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-neutral-400 text-white hover:bg-neutral-600 px-6 py-3 text-base">
                Comece grátis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="px-6 py-3 text-base border-neutral-300 hover:border-neutral-400 hover:text-neutral-800 bg-white/80 backdrop-blur-sm">
                <Play className="mr-2 h-4 w-4" />
                Ver demonstração
              </Button>
            </div>

            {/* Interactive Chat Form */}
            <div className="mt-16">
              <div className="mx-auto max-w-lg">
                <div className="relative rounded-xl border border-neutral-200 bg-white/90 backdrop-blur-sm p-2 shadow-lg ring-1 ring-black/5 focus-within:ring-2 focus-within:ring-orange-500/20">
                  <div className="flex gap-2">
                    <Input
                      type="text"
                      placeholder="Pergunte sobre Registro de Imóveis..."
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="flex-1 border-0 bg-transparent px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                    <Button
                      onClick={handleChat}
                      disabled={!question.trim()}
                      className="bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700 px-6 py-3 font-medium rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Perguntar
                    </Button>
                  </div>
                </div>
              </div>
              
              <p className="mt-5 text-[0.7rem] text-neutral-600">
              🏛️ Especialista em Registro de Imóveis • ⚖️ Baseado na legislação
              </p>
            </div>
          </div>
        </div>
      </section>

      <ChatModal 
        isOpen={isChatOpen} 
        onClose={() => {
          setIsChatOpen(false);
          setQuestion(""); // Clear the input when modal closes
        }}
        initialMessage={question}
      />
    </>
  );
}