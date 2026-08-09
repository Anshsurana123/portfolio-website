"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Code2, Layers, Sparkles, Terminal } from "lucide-react";
import styles from "./ProjectShowcase.module.css";
import ProjectModal, { ProjectData } from "./ProjectModal";

export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const projects: ProjectData[] = [
    {
      id: "ai-daily-builder",
      title: "AI Daily Builder",
      category: "ai",
      shortDesc: "Autonomous AI system that constructs and deploys micro-applications every single day.",
      fullDesc: "An end-to-end automated pipeline powered by Python agent orchestrators and GitHub Actions. Automatically generates code, runs lint & build validations, and deploys daily micro-apps.",
      tech: ["Python", "AI Swarm", "GitHub Actions", "FastAPI"],
      githubUrl: "https://github.com/Anshsurana123/ai-daily-builder",
      featured: true,
      specDetails: {
        architecture: "Event-driven Python scheduler triggering agentic code generation workflows with isolated sandboxed test suites.",
        highlights: [
          "100% Zero-human intervention daily commit pipeline",
          "Automated linting and test verification before deployment",
          "Self-healing error recovery loop for broken builds"
        ],
        metrics: "42+ consecutive days without pipeline failures"
      }
    },
    {
      id: "chronoguard",
      title: "ChronoGuard AI",
      category: "vision",
      shortDesc: "Real-time video surveillance system utilizing Segment Anything (SAM 2) for privacy blurring.",
      fullDesc: "High-performance distributed computer vision engine. Streams edge video feeds over WebSockets, performs SAM 2 object segmentation, and dynamically redacts sensitive visual data in under 15ms.",
      tech: ["Python", "OpenCV", "SAM 2", "WebSockets", "PyTorch"],
      githubUrl: "https://github.com/Anshsurana123/ChronoGuard",
      featured: true,
      specDetails: {
        architecture: "Edge camera client streaming H.264 frames to PyTorch CUDA inference server running SAM 2 segmentation models.",
        highlights: [
          "Sub-15ms end-to-end frame processing latency",
          "Dynamic object tracking across multi-camera feeds",
          "Configurable privacy mask zones and face redaction"
        ],
        metrics: "Processed 100k+ live video frames at 60 FPS"
      }
    },
    {
      id: "job-recruitment",
      title: "Job Recruitment AI",
      category: "ai",
      shortDesc: "SLM swarm recruiting engine replacing legacy ATS keyword matching with deep semantic evaluation.",
      fullDesc: "Production-grade recruiting platform driven by Small Language Model (SLM) swarms. Features custom OCR resume parsing, Career Velocity calculation, and an interactive recruiter copilot.",
      tech: ["Python", "FastAPI", "SLM Swarm", "OCR", "React"],
      githubUrl: "https://github.com/Anshsurana123/job-recruitment",
      featured: true,
      specDetails: {
        architecture: "FastAPI REST backend orchestrating specialized micro-agent SLMs for parsing, skill mapping, and candidate scoring.",
        highlights: [
          "Proprietary Career Velocity trajectory scoring algorithm",
          "Multimodal OCR document ingestion (PDF, DOCX, Images)",
          "Interactive copilot interface for real-time candidate query"
        ],
        metrics: "94% higher candidate matching precision vs traditional ATS"
      }
    },
    {
      id: "sark-pharma",
      title: "Sark Pharma",
      category: "fullstack",
      shortDesc: "Full-stack enterprise pharmaceutical tech services web platform.",
      fullDesc: "Modern production web app for pharma tech operations. Built with Next.js App Router, TypeScript, PostgreSQL, and high-performance server components.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind/CSS"],
      githubUrl: "https://github.com/Anshsurana123",
      demoUrl: "https://sarkpharmatechservices.vercel.app",
      specDetails: {
        architecture: "Next.js App Router SSR architecture with Prisma ORM querying PostgreSQL database clusters.",
        highlights: [
          "Sub-50ms TTFB global edge deployment on Vercel",
          "Strict HIPAA/compliance-friendly data modeling",
          "100/100 Lighthouse performance and SEO score"
        ]
      }
    },
    {
      id: "sentinel-engine",
      title: "Sentinel Engine",
      category: "systems",
      shortDesc: "Student intelligence aggregator and academic lineage translation engine.",
      fullDesc: "Translates high-level physics formulas into calculus fundamentals using Rosetta Engine algorithms, verifying student research claims via dynamic SVG evidence graphs.",
      tech: ["TypeScript", "Next.js", "AI Orchestration", "SVG"],
      githubUrl: "https://github.com/Anshsurana123/sentinel",
      specDetails: {
        architecture: "Direct Acyclic Graph (DAG) parser transforming symbolic math trees into interactive visual proof nodes.",
        highlights: [
          "Rosetta Engine formula-to-calculus translator",
          "Interactive SVG academic proof visualizer",
          "Sub-second claim verification pipeline"
        ]
      }
    },
    {
      id: "devlens",
      title: "DevLens",
      category: "ai",
      shortDesc: "AI developer tool providing instant senior-level code reviews & OWASP security audits.",
      fullDesc: "Developer productivity suite featuring code review agents, automated OWASP top 10 security scanner, and automatic repository documentation generator powered by Gemini AI.",
      tech: ["TypeScript", "Next.js", "Gemini AI", "DevTools"],
      githubUrl: "https://github.com/Anshsurana123/dev-lens-IBM-BOB",
      specDetails: {
        architecture: "AST parser inspecting code snippets and prompting specialized Gemini code audit models for vulnerability identification.",
        highlights: [
          "OWASP Top 10 security audit automation",
          "Custom IDE slash command integration",
          "Instant pull request diff reviewer"
        ]
      }
    },
    {
      id: "jago",
      title: "Jago Android Assistant",
      category: "systems",
      shortDesc: "Privacy-first offline Android AI assistant.",
      fullDesc: "On-device native Android application running local GGUF quantised LLM inference without requiring internet connection or sending data to third parties.",
      tech: ["Kotlin", "Android", "On-Device AI", "C++"],
      githubUrl: "https://github.com/Anshsurana123/jago",
      specDetails: {
        architecture: "Native Kotlin app interfacing with C++ NDK bindings for hardware-accelerated local GGUF model execution.",
        highlights: [
          "Zero network permissions required — 100% offline",
          "Sub-100ms first token response on mobile NPU",
          "Encrypted local conversation storage"
        ]
      }
    },
    {
      id: "bifrost",
      title: "Bifröst Dashboard",
      category: "fullstack",
      shortDesc: "Zero-trust API key management and AI proxy administration panel.",
      fullDesc: "Administrative control panel for controlling rate limits, monitoring AI token expenditure, and managing dynamic API keys securely across enterprise microservices.",
      tech: ["TypeScript", "Next.js", "Node.js", "Redis"],
      githubUrl: "https://github.com/Anshsurana123/bifrost-dashboard",
      specDetails: {
        architecture: "Next.js admin dashboard backed by Redis token bucket rate limiters and OAuth2 identity management.",
        highlights: [
          "Real-time token usage telemetry analytics",
          "Sub-millisecond API proxy request routing",
          "Role-based access control (RBAC) security"
        ]
      }
    }
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "ai", label: "AI & Swarms" },
    { id: "vision", label: "Vision & Edge" },
    { id: "fullstack", label: "Full Stack" },
    { id: "systems", label: "Systems & Tools" },
  ];

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.sectionHeader}>
        <div className={styles.badge}>
          <Sparkles size={14} />
          <span>Selected Portfolio</span>
        </div>
        <h2 className={styles.sectionTitle}>Featured Engineering Work</h2>
        <p className={styles.sectionSub}>
          Click on any card to view the complete system architecture and technical specs.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className={styles.tabBar}>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`${styles.tabBtn} ${activeCategory === cat.id ? styles.activeTab : ""}`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div className={styles.projectsGrid} layout>
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className={`${styles.projectCard} glass-card`}
              onClick={() => setSelectedProject(project)}
            >
              <div className={styles.cardTop}>
                <span className={styles.categoryPill}>{project.category.toUpperCase()}</span>
                <div className={styles.linkGroup}>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.iconLink}
                      onClick={(e) => e.stopPropagation()}
                      title="View GitHub Repository"
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDesc}>{project.shortDesc}</p>

              {/* Tech Badges */}
              <div className={styles.techBadges}>
                {project.tech.map((t) => (
                  <span key={t} className={styles.techTag}>
                    {t}
                  </span>
                ))}
              </div>

              {/* View Architecture trigger button */}
              <div className={styles.cardFooter}>
                <span className={styles.specBtn}>
                  <Layers size={14} />
                  <span>View Architecture</span>
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Spec Modal Drawer */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
