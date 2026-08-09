"use client";

import { motion } from "framer-motion";
import { FolderCheck, Flame, GitBranch, Zap } from "lucide-react";
import styles from "./ImpactStats.module.css";

export default function ImpactStats() {
  const stats = [
    {
      label: "Shipped Projects",
      value: "15+",
      desc: "Full-stack & AI production repos",
      icon: <FolderCheck size={24} />,
    },
    {
      label: "Shipping Streak",
      value: "42 Days",
      desc: "Daily automated commits & builds",
      icon: <Flame size={24} />,
    },
    {
      label: "Open Source",
      value: "100%",
      desc: "Transparent code architecture",
      icon: <GitBranch size={24} />,
    },
    {
      label: "Edge Vision Latency",
      value: "<15ms",
      desc: "Real-time SAM 2 tracking",
      icon: <Zap size={24} />,
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            className={`${styles.statCard} glass-card`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className={styles.iconWrapper}>{s.icon}</div>
            <div className={styles.value}>{s.value}</div>
            <div className={styles.label}>{s.label}</div>
            <div className={styles.desc}>{s.desc}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
