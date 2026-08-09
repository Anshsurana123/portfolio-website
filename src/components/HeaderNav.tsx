"use client";

import { useState, useEffect } from "react";
import { Sparkles, Volume2, VolumeX, Palette, Code2, Terminal, FolderGit2, Mail } from "lucide-react";
import styles from "./HeaderNav.module.css";

interface HeaderNavProps {
  currentTheme: string;
  setTheme: (theme: string) => void;
}

export default function HeaderNav({ currentTheme, setTheme }: HeaderNavProps) {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const playClickSound = () => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch {
      // Audio context error ignore
    }
  };

  const themes = [
    { id: "cyber", label: "Cyber Cyan", color: "#06b6d4" },
    { id: "aurora", label: "Aurora Emerald", color: "#10b981" },
    { id: "violet", label: "Neon Violet", color: "#a855f7" },
    { id: "sunset", label: "Sunset Ember", color: "#f97316" },
  ];

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
    if (!soundEnabled) playClickSound();
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navContainer}>
        {/* Logo */}
        <a href="#" className={styles.logo} onClick={playClickSound}>
          <span className={styles.logoIcon}>
            <Code2 size={20} />
          </span>
          <span className={styles.logoText}>Ansh Surana</span>
        </a>

        {/* Navigation Links */}
        <nav className={styles.navLinks}>
          <a href="#hero" className={styles.navLink} onClick={playClickSound}>
            Home
          </a>
          <a href="#terminal" className={styles.navLink} onClick={playClickSound}>
            <Terminal size={14} className={styles.linkIcon} /> CLI
          </a>
          <a href="#projects" className={styles.navLink} onClick={playClickSound}>
            <FolderGit2 size={14} className={styles.linkIcon} /> Work
          </a>
          <a href="#stack" className={styles.navLink} onClick={playClickSound}>
            <Sparkles size={14} className={styles.linkIcon} /> Stack
          </a>
          <a href="#contact" className={styles.navLink} onClick={playClickSound}>
            <Mail size={14} className={styles.linkIcon} /> Contact
          </a>
        </nav>

        {/* Right Controls */}
        <div className={styles.controls}>
          {/* Availability Badge */}
          <div className={styles.statusBadge}>
            <span className={styles.beacon}></span>
            <span className={styles.statusText}>Available</span>
          </div>

          {/* Theme Selector */}
          <div className={styles.themeSelector}>
            <Palette size={16} className={styles.themeIcon} />
            <div className={styles.themeDots}>
              {themes.map((t) => (
                <button
                  key={t.id}
                  title={t.label}
                  onClick={() => {
                    setTheme(t.id);
                    playClickSound();
                  }}
                  className={`${styles.themeDot} ${currentTheme === t.id ? styles.activeTheme : ""}`}
                  style={{ backgroundColor: t.color }}
                />
              ))}
            </div>
          </div>

          {/* Audio Toggle */}
          <button
            onClick={toggleSound}
            className={`${styles.iconBtn} ${soundEnabled ? styles.activeIconBtn : ""}`}
            title={soundEnabled ? "Mute UI Audio" : "Enable UI Beeps"}
          >
            {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>
        </div>
      </div>
    </header>
  );
}
