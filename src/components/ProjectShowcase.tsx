"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Layers, Sparkles } from "lucide-react";
import styles from "./ProjectShowcase.module.css";
import ProjectModal, { ProjectData } from "./ProjectModal";

export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const projects: ProjectData[] = [
    {
      id: "vector-db",
      title: "Vector DB From Scratch",
      category: "systems",
      shortDesc: "High-performance custom vector database built from scratch with HNSW indexing and Cosine/L2 similarity search.",
      fullDesc: "A custom high-dimensional vector search engine built from first principles. Implements Hierarchical Navigable Small World (HNSW) graph indexing, SIMD vector distance calculations, and memory-mapped persistence.",
      tech: ["Python", "C++", "Vector Search", "HNSW", "Algorithms"],
      githubUrl: "https://github.com/Anshsurana123/vector-db-from-scratch",
      featured: true,
      specDetails: {
        architecture: "HNSW graph index structure with memory-mapped disk persistence and SIMD-accelerated dot product and cosine distance kernels.",
        highlights: [
          "Sub-millisecond nearest neighbor query latency on 100k+ vector sets",
          "Custom HNSW graph construction with logarithmic search complexity",
          "Memory-mapped binary file storage for minimal RAM footprint"
        ],
        metrics: "Sub-5ms query latency @ 99.4% recall rate"
      }
    },
    {
      id: "jagrut",
      title: "Jagrut",
      category: "systems",
      shortDesc: "Privacy-first offline Android AI assistant with native local LLM inference.",
      fullDesc: "Native Android application running local GGUF quantized language models entirely on-device without internet dependency or data leakage risks.",
      tech: ["Kotlin", "Android", "On-Device AI", "C++ NDK"],
      githubUrl: "https://github.com/Anshsurana123/jagrut",
      featured: true,
      specDetails: {
        architecture: "Native Kotlin app interfacing with C++ NDK bindings for hardware-accelerated local GGUF model execution.",
        highlights: [
          "Zero network permissions required — 100% offline & private",
          "Sub-100ms first token response on mobile NPU / GPU",
          "Encrypted local vector memory and conversation storage"
        ],
        metrics: "100% local privacy guarantee with zero cloud API calls"
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
      id: "bitfrost",
      title: "Bitfrost (Bifröst)",
      category: "fullstack",
      shortDesc: "Zero-trust API key management and AI proxy administration panel.",
      fullDesc: "Administrative control panel for controlling rate limits, monitoring AI token expenditure, and managing dynamic API keys securely across enterprise microservices.",
      tech: ["TypeScript", "Next.js", "Node.js", "Redis", "Security"],
      githubUrl: "https://github.com/Anshsurana123/Bitfrost",
      featured: true,
      specDetails: {
        architecture: "Next.js admin dashboard backed by Redis token bucket rate limiters and OAuth2 identity management.",
        highlights: [
          "Real-time token usage telemetry analytics",
          "Sub-millisecond API proxy request routing",
          "Role-based access control (RBAC) security"
        ],
        metrics: "Sub-millisecond proxy overhead latency"
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
    }
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "systems", label: "Systems & DBs" },
    { id: "ai", label: "AI & Swarms" },
    { id: "vision", label: "Vision & Edge" },
    { id: "fullstack", label: "Full Stack" },
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
        <h2 className={styles.sectionTitle}>Featured Engineering Projects</h2>
        <p className={styles.sectionSub}>
          Click on any project to view complete system architecture, performance metrics, and specs.
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
