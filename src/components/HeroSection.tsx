"use client";

import { motion } from "framer-motion";
import styles from "./HeroSection.module.css";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className={styles.greeting}>hey, i&apos;m ansh —</p>
        <h1 className={styles.headline}>
          I build systems<br />
          that <span className={styles.accent}>think.</span>
        </h1>
        <p className={styles.description}>
          I write Rust, Go, and Python to build vector databases, voice AI, real-time vision systems, and production infrastructure. Open source everything.
        </p>
        <div className={styles.actions}>
          <Link href="#projects" className={styles.primaryBtn}>
            See my work ↓
          </Link>
          <a href="https://github.com/Anshsurana123" target="_blank" rel="noopener noreferrer" className={styles.secondaryBtn}>
            GitHub →
          </a>
        </div>
      </motion.div>
    </section>
  );
}
