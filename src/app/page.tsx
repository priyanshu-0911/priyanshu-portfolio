import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { AboutSection } from "@/components/AboutSection";
import { InteractiveStack } from "@/components/InteractiveStack";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Preloader } from "@/components/Preloader";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CursorGlow } from "@/components/CursorGlow";
import { SkillTicker } from "@/components/SkillTicker";
import { WhatIBuild } from "@/components/WhatIBuild";
import { ExperimentsSection } from "@/components/ExperimentsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProjectShowcase />
        <WhatIBuild />
        <AboutSection />
        <InteractiveStack />
        <ExperimentsSection />
        <ContactSection />
      </main>
      <Footer />
      <Preloader />
      <ScrollProgress />
      <CursorGlow />
      <SkillTicker />
      
    </>
  );
}