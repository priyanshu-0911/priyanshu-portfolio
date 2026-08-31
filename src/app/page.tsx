import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Preloader } from "@/components/Preloader";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CursorGlow } from "@/components/CursorGlow";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProjectShowcase />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <Preloader />
      <ScrollProgress />
      <CursorGlow />
    </>
  );
}