import Header from "@/components/header";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Testimonials />
    </main>
  );
}