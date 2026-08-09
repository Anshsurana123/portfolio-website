"use client";

import { motion } from "framer-motion";
import { Cpu, Terminal, Code2, Database, Sparkles, Layers, ShieldCheck, Server } from "lucide-react";
import styles from "./SkillMatrix.module.css";

export default function SkillMatrix() {
  const skillCategories = [
    {
      title: "Core Languages",
      icon: <Terminal size={18} />,
      skills: [
        { name: "Rust", level: 92, tag: "Vector DB Engine" },
        { name: "Go", level: 88, tag: "Bitfrost Gateway" },
        { name: "Python", level: 95, tag: "Primary / Daily" },
        { name: "TypeScript", level: 92, tag: "Full-Stack" },
        { name: "Kotlin", level: 85, tag: "Android AI" },
      ],
    },
    {
      title: "AI & Systems Architecture",
      icon: <Cpu size={18} />,
      skills: [
        { name: "HNSW & Vector Indexing", level: 94, tag: "Vector DB" },
        { name: "SAM 3 & Vision Tracking", level: 90, tag: "ChronoGuard AI" },
        { name: "ONNX Runtime & Local AI", level: 88, tag: "Jago Voice AI" },
        { name: "BM25F + BGE Hybrid Search", level: 92, tag: "Talent Radar" },
      ],
    },
    {
      title: "Web & Microservices",
      icon: <Layers size={18} />,
      skills: [
        { name: "Next.js / App Router", level: 94, tag: "Production Web" },
        { name: "FastAPI / Python", level: 90, tag: "High-Throughput APIs" },
        { name: "PostgreSQL & Prisma", level: 88, tag: "Data Modeling" },
        { name: "WebSockets & Streaming", level: 86, tag: "Real-time Edge" },
      ],
    },
    {
      title: "DevOps & Infrastructure",
      icon: <Server size={18} />,
      skills: [
        { name: "GitHub Actions CI/CD", level: 92, tag: "Automated Shipping" },
        { name: "Docker & Containers", level: 85, tag: "Deployment" },
        { name: "Linux / Shell Scripting", level: 90, tag: "System Admin" },
        { name: "OWASP & Security", level: 84, tag: "Security Audits" },
      ],
    },
  ];

  return (
    <section id="stack" className={styles.section}>
      <div className={styles.sectionHeader}>
        <div className={styles.badge}>
          <Sparkles size={14} />
          <span>Technical Proficiency</span>
        </div>
        <h2 className={styles.sectionTitle}>Skill Matrix & Stack</h2>
        <p className={styles.sectionSub}>
          Tested tools and technologies powering production applications and daily ships.
        </p>
      </div>

      <div className={styles.grid}>
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            className={`${styles.categoryCard} glass-card`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.iconBox}>{cat.icon}</div>
              <h3 className={styles.categoryTitle}>{cat.title}</h3>
            </div>

            <div className={styles.skillList}>
              {cat.skills.map((skill) => (
                <div key={skill.name} className={styles.skillRow}>
                  <div className={styles.skillMeta}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <span className={styles.skillTag}>{skill.tag}</span>
                  </div>
                  <div className={styles.barBg}>
                    <motion.div
                      className={styles.barFill}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
