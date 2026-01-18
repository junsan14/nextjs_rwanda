// app/exam6/Exam6App.jsx
"use client";

import { useMemo, useState } from "react";

/* =======================
   QUESTIONS (EXAM 6)
======================= */

const QUESTIONS = [
  {
    part: "Part 1: Core Concepts",
    points: 20,
    items: [
      {
        id: "e6-q1",
        title: "Q1. What creates a route? (4 pts)",
        pts: 4,
        type: "long",
        prompt:
          "In the App Router, which file creates a page route? Explain briefly.",
        answer:
          `page.jsx creates a page route. Its folder path becomes the URL.`,
      },
      {
        id: "e6-q2",
        title: "Q2. URL from structure (4 pts)",
        pts: 4,
        type: "long",
        prompt: "What URL is created by this folder structure?",
        directory: `app/
└─ about/
   └─ team/
      └─ page.jsx`,
        answer:
          `URL: /about/team`,
      },
      {
        id: "e6-q3",
        title: "Q3. Dynamic routes (4 pts)",
        pts: 4,
        type: "long",
        prompt: "Explain what [courseId] means and give one example URL.",
        directory: `app/
└─ courses/
   └─ [courseId]/
      └─ page.jsx`,
        answer:
          `[courseId] is a dynamic route parameter.
Example: /courses/101 (courseId = "101").`,
      },
      {
        id: "e6-q4",
        title: "Q4. Client vs Server (4 pts)",
        pts: 4,
        type: "long",
        prompt:
          "Write one reason to choose a Client Component and one reason to choose a Server Component.",
        answer:
          `Client: needed for hooks/events (useState, onClick).
Server: better performance and can safely access DB/secrets.`,
      },
      {
        id: "e6-q5",
        title: "Q5. loading.jsx purpose (4 pts)",
        pts: 4,
        type: "long",
        prompt:
          "What is loading.jsx used for? When does it show automatically?",
        answer:
          `loading.jsx is a route-level loading UI.
It shows automatically while the route segment is loading (navigation/data fetch).`,
      },
    ],
  },

  {
    part: "Part 2: Code Reading & Debugging",
    points: 30,
    items: [
      {
        id: "e6-q6",
        title: "Q6. Bug fixing: useState import (10 pts)",
        pts: 10,
        type: "code",
        prompt:
          "This code has an error. Explain and fix it.",
        code: `import useState from "react";

export default function Box() {
  const [text, setText] = useState("Hi");
  return <p>{text}</p>;
}`,
        answer:
          `"use client";

import { useState } from "react";

export default function Box() {
  const [text, setText] = useState("Hi");
  return <p>{text}</p>;
}

Explanation:
useState is a named export and hooks require a Client Component.`,
      },
      {
        id: "e6-q7",
        title: "Q7. Event handling (10 pts)",
        pts: 10,
        type: "code",
        prompt:
          "Write a button that changes text from START to STOP when clicked.",
        answer:
          `"use client";

import { useState } from "react";

export default function StartStop() {
  const [running, setRunning] = useState(false);

  return (
    <button onClick={() => setRunning(!running)}>
      {running ? "STOP" : "START"}
    </button>
  );
}`,
      },
      {
        id: "e6-q8",
        title: "Q8. Suspense vs loading.jsx (10 pts)",
        pts: 10,
        type: "long",
        prompt:
          "Explain one situation where Suspense is better than loading.jsx.",
        answer:
          `Use Suspense when only one component is slow. Then the rest of the page renders immediately while the slow component shows fallback.`,
      },
    ],
  },

  {
    part: "Part 3: Routing & Layout",
    points: 30,
    items: [
      {
        id: "e6-q9",
        title: "Q9. Build routes (10 pts)",
        pts: 10,
        type: "long",
        prompt:
          "Create a folder structure for /students and /students/7.",
        directory: `app/
└─ students/
   ├─ page.jsx
   └─ [id]/
      └─ page.jsx`,
        answer:
          `/students → students/page.jsx
/students/7 → students/[id]/page.jsx`,
      },
      {
        id: "e6-q10",
        title: "Q10. layout.jsx benefit (10 pts)",
        pts: 10,
        type: "long",
        prompt:
          "Why do we put a sidebar menu in layout.jsx instead of page.jsx?",
        answer:
          `Because layout.jsx persists across navigation in that segment, so the sidebar stays visible and you avoid repeating code on every page.`,
      },
      {
        id: "e6-q11",
        title: "Q11. Write a Link (10 pts)",
        pts: 10,
        type: "code",
        prompt:
          "Write a Link to /06-client-server.",
        answer:
          `import Link from "next/link";

<Link href="/06-client-server">Client & Server</Link>`,
      },
    ],
  },

  {
    part: "Part 4: Thinking Questions",
    points: 20,
    items: [
      {
        id: "e6-q12",
        title: "Q12. Security (10 pts)",
        pts: 10,
        type: "long",
        prompt:
          "Why should secrets (API keys) never be stored in client-side code?",
        answer:
          `Because browser code is visible to users. Secrets would be exposed and can be stolen. Secrets must stay on the server.`,
      },
      {
        id: "e6-q13",
        title: "Q13. Good design (10 pts)",
        pts: 10,
        type: "long",
        prompt:
          "Why is it better to keep pages small and move UI parts into components?",
        answer:
          `It improves readability, reusability, and maintainability. You can test and update parts without rewriting entire pages.`,
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

export default function Exam6App() {
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
        <h1>Next.js Basics Exam 6</h1>
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
