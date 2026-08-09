"use client";

import { useState } from "react";
import { Mail, Copy, Check, Globe, ArrowUpRight, Heart, Sparkles } from "lucide-react";
import styles from "./ContactSection.module.css";

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "anshsuran01@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={`${styles.contactBox} glass-card`}>
        <div className={styles.badge}>
          <Sparkles size={14} />
          <span>Let&apos;s Build Together</span>
        </div>

        <h2 className={styles.title}>Have a Vision or High-Impact Project?</h2>
        <p className={styles.sub}>
          Whether you need a full-stack web platform, an autonomous AI swarm, or a real-time computer vision system, let&apos;s turn ideas into shipped code.
        </p>

        {/* Email Copy Bar */}
        <div className={styles.emailBox}>
          <Mail size={18} className={styles.mailIcon} />
          <span className={styles.emailText}>{email}</span>
          <button
            onClick={handleCopyEmail}
            className={styles.copyBtn}
            title="Copy Email"
          >
            {copied ? (
              <>
                <Check size={16} className={styles.checkIcon} />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy size={16} />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </div>

        {/* Action Links */}
        <div className={styles.linksRow}>
          <a
            href={`mailto:${email}`}
            className={styles.primaryLink}
          >
            <Mail size={18} />
            <span>Send Direct Message</span>
          </a>

          <a
            href="https://github.com/Anshsurana123"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <GithubIcon size={18} />
            <span>GitHub Profile</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      {/* Footer copyright line */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <span>Designed & Built by <strong>Ansh Surana</strong></span>
          <span className={styles.divider}>•</span>
          <span>Next.js 16 • React 19 • Framer Motion</span>
        </div>
      </footer>
    </section>
  );
}
