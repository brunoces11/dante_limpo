"use client";

import Header from "@/components/header";
import ChatModal from "@/components/chat-modal";

export default function ChatPrincipalPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <ChatModal 
          isOpen={true} 
          onClose={() => {}} 
        />
      </div>
    </main>
  );
} 