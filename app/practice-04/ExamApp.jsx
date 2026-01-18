"use client";

import { useMemo, useState } from "react";

/* =======================
   QUESTIONS (EXAM 4)
======================= */

const QUESTIONS = [
  {
    part: "Part 1: Core Concepts",
    points: 20,
    items: [
      {
        id: "e4-q1",
        title: "Q1. File-based routing (4 pts)",
        pts: 4,
        type: "long",
        prompt:
          "How does file-based routing work in the App Router?",
        answer:
          `Routes are created using folders and files in the app directory.
Each folder represents a URL segment, and page.jsx defines the page UI.`,
      },
      {
        id: "e4-q2",
        title: "Q2. page.jsx vs layout.jsx (4 pts)",
        pts: 4,
        type: "long",
        prompt:
          "Explain one difference between page.jsx and layout.jsx.",
        answer:
          `page.jsx is re-rendered on navigation, while layout.jsx persists across route changes within the same segment.`,
      },
      {
        id: "e4-q3",
        title: "Q3. Dynamic route meaning (4 pts)",
        pts: 4,
        type: "long",
        prompt: "Explain the meaning of [slug] in this structure.",
        directory: `app/
└─ articles/
   └─ [slug]/
      └─ page.jsx`,
        answer:
          `[slug] is a dynamic route parameter.
It allows different URLs like /articles/nextjs or /articles/react.`,
      },
      {
        id: "e4-q4",
        title: "Q4. Client Components (4 pts)",
        pts: 4,
        type: "long",
        prompt:
          "Name two things that require a Client Component.",
        answer:
          `Client Components are required when using React hooks (useState, useEffect)
or handling browser events like onClick or onChange.`,
      },
      {
        id: "e4-q5",
        title: "Q5. Server Components (4 pts)",
        pts: 4,
        type: "long",
        prompt:
          "Give one reason why Server Components are good for performance.",
        answer:
          `Server Components reduce JavaScript sent to the browser,
which improves initial load performance.`,
      },
    ],
  },

  {
    part: "Part 2: Code Reading & Debugging",
    points: 30,
    items: [
      {
        id: "e4-q6",
        title: "Q6. Bug fixing (10 pts)",
        pts: 10,
        type: "code",
        prompt:
          "The following component does not work correctly. Explain the problem and fix it.",
        code: `import { useState } from "react";

export default function Message() {
  const [msg, setMsg] = useState("Hello");

  return <button>{msg}</button>;
}`,
        answer:
          `"use client";

import { useState } from "react";

export default function Message() {
  const [msg, setMsg] = useState("Hello");

  return (
    <button onClick={() => setMsg("Clicked!")}>
      {msg}
    </button>
  );
}

Explanation:
Event handling and state updates require a Client Component.`,
      },
      {
        id: "e4-q7",
        title: "Q7. useState logic (10 pts)",
        pts: 10,
        type: "code",
        prompt:
          "Create a component that increases a number by 2 when clicked.",
        answer:
          `"use client";

import { useState } from "react";

export default function PlusTwo() {
  const [n, setN] = useState(0);

  return (
    <button onClick={() => setN(n + 2)}>
      {n}
    </button>
  );
}`,
      },
      {
        id: "e4-q8",
        title: "Q8. loading.jsx behavior (10 pts)",
        pts: 10,
        type: "long",
        prompt:
          "When does loading.jsx appear automatically?",
        answer:
          `loading.jsx appears when a route segment is loading,
such as during navigation or server data fetching.`,
      },
    ],
  },

  {
    part: "Part 3: Routing & Layout",
    points: 30,
    items: [
      {
        id: "e4-q9",
        title: "Q9. Routing task (10 pts)",
        pts: 10,
        type: "long",
        prompt:
          "Create a folder structure for /admin and /admin/users.",
        directory: `app/
└─ admin/
   ├─ page.jsx
   └─ users/
      └─ page.jsx`,
        answer:
          `/admin → admin/page.jsx
/admin/users → admin/users/page.jsx`,
      },
      {
        id: "e4-q10",
        title: "Q10. layout.jsx usage (10 pts)",
        pts: 10,
        type: "long",
        prompt:
          "Why is layout.jsx useful for navigation menus?",
        answer:
          `layout.jsx keeps shared UI like navigation menus visible
while navigating between pages.`,
      },
      {
        id: "e4-q11",
        title: "Q11. Link component (10 pts)",
        pts: 10,
        type: "code",
        prompt:
          "Create a Link that navigates to /settings.",
        answer:
          `import Link from "next/link";

<Link href="/settings">Settings</Link>`,
      },
    ],
  },

  {
    part: "Part 4: Thinking Questions",
    points: 20,
    items: [
      {
        id: "e4-q12",
        title: "Q12. Security (10 pts)",
        pts: 10,
        type: "long",
        prompt:
          "Why should API keys not be used in Client Components?",
        answer:
          `Client Components run in the browser.
API keys would be exposed to users and are not secure.`,
      },
      {
        id: "e4-q13",
        title: "Q13. UX design (10 pts)",
        pts: 10,
        type: "long",
        prompt:
          "When is loading.jsx better than Suspense?",
        answer:
          `When the entire page or route is loading.
loading.jsx provides a route-level loading UI.`,
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

export default function Exam4App() {
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
        <h1>Next.js Basics Exam 4</h1>
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

              <button
                className="answer-toggle"
                onClick={() => toggle(q.id)}
              >
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
