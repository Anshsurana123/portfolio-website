"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./ProjectShowcase.module.css";
import ProjectModal, { ProjectData } from "./ProjectModal";

const projects: ProjectData[] = [
  {
    id: "vector-db",
    title: "Vector DB From Scratch",
    category: "systems",
    shortDesc: "Production-grade, embedded & RESTful vector database implemented from first principles in Rust.",
    fullDesc: "Built for ultra-low latency ANN search in Rust. Features HNSW graph indexing (Malkov & Yashunin 2018), 8x Product Quantization (PQ) compression, append-only Write-Ahead Log (WAL) with sub-2s crash recovery, and thread-safe concurrent mutations.",
    tech: ["Rust", "HNSW Graph", "SIMD", "WAL Recovery", "Product Quantization", "Axum REST"],
    githubUrl: "https://github.com/Anshsurana123/vector-db-from-scratch",
    featured: true,
    specDetails: {
      architecture: "Multi-crate Rust cargo workspace (vectordb-core, vectordb-server, vectordb-bench) using fine-grained parking_lot::RwLock for lock-free read searches during active background insertions.",
      highlights: [
        "HNSW Graph Indexing with Algorithm 4 Heuristic Diversity Selection & zero-allocation visited markers",
        "Append-Only Write-Ahead Log (WAL) with crc32fast checksums & sub-2s recovery for 100k vectors",
        "Product Quantization (PQ) 8x RAM compression (512B to 64B) with Asymmetric Distance Computation (ADC)",
        "In-Graph Pre-filtering & Hybrid Query Planner (BruteForceScan, FilteredScan, HnswFiltered)"
      ],
      metrics: "8x RAM compression & sub-2s crash recovery for 100,000 vectors"
    }
  },
  {
    id: "jagrut",
    title: "Jago (Jagrut)",
    category: "ai",
    shortDesc: "Production-grade AI voice assistant for Android with on-device ONNX wake word & closed-loop GUI automation.",
    fullDesc: "Voice-controlled Android assistant natively parsing Hindi, English, and Hinglish. Features an on-device 3-stage ONNX wake word pipeline ('Jaagrut'), 1ms fuzzy command matcher, Gemini intent compiler, accessibility GUI automation, and hybrid STT/TTS routing.",
    tech: ["Kotlin", "Android", "ONNX Runtime", "Hinglish NLU", "Accessibility API", "Sarvam AI"],
    githubUrl: "https://github.com/Anshsurana123/jagrut",
    featured: true,
    specDetails: {
      architecture: "Persistent Android Foreground Service running a 3-stage ONNX Runtime audio pipeline (melspectrogram, embedding, jaag_ruut LSTM) connected to a hierarchical speech translation & accessibility macro engine.",
      highlights: [
        "On-device ONNX keyword spotter ('Jaagrut') with zero cloud calls for 100% offline privacy",
        "Hierarchical NLU with ~1ms Hinglish fuzzy command matching & Levenshtein distance correction",
        "Accessibility-powered closed-loop UI automation with dynamic element resolvers",
        "Hybrid STT/TTS fallback routing across Sarvam AI (sarvam-30b), Vosk offline, and Gemini 3.5 Flash"
      ],
      metrics: "~1ms local command execution latency & 100% on-device wake privacy"
    }
  },
  {
    id: "chronoguard",
    title: "ChronoGuard AI",
    category: "vision",
    shortDesc: "Real-time distributed surveillance system leveraging Meta's Segment Anything 3 (SAM 3).",
    fullDesc: "Edge-to-cloud video surveillance platform. Uses Meta's SAM 3 memory-based video predictor for click-to-track precision object monitoring, dynamic polygon geofencing, temporal state backtracking, and sub-100ms WebSocket streaming.",
    tech: ["Python", "SAM 3", "FastAPI", "Next.js 14", "WebSockets", "PyTorch"],
    githubUrl: "https://github.com/Anshsurana123/ChronoGuard",
    featured: true,
    specDetails: {
      architecture: "Local FastAPI edge stream engine running local zero-trust privacy filters, proxying video frames to remote Colab GPU inference nodes running SAM 3.",
      highlights: [
        "Click-any-object precision tracking powered by Meta's SAM 3 memory predictor model",
        "Dynamic polygon geofencing with real-time zone intrusion alerts",
        "Temporal persistence & backtracking logic when objects are obscured or lost",
        "Sub-100ms WebSocket video telemetry & Next.js dashboard streaming"
      ],
      metrics: "Sub-100ms WebSocket video streaming & live tracking telemetry"
    }
  },
  {
    id: "bitfrost",
    title: "Bifröst (Bitfrost)",
    category: "fullstack",
    shortDesc: "Enterprise B2B AI Gateway & Sovereign Proxy with dual-layer pgvector semantic caching.",
    fullDesc: "Zero-trust reverse proxy sitting transparently between client applications and upstream LLMs (Gemini). Features multi-tenant virtual key vaults, HMAC-SHA256 cryptographic device signing, prompt injection quarantine, and dual-layer semantic caching that cuts token costs by up to 99%.",
    tech: ["Go", "Next.js", "Supabase", "PostgreSQL", "pgvector", "WebSockets"],
    githubUrl: "https://github.com/Anshsurana123/Bitfrost",
    featured: true,
    specDetails: {
      architecture: "High-performance Go reverse proxy backed by Supabase PostgreSQL pgvector, local in-memory hot cache, and a real-time WebSocket admin telemetry panel.",
      highlights: [
        "Multi-Tenant Key Vault with virtual keys (bf-vk-...) & hot provider key rotation",
        "Zero-Trust HMAC-SHA256 device fingerprinting & 60s anti-replay window protection",
        "Dual-Layer L1 Exact Hash & L2 Semantic Cosine Cache (threshold >= 0.88)",
        "Synchronous Ollama Cloud threat auditor quarantining adversarial prompt injection attacks"
      ],
      metrics: "Cuts upstream LLM API token costs by up to 99%"
    }
  },
  {
    id: "job-recruitment",
    title: "Talent Radar (Job Recruitment AI)",
    category: "ai",
    shortDesc: "Four-stage candidate discovery & ranking pipeline evaluating 100k profiles with hybrid BM25F + BGE search.",
    fullDesc: "Production-grade talent evaluation system designed to identify top matches across 100,000 candidate profiles. Combines BM25F keyword scoring, BAAI BGE-small semantic embeddings, composite trajectory scoring, and Cross-Encoder MiniLM re-ranking.",
    tech: ["Python", "FastAPI", "BM25F", "BGE Embeddings", "MiniLM", "Docker"],
    githubUrl: "https://github.com/Anshsurana123/job-recruitment",
    featured: true,
    specDetails: {
      architecture: "4-stage pipeline: (1) Hybrid BM25F + BGE retrieval, (2) Composite trajectory scoring & honeypot filtering, (3) Cross-Encoder MiniLM re-ranking, (4) Deterministic reasoning generation.",
      highlights: [
        "Global Lexical (BM25F) & Semantic (BAAI/bge-small-en-v1.5) Hybrid Min-Max Fusion (0.60/0.40)",
        "Composite trajectory scoring evaluating target experience (5-9 yrs), prestige, and job-hopping penalties",
        "Stage 3 Cross-Encoder MiniLM deep re-ranking over candidate top-tier lists",
        "Automated tie-breaking & dynamic submission reasoning generation"
      ],
      metrics: "Evaluates 100,000 candidate profiles across 4 deep AI stages"
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

const categoryMap: Record<string, string> = {
  "All": "all",
  "Systems": "systems",
  "AI": "ai",
  "Vision": "vision",
  "Full Stack": "fullstack",
};

const categories = ["All", "Systems", "AI", "Vision", "Full Stack"];

export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === categoryMap[activeCategory]);

  return (
    <section className="section" id="projects">
      <div className={styles.header}>
        <span className="section-label">// projects</span>
        <h2 className="section-title">What I&apos;ve built</h2>
        <p className="section-subtitle">
          Production systems, from vector databases to voice AI.
        </p>
      </div>

      <div className={styles.filters}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`${styles.filterBtn} ${
              activeCategory === cat ? styles.filterBtnActive : ""
            }`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className={styles.card}
            onClick={() => setSelectedProject(project)}
          >
            <div className={styles.cardTop}>
              <span className={styles.cardNumber}>
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span className={styles.cardCategory}>
                {project.category.toUpperCase()}
              </span>
            </div>
            <h3 className={styles.cardTitle}>{project.title}</h3>
            <p className={styles.cardDesc}>{project.shortDesc}</p>
            <div className={styles.cardBottom}>
              <span className={styles.techStack}>
                {project.tech.join(" · ")}
              </span>
              <span className={styles.arrow}>&rarr;</span>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
