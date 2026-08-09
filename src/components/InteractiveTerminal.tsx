"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { ArrowRight } from "lucide-react";
import styles from "./InteractiveTerminal.module.css";

interface TerminalLog {
  command?: string;
  output: string | React.ReactNode;
}

export default function InteractiveTerminal() {
  const [inputVal, setInputVal] = useState("");
  const [logs, setLogs] = useState<TerminalLog[]>([
    {
      output: (
        <div>
          <span style={{ color: "var(--accent)", fontWeight: "600" }}>
            Ansh Surana Interactive CLI [Version 2.4.0]
          </span>
          <br />
          Type <code style={{ color: "var(--accent)" }}>help</code> to see available commands or click quick links below.
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
            <div>- <span className={styles.cmdHighlight}>whoami</span> : Brief introduction & role</div>
            <div>- <span className={styles.cmdHighlight}>projects</span> : Featured open-source & production projects</div>
            <div>- <span className={styles.cmdHighlight}>stack</span> : Tech stack & languages breakdown</div>
            <div>- <span className={styles.cmdHighlight}>contact</span> : How to get in touch & social links</div>
            <div>- <span className={styles.cmdHighlight}>clear</span> : Clear output console</div>
          </div>
        );
        break;

      case "whoami":
        response = (
          <div>
            <strong>Ansh Surana</strong> — Full-Stack AI Engineer & Systems Developer.<br />
            Obsessed with making AI build software automatically, real-time computer vision, and privacy-first Android systems. Currently shipping new code every single day.
          </div>
        );
        break;

      case "projects":
        response = (
          <div className={styles.projectList}>
            <div>- <strong>Vector DB From Scratch</strong> — HNSW indexing, 8x PQ compression & WAL crash recovery (Rust/Axum)</div>
            <div>- <strong>Jago (Jagrut)</strong> — On-device ONNX wake word & Hinglish voice assistant (Kotlin/Android/ONNX)</div>
            <div>- <strong>ChronoGuard AI</strong> — Real-time SAM 3 surveillance & geofencing engine (Python/FastAPI/WebSockets)</div>
            <div>- <strong>Bitfrost (Bifröst)</strong> — Zero-trust AI API gateway & pgvector semantic cache (Go/Supabase/Next.js)</div>
            <div>- <strong>Talent Radar</strong> — 4-stage hybrid BM25F + BGE candidate retrieval & MiniLM ranker (Python/Docker)</div>
            <div style={{ marginTop: "6px", fontSize: "0.82rem", opacity: 0.8 }}>Scroll down to the Projects section to inspect complete architecture specs & code!</div>
          </div>
        );
        break;

      case "stack":
        response = (
          <div>
            - <strong>Core Languages:</strong> Rust, Go, Python, TypeScript, Kotlin, SQL<br />
            - <strong>Frontend & Mobile:</strong> Next.js (App Router), React, Android Native (Kotlin), Tailwind CSS<br />
            - <strong>AI & Systems:</strong> Meta SAM 3, ONNX Runtime, BGE Embeddings, HNSW, FastAPI, Supabase / pgvector<br />
            - <strong>DevOps & Tools:</strong> Docker, Git, GitHub Actions, Linux NDK, WebSockets
          </div>
        );
        break;

      case "contact":
        response = (
          <div>
            - <strong>Email:</strong> <a href="mailto:anshsuran01@gmail.com" className={styles.termLink}>anshsuran01@gmail.com</a><br />
            - <strong>GitHub:</strong> <a href="https://github.com/Anshsurana123" target="_blank" rel="noreferrer" className={styles.termLink}>github.com/Anshsurana123</a><br />
            - <strong>Status:</strong> Open for high-impact AI/Full-Stack roles & collaborations.
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
            Command not recognized: &quot;{trimmed}&quot;. Type <code style={{ color: "var(--accent)" }}>help</code> for available commands.
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

  const quickChips = ["help", "whoami", "projects", "stack", "contact", "clear"];

  return (
    <section id="terminal" className="section">
      <div className={styles.header}>
        <h2 className="section-label">// terminal</h2>
        <p className={styles.subtitle}>type a command or click one below</p>
      </div>

      <div className={styles.terminalBox}>
        <div className={styles.consoleBody}>
          {logs.map((log, i) => (
            <div key={i} className={styles.logItem}>
              {log.command && (
                <div className={styles.promptLine}>
                  <span className={styles.prompt}>~ $</span>
                  <span className={styles.commandText}>{log.command}</span>
                </div>
              )}
              <div className={styles.outputLine}>{log.output}</div>
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        <div className={styles.inputBar}>
          <span className={styles.prompt}>~ $</span>
          <input
            type="text"
            className={styles.termInput}
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder=""
            spellCheck="false"
            autoComplete="off"
          />
          <button
            onClick={() => executeCommand(inputVal)}
            className={styles.sendBtn}
            title="Execute Command"
          >
            <ArrowRight size={14} />
          </button>
        </div>
      </div>

      <div className={styles.quickCommands}>
        {quickChips.map((chip) => (
          <button
            key={chip}
            onClick={() => executeCommand(chip)}
            className={styles.quickCmdBtn}
          >
            {chip}
          </button>
        ))}
      </div>
    </section>
  );
}
