"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { Terminal as TerminalIcon, CornerDownLeft, Play, Sparkles } from "lucide-react";
import styles from "./InteractiveTerminal.module.css";

interface TerminalLog {
  command?: string;
  output: string | React.ReactNode;
  isError?: boolean;
}

export default function InteractiveTerminal() {
  const [inputVal, setInputVal] = useState("");
  const [logs, setLogs] = useState<TerminalLog[]>([
    {
      output: (
        <div>
          <span style={{ color: "var(--accent-primary)", fontWeight: "bold" }}>
            Ansh Surana Interactive CLI [Version 2.4.0]
          </span>
          <br />
          Type <code style={{ color: "var(--accent-secondary)" }}>help</code> to see available commands or click quick chips below.
        </div>
      ),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [logs]);

  const executeCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    let response: React.ReactNode = "";

    switch (trimmed) {
      case "help":
        response = (
          <div className={styles.outputGrid}>
            <div><span className={styles.cmdHighlight}>whoami</span> - Brief introduction & role</div>
            <div><span className={styles.cmdHighlight}>projects</span> - Featured open-source & production projects</div>
            <div><span className={styles.cmdHighlight}>stack</span> - Tech stack & languages breakdown</div>
            <div><span className={styles.cmdHighlight}>contact</span> - How to get in touch & social links</div>
            <div><span className={styles.cmdHighlight}>streak</span> - Daily shipping stats & status</div>
            <div><span className={styles.cmdHighlight}>clear</span> - Clear output console</div>
          </div>
        );
        break;

      case "whoami":
        response = (
          <div>
            🚀 <strong>Ansh Surana</strong> — Full-Stack AI Engineer & Systems Developer.<br />
            Obsessed with making AI build software automatically, real-time computer vision, and privacy-first Android systems. Currently shipping new code every single day.
          </div>
        );
        break;

      case "projects":
        response = (
          <div className={styles.projectList}>
            <div>🔹 <strong>Vector DB From Scratch</strong> — HNSW indexing, 8x PQ compression & WAL crash recovery (Rust/Axum)</div>
            <div>🔹 <strong>Jago (Jagrut)</strong> — On-device ONNX wake word & Hinglish voice assistant (Kotlin/Android/ONNX)</div>
            <div>🔹 <strong>ChronoGuard AI</strong> — Real-time SAM 3 surveillance & geofencing engine (Python/FastAPI/WebSockets)</div>
            <div>🔹 <strong>Bitfrost (Bifröst)</strong> — Zero-trust AI API gateway & pgvector semantic cache (Go/Supabase/Next.js)</div>
            <div>🔹 <strong>Talent Radar</strong> — 4-stage hybrid BM25F + BGE candidate retrieval & MiniLM ranker (Python/Docker)</div>
            <div style={{ marginTop: "6px", fontSize: "0.82rem", opacity: 0.8 }}>Scroll down to the Projects section to inspect complete architecture specs & code!</div>
          </div>
        );
        break;

      case "stack":
        response = (
          <div>
            ⚡ <strong>Core Languages:</strong> Rust, Go, Python, TypeScript, Kotlin, SQL<br />
            🌐 <strong>Frontend & Mobile:</strong> Next.js (App Router), React, Android Native (Kotlin), Tailwind CSS<br />
            🤖 <strong>AI & Systems:</strong> Meta SAM 3, ONNX Runtime, BGE Embeddings, HNSW, FastAPI, Supabase / pgvector<br />
            🛠️ <strong>DevOps & Tools:</strong> Docker, Git, GitHub Actions, Linux NDK, WebSockets
          </div>
        );
        break;

      case "contact":
        response = (
          <div>
            📧 <strong>Email:</strong> <a href="mailto:anshsuran01@gmail.com" className={styles.termLink}>anshsuran01@gmail.com</a><br />
            🐙 <strong>GitHub:</strong> <a href="https://github.com/Anshsurana123" target="_blank" rel="noreferrer" className={styles.termLink}>github.com/Anshsurana123</a><br />
            💼 <strong>Status:</strong> Open for high-impact AI/Full-Stack roles & collaborations.
          </div>
        );
        break;

      case "streak":
        response = (
          <div>
            🔥 <strong>Shipping Streak:</strong> 42 Consecutive Days<br />
            📦 <strong>Repos Shipped:</strong> 15+ Production Repositories<br />
            ⚡ <strong>Status:</strong> Active & Shipped Today!
          </div>
        );
        break;

      case "clear":
        setLogs([]);
        setInputVal("");
        return;

      default:
        response = (
          <span style={{ color: "#ef4444" }}>
            Command not recognized: &quot;{trimmed}&quot;. Type <code style={{ color: "var(--accent-primary)" }}>help</code> for available commands.
          </span>
        );
        break;
    }

    setLogs((prev) => [...prev, { command: cmdStr, output: response }]);
    setInputVal("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(inputVal);
    }
  };

  const quickChips = ["help", "whoami", "projects", "stack", "contact", "streak", "clear"];

  return (
    <section id="terminal" className={styles.terminalSection}>
      <div className={styles.sectionHeader}>
        <div className={styles.badge}>
          <Sparkles size={14} />
          <span>Interactive Playground</span>
        </div>
        <h2 className={styles.sectionTitle}>Developer CLI Console</h2>
        <p className={styles.sectionSub}>
          Query my profile, skills, and projects directly using terminal commands.
        </p>
      </div>

      <div className={`${styles.terminalWindow} glass-card`}>
        {/* Top Title Bar */}
        <div className={styles.titleBar}>
          <div className={styles.windowButtons}>
            <span className={`${styles.dot} ${styles.red}`}></span>
            <span className={`${styles.dot} ${styles.yellow}`}></span>
            <span className={`${styles.dot} ${styles.green}`}></span>
          </div>
          <div className={styles.windowTitle}>
            <TerminalIcon size={14} />
            <span>ansh@portfolio:~ (bash)</span>
          </div>
          <div style={{ width: "40px" }}></div>
        </div>

        {/* Console Logs Area */}
        <div className={styles.consoleBody}>
          {logs.map((log, i) => (
            <div key={i} className={styles.logItem}>
              {log.command && (
                <div className={styles.promptLine}>
                  <span className={styles.userPrompt}>ansh@portfolio:~$</span>
                  <span className={styles.commandText}>{log.command}</span>
                </div>
              )}
              <div className={styles.outputLine}>{log.output}</div>
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Input Bar */}
        <div className={styles.inputBar}>
          <span className={styles.userPrompt}>ansh@portfolio:~$</span>
          <input
            type="text"
            className={styles.termInput}
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help' or click a chip..."
          />
          <button
            onClick={() => executeCommand(inputVal)}
            className={styles.sendBtn}
            title="Execute Command"
          >
            <CornerDownLeft size={16} />
          </button>
        </div>

        {/* Quick Command Chips */}
        <div className={styles.chipBar}>
          <span className={styles.chipLabel}>Quick Run:</span>
          {quickChips.map((chip) => (
            <button
              key={chip}
              onClick={() => executeCommand(chip)}
              className={styles.chipBtn}
            >
              <Play size={10} />
              <span>{chip}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
