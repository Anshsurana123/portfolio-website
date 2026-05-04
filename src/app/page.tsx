"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Code2, Terminal, Smartphone, Database, Sparkles, Mail, Globe, Cpu } from "lucide-react";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
  };

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>Ansh Surana</div>
        <div className={styles.availabilityBadge}>
          <span className={styles.pulse}></span>
          Available for new projects
        </div>
      </header>

      <motion.div 
        className={styles.bentoGrid}
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Bio / Hero */}
        <motion.div variants={itemVariants} className={`${styles.bentoCard} ${styles.heroCell}`}>
          <h1 className={styles.title}>I ship things.<br/>Every day.</h1>
          <p className={styles.subtitle}>
            Obsessed with making AI build things so I don't have to. <br/>
            Currently <span className={styles.highlight}>shipping something new every single day</span>.
          </p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div variants={itemVariants} className={`${styles.bentoCard} ${styles.stackCell}`}>
          <div className={styles.cardHeader}>
            <span className={styles.cardTitle}>Stack</span>
            <span className={styles.iconWrapper}><Cpu size={18} /></span>
          </div>
          <div className={styles.stackList}>
            <div className={styles.stackItem}><Terminal size={16} /> Python</div>
            <div className={styles.stackItem}><Code2 size={16} /> TypeScript</div>
            <div className={styles.stackItem}><Sparkles size={16} /> Next.js</div>
            <div className={styles.stackItem}><Smartphone size={16} /> Kotlin</div>
            <div className={styles.stackItem}><Database size={16} /> PostgreSQL</div>
          </div>
        </motion.div>

        {/* Project 1 */}
        <motion.div variants={itemVariants} className={`${styles.bentoCard} ${styles.projectCellWide}`}>
          <div className={styles.cardHeader}>
            <span className={styles.cardTitle}>AI Daily Builder</span>
            <a href="https://github.com/Anshsurana123/ai-daily-builder" target="_blank" rel="noopener noreferrer" className={styles.iconWrapper}>
              <ArrowUpRight size={18} />
            </a>
          </div>
          <p className={styles.projectDesc}>
            An AI that builds and ships new micro-projects every single day. Fully automated with GitHub Actions. Set it and forget it.
          </p>
          <div className={styles.projectTags}>
            <span className={styles.tag}>Python</span>
            <span className={styles.tag}>AI</span>
            <span className={styles.tag}>Automation</span>
          </div>
        </motion.div>

        {/* Project 2 */}
        <motion.div variants={itemVariants} className={`${styles.bentoCard} ${styles.projectCellSmall}`}>
          <div className={styles.cardHeader}>
            <span className={styles.cardTitle}>Sark Pharma</span>
            <a href="https://sarkpharmatechservices.vercel.app" target="_blank" rel="noopener noreferrer" className={styles.iconWrapper}>
              <ArrowUpRight size={18} />
            </a>
          </div>
          <p className={styles.projectDesc}>
            Production full-stack web platform.
          </p>
          <div className={styles.projectTags}>
            <span className={styles.tag}>Next.js</span>
            <span className={styles.tag}>PostgreSQL</span>
          </div>
        </motion.div>

        {/* Project 3 */}
        <motion.div variants={itemVariants} className={`${styles.bentoCard} ${styles.projectCellSmall}`}>
          <div className={styles.cardHeader}>
            <span className={styles.cardTitle}>Jago</span>
            <a href="https://github.com/Anshsurana123/jago" target="_blank" rel="noopener noreferrer" className={styles.iconWrapper}>
              <ArrowUpRight size={18} />
            </a>
          </div>
          <p className={styles.projectDesc}>
            Privacy-first offline Android AI assistant.
          </p>
          <div className={styles.projectTags}>
            <span className={styles.tag}>Kotlin</span>
            <span className={styles.tag}>Android</span>
          </div>
        </motion.div>

        {/* Project 4 */}
        <motion.div variants={itemVariants} className={`${styles.bentoCard} ${styles.projectCellWide}`}>
          <div className={styles.cardHeader}>
            <span className={styles.cardTitle}>ChronoGuard AI</span>
            <a href="https://github.com/Anshsurana123/ChronoGuard" target="_blank" rel="noopener noreferrer" className={styles.iconWrapper}>
              <ArrowUpRight size={18} />
            </a>
          </div>
          <p className={styles.projectDesc}>
            Real-time video surveillance system with SAM 2 object tracking and privacy blurring. Distributed architecture with edge streaming and cloud inference.
          </p>
          <div className={styles.projectTags}>
            <span className={styles.tag}>Python</span>
            <span className={styles.tag}>Computer Vision</span>
            <span className={styles.tag}>WebSockets</span>
          </div>
        </motion.div>

        {/* Project 5 */}
        <motion.div variants={itemVariants} className={`${styles.bentoCard} ${styles.projectCellSmall}`}>
          <div className={styles.cardHeader}>
            <span className={styles.cardTitle}>Sentinel Engine</span>
            <a href="https://github.com/Anshsurana123/sentinel" target="_blank" rel="noopener noreferrer" className={styles.iconWrapper}>
              <ArrowUpRight size={18} />
            </a>
          </div>
          <p className={styles.projectDesc}>
            Student intelligence aggregator and academic lineage engine. Translates physics to calculus via Rosetta Engine and verifies claims with SVG-based evidence graphs.
          </p>
          <div className={styles.projectTags}>
            <span className={styles.tag}>TypeScript</span>
            <span className={styles.tag}>Next.js</span>
            <span className={styles.tag}>AI Orchestration</span>
          </div>
        </motion.div>

        {/* Project 6 */}
        <motion.div variants={itemVariants} className={`${styles.bentoCard} ${styles.projectCellSmall}`}>
          <div className={styles.cardHeader}>
            <span className={styles.cardTitle}>Bifröst Dashboard</span>
            <a href="https://github.com/Anshsurana123/bifrost-dashboard" target="_blank" rel="noopener noreferrer" className={styles.iconWrapper}>
              <ArrowUpRight size={18} />
            </a>
          </div>
          <p className={styles.projectDesc}>
            Zero-trust API key management and AI proxy administration panel.
          </p>
          <div className={styles.projectTags}>
            <span className={styles.tag}>TypeScript</span>
            <span className={styles.tag}>Next.js</span>
          </div>
        </motion.div>

        {/* Contact Cell */}
        <motion.div variants={itemVariants} className={`${styles.bentoCard} ${styles.contactCell}`}>
          <div className={styles.contactText}>Let's build together.</div>
          <a href="mailto:anshsuran01@gmail.com" className={styles.contactBtn}>
            Start a conversation
          </a>
        </motion.div>

        {/* Social Links Cell */}
        <motion.div variants={itemVariants} className={styles.linksCell}>
          <a href="https://github.com/Anshsurana123" target="_blank" rel="noopener noreferrer" className={styles.linkCard}>
            <Globe size={24} />
            <span style={{ fontSize: '0.8rem', fontWeight: 500 }}>GitHub</span>
          </a>
          <a href="mailto:anshsuran01@gmail.com" className={styles.linkCard}>
            <Mail size={24} />
            <span style={{ fontSize: '0.8rem', fontWeight: 500 }}>Email</span>
          </a>
        </motion.div>

      </motion.div>
    </main>
  );
}
