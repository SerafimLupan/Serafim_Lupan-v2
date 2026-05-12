import React, { useEffect, useRef, useState, useCallback } from "react";
import { Cyber90ProgressProvider, useCyber90Progress } from "@/context/learn_progress";
import { LESSONS, MODULES, getLessonByDay, getModuleForDay, type Lesson } from "@/learn_data";

// ─── Types ────────────────────────────────────────────────────────────────────
type Tab = "theory" | "practice" | "resources";
type View = "path" | "stats" | "profile";

// ─── Day Node ─────────────────────────────────────────────────────────────────
function DayNode({ lesson, index, onSelect }: { lesson: Lesson; index: number; onSelect: (day: number) => void }) {
  const { isDayCompleted, isDayUnlocked } = useCyber90Progress();
  const completed = isDayCompleted(lesson.day);
  const unlocked = isDayUnlocked(lesson.day);

  const col = index % 3;
  const row = Math.floor(index / 3);
  const isOddRow = row % 2 === 1;
  const effectiveCol = isOddRow ? 2 - col : col;

  const nodeColor = completed ? "#00AA00" : unlocked ? lesson.categoryColor : "#111111";
  const borderColor = completed ? "#00AA00" : unlocked ? lesson.categoryColor : "#1a3a1a";

  return (
    <div style={{ gridColumn: effectiveCol + 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
      <button
        onClick={() => unlocked && onSelect(lesson.day)}
        title={lesson.title}
        style={{
          width: 60, height: 60, borderRadius: "50%",
          border: `2px solid ${borderColor}`, background: nodeColor,
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: unlocked ? "pointer" : "default",
          boxShadow: unlocked ? `0 0 12px ${nodeColor}55` : "none",
          transition: "all 0.2s", flexShrink: 0,
        }}
        onMouseEnter={e => { if (unlocked) { (e.currentTarget as HTMLElement).style.transform = "scale(1.12)"; (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${nodeColor}88`; } }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; (e.currentTarget as HTMLElement).style.boxShadow = unlocked ? `0 0 12px ${nodeColor}55` : "none"; }}
      >
        {completed ? <span style={{ color: "#000", fontSize: 18, fontWeight: 700 }}>✓</span>
          : !unlocked ? <span style={{ fontSize: 14 }}>🔒</span>
          : <span style={{ fontFamily: "var(--font-mono, 'Fira Code', monospace)", fontSize: 13, fontWeight: 700, color: "#000" }}>{lesson.day}</span>}
      </button>
      <div style={{ textAlign: "center", maxWidth: 88, opacity: unlocked ? 1 : 0.3 }}>
        <div style={{ fontFamily: "var(--font-mono,'Fira Code',monospace)", fontSize: 8, color: unlocked ? lesson.categoryColor : "#333", lineHeight: 1.4, letterSpacing: 0.5 }}>{lesson.title}</div>
        <div style={{ fontFamily: "var(--font-mono,'Fira Code',monospace)", fontSize: 7, color: "#4a8a4a", marginTop: 2, letterSpacing: 1 }}>DAY {lesson.day}</div>
      </div>
    </div>
  );
}

// ─── Path Screen ──────────────────────────────────────────────────────────────
function PathScreen({ onSelect }: { onSelect: (day: number) => void }) {
  const { completionPercentage, progress, totalCompleted } = useCyber90Progress();

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#000" }}>
      <div style={{ padding: "16px 20px 12px", borderBottom: "1px solid #1a3a1a", flexShrink: 0 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
          <div>
            <div style={{ fontFamily: "var(--font-mono,'Fira Code',monospace)", fontSize: 13, letterSpacing: 2, color: "#00FF00", fontWeight: 700, textShadow: "0 0 8px #00FF00" }}>
              {">"} 90_DAYS_OF_CYBER
            </div>
            <div style={{ fontFamily: "var(--font-mono,'Fira Code',monospace)", fontSize: 9, color: "#4a8a4a", letterSpacing: 1, marginTop: 2 }}>
              {totalCompleted}/90 DAYS COMPLETED
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 12px", border: "1px solid #FFD700", background: "rgba(255,215,0,0.06)" }}>
            <span style={{ fontSize: 13 }}>⚡</span>
            <span style={{ fontFamily: "var(--font-mono,'Fira Code',monospace)", fontSize: 16, fontWeight: 700, color: "#FFD700" }}>{progress.streak}</span>
          </div>
        </div>
        <div style={{ height: 3, background: "#1a3a1a", width: "100%", overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${completionPercentage}%`, background: "#00FF00", transition: "width 0.5s", boxShadow: "0 0 6px #00FF00" }} />
        </div>
        <div style={{ fontFamily: "var(--font-mono,'Fira Code',monospace)", fontSize: 8, color: "#4a8a4a", letterSpacing: 2, marginTop: 4 }}>{completionPercentage}% COMPLETE</div>
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: "8px 20px 80px" }}>
        {MODULES.map((module) => {
          const lessons = LESSONS.filter((l) => module.days.includes(l.day));
          return (
            <div key={module.id} style={{ marginBottom: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 0 16px", borderLeft: `2px solid ${module.color}`, paddingLeft: 12, marginBottom: 16, marginLeft: 8 }}>
                <div style={{ width: 8, height: 8, background: module.color, flexShrink: 0 }} />
                <div>
                  <div style={{ fontFamily: "var(--font-mono,'Fira Code',monospace)", fontSize: 10, letterSpacing: 3, fontWeight: 700, color: module.color }}>{module.title.toUpperCase()}</div>
                  <div style={{ fontFamily: "var(--font-mono,'Fira Code',monospace)", fontSize: 8, color: "#4a8a4a", marginTop: 2 }}>{module.description}</div>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", rowGap: 24, columnGap: 8, paddingBottom: 16 }}>
                {lessons.map((lesson, i) => <DayNode key={lesson.day} lesson={lesson} index={i} onSelect={onSelect} />)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Day Modal ────────────────────────────────────────────────────────────────
function DayModal({ day, onClose }: { day: number; onClose: () => void }) {
  const { completeDay, isDayCompleted } = useCyber90Progress();
  const [tab, setTab] = useState<Tab>("theory");
  const [checks, setChecks] = useState<boolean[]>([]);
  const [justCompleted, setJustCompleted] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const lesson = getLessonByDay(day);
  const module = getModuleForDay(day);

  useEffect(() => {
    if (lesson) setChecks(lesson.tasks.map(() => false));
    setTab("theory");
    setJustCompleted(false);
  }, [lesson]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!lesson) return null;
  const alreadyDone = isDayCompleted(lesson.day);
  const isDone = alreadyDone || justCompleted;
  const accent = module?.color ?? "#00FF00";

  const handleComplete = () => {
    if (isDone) return;
    completeDay(lesson.day);
    setJustCompleted(true);
    setTimeout(onClose, 1200);
  };

  return (
    <div ref={overlayRef} onClick={e => { if (e.target === overlayRef.current) onClose(); }}
      style={{ position: "fixed", inset: 0, zIndex: 50, display: "flex", alignItems: "stretch", justifyContent: "flex-end", background: "rgba(0,0,0,0.85)" }}>
      <div style={{ display: "flex", flexDirection: "column", height: "100%", overflow: "hidden", width: "min(640px, 100vw)", background: "#000", borderLeft: `2px solid ${accent}`, boxShadow: `-4px 0 30px ${accent}22` }}>
        {/* Header */}
        <div style={{ borderBottom: `1px solid ${accent}33`, padding: "20px 24px 16px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ color: accent, fontFamily: "var(--font-mono,'Fira Code',monospace)", fontSize: 11, letterSpacing: 3, fontWeight: 700 }}>DAY_{String(lesson.day).padStart(2, "0")}</span>
              {module && <span style={{ border: `1px solid ${accent}`, color: accent, fontFamily: "var(--font-mono,'Fira Code',monospace)", fontSize: 8, letterSpacing: 2, padding: "2px 8px" }}>{module.title.toUpperCase()}</span>}
              {isDone && <span style={{ background: "#00AA00", color: "#000", fontFamily: "var(--font-mono,'Fira Code',monospace)", fontSize: 8, letterSpacing: 1, padding: "2px 8px", fontWeight: 700 }}>✓ COMPLETED</span>}
            </div>
            <button onClick={onClose} style={{ color: "#4a8a4a", fontSize: 18, background: "none", border: "none", cursor: "pointer" }}>✕</button>
          </div>
          <div style={{ fontFamily: "var(--font-mono,'Fira Code',monospace)", fontSize: 15, fontWeight: 700, color: "#fff", lineHeight: 1.4, marginBottom: 8 }}>{lesson.title}</div>
          <div style={{ color: "#4a8a4a", fontFamily: "var(--font-mono,'Fira Code',monospace)", fontSize: 9, letterSpacing: 1 }}>⏱ ~{lesson.estimatedMinutes} MIN</div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", borderBottom: "1px solid #1a3a1a" }}>
          {(["theory", "practice", "resources"] as Tab[]).map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ flex: 1, padding: "10px 0", fontFamily: "var(--font-mono,'Fira Code',monospace)", fontSize: 9, letterSpacing: 2, background: "none", border: "none", borderBottom: t === tab ? `2px solid ${accent}` : "2px solid transparent", color: t === tab ? accent : "#4a8a4a", cursor: "pointer", transition: "all 0.15s" }}>
              {t.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Content */}
        <div style={{ flex: 1, overflowY: "auto", padding: "20px 24px" }}>
          {tab === "theory" && (
            <div style={{ border: "1px solid #1a3a1a", background: "#050f05" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 12px", borderBottom: "1px solid #1a3a1a", background: "#0a0f0a" }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F57" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#FFBD2E" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28CA41" }} />
                <span style={{ color: "#4a8a4a", fontFamily: "var(--font-mono,'Fira Code',monospace)", fontSize: 9, marginLeft: 8 }}>lesson_{lesson.day}.md</span>
              </div>
              <pre style={{ padding: 16, fontFamily: "var(--font-mono,'Fira Code',monospace)", fontSize: 11, lineHeight: 1.8, color: "#ccc", whiteSpace: "pre-wrap", wordBreak: "break-word", margin: 0 }}>{lesson.theory}</pre>
            </div>
          )}

          {tab === "practice" && (
            <div>
              <p style={{ fontFamily: "var(--font-mono,'Fira Code',monospace)", fontSize: 9, letterSpacing: 3, color: "#4a8a4a", marginBottom: 16 }}>COMPLETE ALL TASKS TO MARK DAY AS DONE</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {lesson.tasks.map((task, i) => (
                  <button key={i} onClick={() => setChecks(prev => { const n = [...prev]; n[i] = !n[i]; return n; })}
                    style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: 14, border: `1px solid ${checks[i] ? accent : "#1a3a1a"}`, background: checks[i] ? `${accent}08` : "#050f05", cursor: "pointer", textAlign: "left", transition: "all 0.15s" }}>
                    <div style={{ width: 18, height: 18, border: `1px solid ${checks[i] ? accent : "#4a8a4a"}`, background: checks[i] ? accent : "transparent", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", marginTop: 1, transition: "all 0.15s" }}>
                      {checks[i] && <span style={{ color: "#000", fontSize: 10, fontWeight: 700 }}>✓</span>}
                    </div>
                    <span style={{ fontFamily: "var(--font-mono,'Fira Code',monospace)", fontSize: 11, lineHeight: 1.6, color: checks[i] ? "#4a8a4a" : "#ccc", textDecoration: checks[i] ? "line-through" : "none" }}>{task}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {tab === "resources" && (
            <div>
              <p style={{ fontFamily: "var(--font-mono,'Fira Code',monospace)", fontSize: 9, letterSpacing: 3, color: "#4a8a4a", marginBottom: 16 }}>REFERENCE MATERIALS</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {lesson.resources.map((res, i) => (
                  <a key={i} href={res.startsWith("http") ? res : "#"} target="_blank" rel="noreferrer"
                    style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: 14, border: "1px solid #1a3a1a", background: "#050f05", color: accent, textDecoration: "none" }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = accent)}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = "#1a3a1a")}>
                    <span style={{ flexShrink: 0, marginTop: 2 }}>⟶</span>
                    <span style={{ fontFamily: "var(--font-mono,'Fira Code',monospace)", fontSize: 10, lineHeight: 1.6 }}>{res}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div style={{ padding: "16px 24px", borderTop: "1px solid #1a3a1a" }}>
          <button onClick={handleComplete} disabled={isDone}
            style={{ width: "100%", padding: 16, background: isDone ? "#00AA00" : accent, color: "#000", fontFamily: "var(--font-mono,'Fira Code',monospace)", fontSize: 12, fontWeight: 700, letterSpacing: 2, border: "none", cursor: isDone ? "default" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, transition: "all 0.2s", boxShadow: isDone ? "none" : `0 0 20px ${accent}44` }}>
            {isDone ? "✓ DAY COMPLETED" : "⚡ MARK AS COMPLETE"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Stats Screen ─────────────────────────────────────────────────────────────
function StatsScreen() {
  const { progress, completionPercentage, totalCompleted } = useCyber90Progress();
  const hours = Math.floor(progress.totalMinutes / 60);
  const mins = progress.totalMinutes % 60;

  return (
    <div style={{ flex: 1, overflowY: "auto", padding: "20px 24px 80px", background: "#000" }}>
      <div style={{ fontFamily: "var(--font-mono,'Fira Code',monospace)", fontSize: 13, letterSpacing: 2, color: "#00FF00", marginBottom: 24, fontWeight: 700 }}>{">"} STATS.SH</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 24 }}>
        {[
          { icon: "⚡", label: "DAY STREAK", value: `${progress.streak}`, accent: "#FFD700" },
          { icon: "✓", label: "COMPLETED", value: `${totalCompleted}`, accent: "#00FF00" },
          { icon: "⏱", label: "DAYS LEFT", value: `${90 - totalCompleted}`, accent: "#00BFFF" },
          { icon: "⌚", label: "TIME SPENT", value: hours > 0 ? `${hours}h ${mins}m` : `${mins}m`, accent: "#8338EC" },
        ].map(({ icon, label, value, accent }) => (
          <div key={label} style={{ border: `1px solid ${accent}44`, padding: 20, display: "flex", flexDirection: "column", alignItems: "center", gap: 8, background: "#050f05" }}>
            <span style={{ fontSize: 22 }}>{icon}</span>
            <span style={{ fontFamily: "var(--font-mono,'Fira Code',monospace)", fontSize: 28, fontWeight: 700, color: accent, lineHeight: 1 }}>{value}</span>
            <span style={{ fontFamily: "var(--font-mono,'Fira Code',monospace)", fontSize: 8, letterSpacing: 2, color: "#4a8a4a" }}>{label}</span>
          </div>
        ))}
      </div>

      <div style={{ border: "1px solid #1a3a1a", padding: 16, marginBottom: 24, background: "#050f05" }}>
        <div style={{ fontFamily: "var(--font-mono,'Fira Code',monospace)", fontSize: 8, letterSpacing: 3, color: "#4a8a4a", marginBottom: 12 }}>OVERALL PROGRESS</div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ flex: 1, height: 6, background: "#1a3a1a", overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${completionPercentage}%`, background: "#00FF00", boxShadow: "0 0 8px #00FF00", transition: "width 0.5s" }} />
          </div>
          <span style={{ fontFamily: "var(--font-mono,'Fira Code',monospace)", fontSize: 20, fontWeight: 700, color: "#00FF00", minWidth: 50, textAlign: "right" }}>{completionPercentage}%</span>
        </div>
      </div>

      <div style={{ fontFamily: "var(--font-mono,'Fira Code',monospace)", fontSize: 8, letterSpacing: 3, color: "#4a8a4a", marginBottom: 12 }}>MODULE BREAKDOWN</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {MODULES.map((module) => {
          const done = progress.completedDays.filter(d => module.days.includes(d)).length;
          const pct = Math.round((done / module.days.length) * 100);
          return (
            <div key={module.id} style={{ border: "1px solid #1a3a1a", padding: 12, background: "#050f05" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 6, height: 6, background: module.color }} />
                  <span style={{ fontFamily: "var(--font-mono,'Fira Code',monospace)", fontSize: 9, letterSpacing: 2, color: module.color }}>{module.title.toUpperCase()}</span>
                </div>
                <span style={{ fontFamily: "var(--font-mono,'Fira Code',monospace)", fontSize: 9, color: "#4a8a4a" }}>{done}/{module.days.length}</span>
              </div>
              <div style={{ height: 3, background: "#1a3a1a", overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${pct}%`, background: module.color, transition: "width 0.5s" }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Profile Screen ───────────────────────────────────────────────────────────
function ProfileScreen() {
  const { progress, completionPercentage, totalCompleted, resetProgress } = useCyber90Progress();
  const level = totalCompleted < 15 ? "SCRIPT_KIDDIE" : totalCompleted < 30 ? "NET_ANALYST" : totalCompleted < 45 ? "LINUX_ADMIN" : totalCompleted < 60 ? "PY_HACKER" : totalCompleted < 75 ? "WEB_BREAKER" : totalCompleted < 90 ? "PENTESTER" : "CYBER_MASTER";

  const handleReset = () => {
    if (window.confirm("RESET ALL PROGRESS?\n\nThis will permanently erase all your progress.")) resetProgress();
  };

  return (
    <div style={{ flex: 1, overflowY: "auto", padding: "20px 24px 80px", background: "#000" }}>
      <div style={{ fontFamily: "var(--font-mono,'Fira Code',monospace)", fontSize: 13, letterSpacing: 2, color: "#00FF00", marginBottom: 24, fontWeight: 700 }}>{">"} PROFILE.SH</div>
      <div style={{ display: "flex", alignItems: "center", gap: 20, border: "1px solid #00FF00", padding: 20, marginBottom: 28, background: "#050f05", boxShadow: "0 0 20px #00FF0011" }}>
        <div style={{ width: 72, height: 72, borderRadius: "50%", border: "2px solid #00FF00", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, flexShrink: 0 }}>👨🏻‍💻</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "var(--font-mono,'Fira Code',monospace)", fontSize: 8, letterSpacing: 3, color: "#4a8a4a" }}>LEVEL</div>
          <div style={{ fontFamily: "var(--font-mono,'Fira Code',monospace)", fontSize: 13, fontWeight: 700, color: "#00FF00", letterSpacing: 1, margin: "4px 0 12px" }}>{level}</div>
          <div style={{ height: 3, background: "#1a3a1a", overflow: "hidden", marginBottom: 4 }}>
            <div style={{ height: "100%", width: `${completionPercentage}%`, background: "#00FF00", boxShadow: "0 0 6px #00FF00", transition: "width 0.5s" }} />
          </div>
          <div style={{ fontFamily: "var(--font-mono,'Fira Code',monospace)", fontSize: 8, color: "#4a8a4a", letterSpacing: 1 }}>{totalCompleted}/90 XP</div>
        </div>
      </div>

      {[
        { icon: "⚡", label: "STREAK", value: `${progress.streak} days` },
        { icon: "⌚", label: "TIME INVESTED", value: progress.totalMinutes >= 60 ? `${Math.floor(progress.totalMinutes / 60)}h ${progress.totalMinutes % 60}m` : `${progress.totalMinutes}m` },
        { icon: "✓", label: "LESSONS DONE", value: `${totalCompleted} / 90` },
      ].map(({ icon, label, value }) => (
        <div key={label} style={{ display: "flex", alignItems: "center", gap: 12, padding: "13px 16px", border: "1px solid #1a3a1a", background: "#000", marginBottom: 6 }}>
          <span style={{ fontSize: 14 }}>{icon}</span>
          <span style={{ fontFamily: "var(--font-mono,'Fira Code',monospace)", fontSize: 10, letterSpacing: 1, color: "#ccc", flex: 1 }}>{label}</span>
          <span style={{ fontFamily: "var(--font-mono,'Fira Code',monospace)", fontSize: 9, color: "#4a8a4a" }}>{value}</span>
        </div>
      ))}

      <div style={{ fontFamily: "var(--font-mono,'Fira Code',monospace)", fontSize: 8, letterSpacing: 3, color: "#FF4444", margin: "20px 0 10px" }}>DANGER ZONE</div>
      <button onClick={handleReset}
        style={{ display: "flex", alignItems: "center", gap: 12, padding: "13px 16px", border: "1px solid #1a3a1a", background: "#000", marginBottom: 6, cursor: "pointer", width: "100%", textAlign: "left" }}
        onMouseEnter={e => (e.currentTarget.style.background = "#0f0505")}
        onMouseLeave={e => (e.currentTarget.style.background = "#000")}>
        <span>🗑</span>
        <span style={{ fontFamily: "var(--font-mono,'Fira Code',monospace)", fontSize: 10, letterSpacing: 1, color: "#FF4444" }}>RESET ALL PROGRESS</span>
      </button>

      <div style={{ borderTop: "1px solid #1a3a1a", marginTop: 24, paddingTop: 20, textAlign: "center" }}>
        <div style={{ fontFamily: "var(--font-mono,'Fira Code',monospace)", fontSize: 8, color: "#2a5a2a", letterSpacing: 1, lineHeight: 2 }}>
          Based on 90DaysOfCyberSecurity by farhanashrafdev<br />
          serafimlupan.com — v1.0.0
        </div>
      </div>
    </div>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────
const TABS = [
  { id: "path" as View, label: "PATH", icon: "🗺" },
  { id: "stats" as View, label: "STATS", icon: "📊" },
  { id: "profile" as View, label: "PROFILE", icon: "👤" },
];

function LearnApp() {
  const [view, setView] = useState<View>("path");
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", background: "#000", maxWidth: 480, margin: "0 auto", position: "relative", borderLeft: "1px solid #1a3a1a", borderRight: "1px solid #1a3a1a" }}>
      <div style={{ flex: 1, overflow: "hidden", display: "flex", flexDirection: "column" }}>
        {view === "path" && <PathScreen onSelect={setSelectedDay} />}
        {view === "stats" && <StatsScreen />}
        {view === "profile" && <ProfileScreen />}
      </div>

      <div style={{ display: "flex", borderTop: "1px solid #1a3a1a", background: "#000", flexShrink: 0 }}>
        {TABS.map(tab => (
          <button key={tab.id} onClick={() => setView(tab.id)}
            style={{ flex: 1, padding: "14px 0 12px", display: "flex", flexDirection: "column", alignItems: "center", gap: 4, background: "none", border: "none", borderTop: tab.id === view ? "2px solid #00FF00" : "2px solid transparent", cursor: "pointer", transition: "all 0.15s" }}>
            <span style={{ fontSize: 18 }}>{tab.icon}</span>
            <span style={{ fontFamily: "var(--font-mono,'Fira Code',monospace)", fontSize: 8, letterSpacing: 2, color: tab.id === view ? "#00FF00" : "#4a8a4a", fontWeight: tab.id === view ? 700 : 400 }}>{tab.label}</span>
          </button>
        ))}
      </div>

      {selectedDay !== null && <DayModal day={selectedDay} onClose={() => setSelectedDay(null)} />}
    </div>
  );
}

// ─── Page Export ──────────────────────────────────────────────────────────────
const learn = () => {
  return (
    <Cyber90ProgressProvider>
      <LearnApp />
    </Cyber90ProgressProvider>
  );
};

export default learn;
