"use client";

import HeaderNav from "@/components/HeaderNav";
import HeroSection from "@/components/HeroSection";
import ProjectShowcase from "@/components/ProjectShowcase";
import InteractiveTerminal from "@/components/InteractiveTerminal";
import SkillMatrix from "@/components/SkillMatrix";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main style={{ position: "relative", minHeight: "100vh" }}>
      <HeaderNav />
      <HeroSection />
      <div className="divider" />
      <InteractiveTerminal />
      <div className="divider" />
      <ProjectShowcase />
      <div className="divider" />
      <SkillMatrix />
      <div className="divider" />
      <ContactSection />
    </main>
  );
}
