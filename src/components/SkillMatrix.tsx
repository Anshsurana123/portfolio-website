"use client";

import { motion } from "framer-motion";
import styles from "./SkillMatrix.module.css";

const SKILLS = [
  {
    category: "Languages",
    items: [
      { name: "Rust", hint: "Search Engine, KV Store" },
      { name: "Go", hint: "CLI Tools, Services" },
      { name: "Python", hint: "AI/ML, Backends" },
      { name: "TypeScript", hint: "Web Frontends, Server" },
      { name: "Kotlin", hint: "Android Development" },
      { name: "SQL", hint: "Database Queries" },
    ],
  },
  {
    category: "AI & Systems",
    items: [
      { name: "HNSW Indexing", hint: "Vector Search Engine" },
      { name: "SAM 3", hint: "Computer Vision" },
      { name: "ONNX Runtime", hint: "Model Inference" },
      { name: "BM25F", hint: "Text Retrieval" },
      { name: "BGE Embeddings", hint: "Semantic Search" },
      { name: "Product Quantization", hint: "Vector Compression" },
    ],
  },
  {
    category: "Web & APIs",
    items: [
      { name: "Next.js", hint: "Full-stack React" },
      { name: "React", hint: "UI Components" },
      { name: "FastAPI", hint: "Python Microservices" },
      { name: "PostgreSQL", hint: "Relational Data" },
      { name: "Supabase", hint: "BaaS & Auth" },
      { name: "WebSockets", hint: "Real-time sync" },
    ],
  },
  {
    category: "Infrastructure",
    items: [
      { name: "Docker", hint: "Containerization" },
      { name: "GitHub Actions", hint: "CI/CD" },
      { name: "Linux", hint: "Server Administration" },
      { name: "Git", hint: "Version Control" },
      { name: "OWASP", hint: "Security Practices" },
    ],
  },
];

export default function SkillMatrix() {
  return (
    <section className="section">
      <div className="section-label">// stack</div>
      <h2 className="section-title">Technologies I use</h2>

      <div className={styles.grid}>
        {SKILLS.map((group, index) => (
          <motion.div
            key={group.category}
            className={styles.category}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <h3 className={styles.categoryTitle}>{group.category}</h3>
            <div className={styles.tags}>
              {group.items.map((skill) => (
                <span key={skill.name} className={styles.tag} title={skill.hint}>
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
