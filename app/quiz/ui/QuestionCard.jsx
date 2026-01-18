"use client";

import { useState } from "react";
import ResultBadge from "./ResultBadge";

export default function QuestionCard({ question }) {
  const [selected, setSelected] = useState(null);
  const [checked, setChecked] = useState(false);

  const isCorrect = selected === question.answer;

  const handleClick = (value) => {
    if (checked) return;
    setSelected(value);
    setChecked(true);
  };

  const getButtonStyle = (value) => {
    if (!checked) return baseButton;

    if (value === question.answer) {
      return { ...baseButton, backgroundColor: "#c8e6c9" }; // green
    }

    if (value === selected) {
      return { ...baseButton, backgroundColor: "#ffcdd2" }; // red
    }

    return baseButton;
  };

  return (
    <div style={cardStyle}>
      <p>
        <strong>
          {question.id}. {question.question}
        </strong>
      </p>

      {question.type === "mcq" &&
        question.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleClick(idx)}
            style={getButtonStyle(idx)}
            disabled={checked}
          >
            {opt}
          </button>
        ))}

      {question.type === "tf" && (
        <>
          <button
            onClick={() => handleClick(true)}
            style={getButtonStyle(true)}
            disabled={checked}
          >
            True
          </button>
          <button
            onClick={() => handleClick(false)}
            style={getButtonStyle(false)}
            disabled={checked}
          >
            False
          </button>
        </>
      )}

      {checked && (
        <ResultBadge
          correct={isCorrect}
          answer={
            question.type === "tf"
              ? question.answer.toString()
              : question.options[question.answer]
          }
        />
      )}
    </div>
  );
}

/* ---------- styles ---------- */

const cardStyle = {
  padding: 16,
  marginBottom: 16,
  borderRadius: 8,
  backgroundColor: "#fafafa",
};

const baseButton = {
  display: "block",
  width: "100%",
  textAlign: "left",
  margin: "6px 0",
  padding: "8px 10px",
  border: "none",            // ✅ border removed
  borderRadius: 6,
  backgroundColor: "#fff",
  cursor: "pointer",
};
