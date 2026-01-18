"use client";

import { useMemo, useState } from "react";

/* =======================
   QUESTIONS (EXAM 3)
======================= */

const QUESTIONS = [
  {
    part: "Part 1: Core Concepts",
    points: 20,
    items: [
      {
        id: "e3-q1",
        title: "Q1. App Router overview (4 pts)",
        pts: 4,
        type: "long",
        prompt:
          "What problem does the App Router solve compared to the Pages Router?",
        answer:
          `The App Router introduces layouts, loading UI, and Server Components.
It allows better performance, shared UI, and simpler data fetching.`,
      },
      {
        id: "e3-q2",
        title: "Q2. File-based routing (4 pts)",
        pts: 4,
        type: "long",
        prompt: "Explain the URL created by the following structure.",
        directory: `app/
└─ dashboard/
   └─ settings/
      └─ page.jsx`,
        answer:
          `The URL is /dashboard/settings.
page.jsx defines the UI for that route.`,
      },
      {
        id: "e3-q3",
        title: "Q3. Client Component rules (4 pts)",
        pts: 4,
        type: "long",
        prompt:
          "List two rules that Client Components must follow.",
        answer:
          `Client Components:
- Must start with "use client"
- Can use hooks and event handlers
- Run in the browser`,
      },
      {
        id: "e3-q4",
        title: "Q4. Server Components (4 pts)",
        pts: 4,
        type: "long",
        prompt:
          "Why can Server Components access a database but Client Components cannot?",
        answer:
          `Server Components run on the server, where database credentials are safe.
Client Components run in the browser and must not expose secrets.`,
      },
      {
        id: "e3-q5",
        title: "Q5. Navigation (4 pts)",
        pts: 4,
        type: "long",
        prompt:
          "What happens when a user navigates using the Link component?",
        answer:
          `Next.js performs client-side navigation without reloading the page,
resulting in faster transitions and better UX.`,
      },
    ],
  },

  {
    part: "Part 2: Code Reading & Debugging",
    points: 30,
    items: [
      {
        id: "e3-q6",
        title: "Q6. Bug fixing (10 pts)",
        pts: 10,
        type: "code",
        prompt:
          "The following component does not work correctly. Explain and fix it.",
        code: `import { useState } from "react";

export default function Input() {
  const [value, setValue] = useState("");

  return (
    <input value={value} />
  );
}`,
        answer:
          `"use client";

import { useState } from "react";

export default function Input() {
  const [value, setValue] = useState("");

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

Explanation:
The input is missing an onChange handler and must be a Client Component.`,
      },
      {
        id: "e3-q7",
        title: "Q7. useState logic (10 pts)",
        pts: 10,
        type: "code",
        prompt:
          "Create a toggle component that switches between YES and NO.",
        answer:
          `"use client";

import { useState } from "react";

export default function Toggle() {
  const [on, setOn] = useState(false);

  return (
    <button onClick={() => setOn(!on)}>
      {on ? "YES" : "NO"}
    </button>
  );
}`,
      },
      {
        id: "e3-q8",
        title: "Q8. Suspense usage (10 pts)",
        pts: 10,
        type: "long",
        prompt:
          "Why is Suspense useful for slow components?",
        answer:
          `Suspense allows partial loading.
Only the slow component shows a fallback UI, while the rest of the page renders immediately.`,
      },
    ],
  },

  {
    part: "Part 3: Routing & Layout",
    points: 30,
    items: [
      {
        id: "e3-q9",
        title: "Q9. Dynamic route task (10 pts)",
        pts: 10,
        type: "long",
        prompt:
          "Create a folder structure for /profile and /profile/jane.",
        directory: `app/
└─ profile/
   ├─ page.jsx
   └─ [name]/
      └─ page.jsx`,
        answer:
          `/profile → profile/page.jsx
/profile/jane → profile/[name]/page.jsx`,
      },
      {
        id: "e3-q10",
        title: "Q10. layout.jsx (10 pts)",
        pts: 10,
        type: "long",
        prompt:
          "Why does layout.jsx not re-render on navigation?",
        answer:
          `layout.jsx persists across route changes in the same segment,
allowing shared UI like headers or sidebars to remain visible.`,
      },
      {
        id: "e3-q11",
        title: "Q11. loading.jsx (10 pts)",
        pts: 10,
        type: "code",
        prompt:
          "Create a loading.jsx that shows \"Loading content...\"",
        answer:
          `export default function Loading() {
  return <p>Loading content...</p>;
}`,
      },
    ],
  },

  {
    part: "Part 4: Thinking Questions",
    points: 20,
    items: [
      {
        id: "e3-q12",
        title: "Q12. Performance (10 pts)",
        pts: 10,
        type: "long",
        prompt:
          "Why can too many Client Components reduce performance?",
        answer:
          `Client Components increase JavaScript sent to the browser,
which can slow down page load and execution.`,
      },
      {
        id: "e3-q13",
        title: "Q13. UX design (10 pts)",
        pts: 10,
        type: "long",
        prompt:
          "When should you prefer Suspense over loading.jsx?",
        answer:
          `When only part of a page is slow.
Suspense enables component-level loading instead of blocking the entire page.`,
      },
    ],
  },
];

/* =======================
   UI BLOCKS
======================= */

function CodeBlock({ code }) {
  return (
    <pre className="code-block">
      <code>{code}</code>
    </pre>
  );
}

function DirectoryBlock({ tree }) {
  return (
    <pre className="directory-block">
      <code>{tree}</code>
    </pre>
  );
}

/* =======================
   MAIN APP
======================= */

export default function Exam3App() {
  const totalPoints = useMemo(
    () => QUESTIONS.reduce((sum, p) => sum + p.points, 0),
    []
  );

  const [open, setOpen] = useState({});

  function toggle(id) {
    setOpen((o) => ({ ...o, [id]: !o[id] }));
  }

  return (
    <div className="exam-container">
      <header className="exam-header">
        <h1>Next.js Basics Exam 3</h1>
        <p>Total {totalPoints} points · 90 minutes</p>
      </header>

      {QUESTIONS.map((part) => (
        <section key={part.part} className="exam-section">
          <h2>
            {part.part} ({part.points} pts)
          </h2>

          {part.items.map((q) => (
            <div key={q.id} className="question">
              <h3>{q.title}</h3>

              <p className="question-text">{q.prompt}</p>

              {q.directory && <DirectoryBlock tree={q.directory} />}
              {q.code && <CodeBlock code={q.code} />}

              {(q.type === "long" || q.type === "code") && (
                <textarea
                  className="answer-box"
                  placeholder="Write your answer here..."
                />
              )}

              <button className="answer-toggle" onClick={() => toggle(q.id)}>
                {open[q.id] ? "Hide Answer" : "Show Answer"}
              </button>

              {open[q.id] && (
                <pre className="model-answer">{q.answer}</pre>
              )}
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}
