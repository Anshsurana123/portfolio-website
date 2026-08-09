"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Flame, Terminal, Sparkles, Send, Clock, ShieldCheck } from "lucide-react";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const roles = [
    "AI Daily Builder",
    "Full-Stack Architect",
    "Computer Vision Specialist",
    "Autonomous Swarm Dev",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [timeString, setTimeString] = useState<string>("");

  useEffect(() => {
    const roleTimer = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);

    const updateClock = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZoneName: "short",
        })
      );
    };

    updateClock();
    const clockTimer = setInterval(updateClock, 1000);

    return () => {
      clearInterval(roleTimer);
      clearInterval(clockTimer);
    };
  }, [roles.length]);

  return (
    <section id="hero" className={styles.heroSection}>
      <motion.div
        className={styles.contentContainer}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Top Meta Badges */}
        <div className={styles.metaRow}>
          <div className={styles.streakBadge}>
            <Flame size={16} className={styles.flameIcon} />
            <span>42-Day Shipping Streak</span>
          </div>

          {timeString && (
            <div className={styles.clockBadge}>
              <Clock size={14} className={styles.clockIcon} />
              <span>{timeString}</span>
            </div>
          )}

          <div className={styles.verificationBadge}>
            <ShieldCheck size={14} className={styles.shieldIcon} />
            <span>Verified Builder</span>
          </div>
        </div>

        {/* Dynamic Typing Title */}
        <h1 className={styles.headline}>
          Crafting Intelligent Systems. <br />
          <span className="gradient-text">Shipping Code Daily.</span>
        </h1>

        {/* Dynamic Sub-role cycler */}
        <div className={styles.roleContainer}>
          <span className={styles.rolePrefix}>Specializing in</span>
          <motion.div
            key={roles[currentRoleIndex]}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className={styles.roleTag}
          >
            <Sparkles size={16} className={styles.roleIcon} />
            <span>{roles[currentRoleIndex]}</span>
          </motion.div>
        </div>

        <p className={styles.subtext}>
          Focused on building production-grade autonomous agent swarms, real-time computer vision pipelines, and full-stack AI web platforms.
        </p>

        {/* CTA Buttons */}
        <div className={styles.ctaGroup}>
          <a href="#projects" className={styles.primaryBtn}>
            <span>Explore Projects</span>
            <ArrowDown size={18} />
          </a>

          <a href="#terminal" className={styles.secondaryBtn}>
            <Terminal size={18} />
            <span>Launch CLI</span>
          </a>

          <a href="mailto:anshsuran01@gmail.com" className={styles.outlineBtn}>
            <Send size={16} />
            <span>Get in Touch</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
