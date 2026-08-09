"use client";

import { useState, useEffect } from "react";
import ParticleBackground from "@/components/ParticleBackground";
import HeaderNav from "@/components/HeaderNav";
import HeroSection from "@/components/HeroSection";
import ImpactStats from "@/components/ImpactStats";
import InteractiveTerminal from "@/components/InteractiveTerminal";
import ProjectShowcase from "@/components/ProjectShowcase";
import SkillMatrix from "@/components/SkillMatrix";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  const [theme, setTheme] = useState<string>("cyber");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <main style={{ position: "relative", minHeight: "100vh", overflowX: "hidden" }}>
      {/* Dynamic Interactive HTML5 Canvas Background */}
      <ParticleBackground />

      {/* Top Floating Glassmorphism Header */}
      <HeaderNav currentTheme={theme} setTheme={setTheme} />

      {/* Hero Section */}
      <HeroSection />

      {/* Impact Stats Counter */}
      <ImpactStats />

      {/* Interactive CLI Console */}
      <InteractiveTerminal />

      {/* Featured Projects Showcase & Specs */}
      <ProjectShowcase />

      {/* Skill Matrix & Stack */}
      <SkillMatrix />

      {/* Contact Section & Footer */}
      <ContactSection />
    </main>
  );
}
