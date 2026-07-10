import Navbar from "../../components/landing/Navbar";
import Hero from "../../components/landing/Hero";
import Stats from "../../components/landing/Stats";
import Features from "../../components/landing/Features";
import AIPreview from "../../components/landing/AIPreview";
import CTA from "../../components/landing/CTA";
import Footer from "../../components/landing/Footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text)]">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <AIPreview />
      <CTA />
      <Footer />
    </main>
  );
}