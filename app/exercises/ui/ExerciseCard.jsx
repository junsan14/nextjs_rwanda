"use client";

import { useMemo, useState } from "react";

export default function ExerciseCard({ ex }) {
  const [studentCode, setStudentCode] = useState(ex.starter);
  const [showAnswer, setShowAnswer] = useState(false);

  const linesCount = useMemo(() => {
    const count = (studentCode.match(/\n/g) || []).length + 6;
    return Math.min(Math.max(count, 10), 28);
  }, [studentCode]);

  return (
    <div style={card}>
      <div style={headerRow}>
        <span style={topicPill}>{ex.topic}</span>
        <h3 style={{ margin: 0 }}>{ex.title}</h3>
      </div>

      <p style={{ marginTop: 8 }}>{ex.prompt}</p>

      <div style={cols}>
        <div style={col}>
          <div style={label}>🧑‍🎓 Your Answer</div>
          <textarea
            value={studentCode}
            onChange={(e) => setStudentCode(e.target.value)}
            rows={linesCount}
            style={textarea}
            spellCheck={false}
          />
        </div>

        <div style={col}>
          <div style={label}>✅ Model Answer</div>

          {!showAnswer ? (
            <div style={hiddenBox}>
              <p style={{ margin: 0, opacity: 0.8 }}>
                Click “Show Answer” to reveal.
              </p>
            </div>
          ) : (
            <pre style={pre}>{ex.solution}</pre>
          )}
        </div>
      </div>

      <div style={actions}>
        <button style={btn} onClick={() => setShowAnswer((v) => !v)}>
          {showAnswer ? "Hide Answer" : "Show Answer"}
        </button>
        <button style={btnGhost} onClick={() => setStudentCode(ex.starter)}>
          Reset
        </button>
      </div>
    </div>
  );
}

const card = {
  background: "#f9f9fb",
  borderRadius: 12,
  padding: 16,
  marginBottom: 16,
  boxShadow: "0 6px 16px rgba(0,0,0,0.07)",
};

const headerRow = { display: "flex", alignItems: "center", gap: 10 };

const topicPill = {
  fontSize: 12,
  fontWeight: 700,
  padding: "4px 10px",
  borderRadius: 999,
  background: "#fff",
  border: "1px solid #e6e6ee",
};

const cols = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 };

const col = { minWidth: 0 };

const label = { fontWeight: 800, marginBottom: 6 };

const textarea = {
  width: "100%",
  fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
  fontSize: 13,
  padding: 12,
  borderRadius: 10,
  border: "1px solid #ddd",
  outline: "none",
};

const pre = {
  margin: 0,
  background: "#111",
  color: "#f1f1f1",
  padding: 12,
  borderRadius: 10,
  overflowX: "auto",
  fontSize: 13,
};

const hiddenBox = {
  borderRadius: 10,
  padding: 12,
  background: "#fff",
  border: "1px dashed #c9c9d6",
  height: "100%",
  minHeight: 120,
  display: "flex",
  alignItems: "center",
};

const actions = { display: "flex", gap: 8, marginTop: 12 };

const btn = {
  padding: "8px 12px",
  borderRadius: 10,
  border: "none",
  background: "#111",
  color: "#fff",
  cursor: "pointer",
  fontWeight: 700,
};

const btnGhost = {
  padding: "8px 12px",
  borderRadius: 10,
  border: "1px solid #ddd",
  background: "#fff",
  cursor: "pointer",
  fontWeight: 700,
};
