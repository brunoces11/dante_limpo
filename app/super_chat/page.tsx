"use client";

import Header from "@/components/header";
import ChatModal from "@/components/chat-modal";

export default function SuperChatPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <ChatModal 
            isOpen={true} 
            onClose={() => {}} 
            embedded={true}
          />
        </div>
      </div>
      <div className="w-full flex justify-center pb-4">
        <span style={{ fontSize: '9pt', opacity: 0.6 }}>
          Dante utiliza Inteligência Artificial Generativa e, por esse motivo, pode cometer equívocos. Caso detecte qualquer inconsistência, basta informar ao suporte para que possa avaliar e corrigir o sistema.
        </span>
      </div>
    </main>
  );
}