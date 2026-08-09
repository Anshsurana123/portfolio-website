"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Cpu, Layers, Sparkles, CheckCircle2 } from "lucide-react";
import styles from "./ProjectModal.module.css";

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  tech: string[];
  githubUrl: string;
  demoUrl?: string;
  featured?: boolean;
  specDetails: {
    architecture: string;
    highlights: string[];
    metrics?: string;
  };
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className={styles.backdrop} onClick={onClose}>
        <motion.div
          className={`${styles.modalCard} glass-card`}
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        >
          {/* Header */}
          <div className={styles.modalHeader}>
            <div className={styles.titleArea}>
              <span className={styles.categoryBadge}>{project.category.toUpperCase()}</span>
              <h2 className={styles.projectTitle}>{project.title}</h2>
            </div>
            <button onClick={onClose} className={styles.closeBtn} title="Close Modal">
              <X size={20} />
            </button>
          </div>

          {/* Modal Body */}
          <div className={styles.modalBody}>
            <p className={styles.fullDesc}>{project.fullDesc}</p>

            {/* Architecture Card */}
            <div className={styles.sectionBlock}>
              <div className={styles.blockTitle}>
                <Layers size={16} className={styles.blockIcon} />
                <span>Architecture & System Design</span>
              </div>
              <p className={styles.archText}>{project.specDetails.architecture}</p>
            </div>

            {/* Key Highlights */}
            <div className={styles.sectionBlock}>
              <div className={styles.blockTitle}>
                <Sparkles size={16} className={styles.blockIcon} />
                <span>Key Technical Highlights</span>
              </div>
              <ul className={styles.highlightList}>
                {project.specDetails.highlights.map((item, idx) => (
                  <li key={idx} className={styles.highlightItem}>
                    <CheckCircle2 size={16} className={styles.checkIcon} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Metrics if present */}
            {project.specDetails.metrics && (
              <div className={styles.metricsBox}>
                <Cpu size={16} className={styles.metricsIcon} />
                <span><strong>Impact Metric:</strong> {project.specDetails.metrics}</span>
              </div>
            )}

            {/* Tech Stack Pills */}
            <div className={styles.techSection}>
              <span className={styles.techLabel}>Technologies Used:</span>
              <div className={styles.techList}>
                {project.tech.map((t) => (
                  <span key={t} className={styles.techPill}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer Links */}
          <div className={styles.modalFooter}>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.githubBtn}
              >
                <GithubIcon size={18} />
                <span>View Source Code</span>
              </a>
            )}

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.demoBtn}
              >
                <ExternalLink size={18} />
                <span>Live Deployment</span>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
