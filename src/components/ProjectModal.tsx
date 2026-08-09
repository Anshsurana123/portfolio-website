"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import styles from "./ProjectModal.module.css";

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path>
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
  specDetails?: {
    architecture?: string;
    highlights?: string[];
    metrics?: string;
  };
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={onClose}
          />
          <motion.div
            className={styles.drawer}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
              <X size={24} />
            </button>

            <div className={styles.content}>
              <div className={styles.category}>{project.category}</div>
              <h2 className={styles.title}>{project.title}</h2>
              
              <p className={styles.fullDesc}>{project.fullDesc}</p>

              {project.specDetails?.architecture && (
                <div className={styles.section}>
                  <div className={styles.sectionLabel}>Architecture</div>
                  <div className={styles.architectureBox}>
                    {project.specDetails.architecture}
                  </div>
                </div>
              )}

              {project.specDetails?.highlights && project.specDetails.highlights.length > 0 && (
                <div className={styles.section}>
                  <div className={styles.sectionLabel}>Highlights</div>
                  <ul className={styles.highlightsList}>
                    {project.specDetails.highlights.map((highlight, idx) => (
                      <li key={idx}>&mdash; {highlight}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.specDetails?.metrics && (
                <div className={styles.section}>
                  <div className={styles.sectionLabel}>Impact</div>
                  <div className={styles.metricsValue}>
                    {project.specDetails.metrics}
                  </div>
                </div>
              )}

              <div className={styles.techSection}>
                <div className={styles.techList}>
                  {project.tech.join(", ")}
                </div>
              </div>

              <div className={styles.footerLinks}>
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className={styles.link}>
                  <GithubIcon /> View source &rarr;
                </a>
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noreferrer" className={styles.link}>
                    Live demo &rarr;
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
