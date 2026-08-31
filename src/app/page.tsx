import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";

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
    </>
  );
}