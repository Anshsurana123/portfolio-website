"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "anshsuran01@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email", err);
    }
  };

  return (
    <section className={`section ${styles.contactSection}`}>
      <div className="section-label">// contact</div>
      
      <div className={styles.content}>
        <h2 className={styles.heading}>Let's talk.</h2>
        <p className={styles.subtitle}>
          Have a project in mind or want to collaborate? Drop me a line.
        </p>

        <div className={styles.emailContainer}>
          <a href={`mailto:${email}`} className={styles.email}>
            {email}
          </a>
          <button onClick={handleCopy} className={styles.copyBtn}>
            {copied ? "copied ✓" : "copy"}
          </button>
        </div>

        <div className={styles.socialContainer}>
          <a 
            href="https://github.com/Anshsurana123" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <svg 
              viewBox="0 0 24 24" 
              width="18" 
              height="18" 
              stroke="currentColor" 
              strokeWidth="2" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className={styles.githubIcon}
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            github.com/Anshsurana123
            <ArrowUpRight size={14} className={styles.arrowIcon} />
          </a>
        </div>
      </div>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Ansh Surana</p>
      </footer>
    </section>
  );
}
