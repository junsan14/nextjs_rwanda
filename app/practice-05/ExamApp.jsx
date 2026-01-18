// app/exam5/Exam5App.jsx
"use client";

import { useMemo, useState } from "react";

/* =======================
   QUESTIONS (EXAM 5)
======================= */

const QUESTIONS = [
  {
    part: "Part 1: Core Concepts",
    points: 20,
    items: [
      {
        id: "e5-q1",
        title: "Q1. Route segments (4 pts)",
        pts: 4,
        type: "long",
        prompt:
          "In the App Router, what does each folder represent? Explain using one example.",
        answer:
          `Each folder represents a URL segment.
Example: app/shop/cart/page.jsx maps to /shop/cart.`,
      },
      {
        id: "e5-q2",
        title: "Q2. URL from structure (4 pts)",
        pts: 4,
        type: "long",
        prompt: "Explain the URL created by this structure.",
        directory: `app/
└─ shop/
   └─ cart/
      └─ page.jsx`,
        answer:
          `URL: /shop/cart
page.jsx defines the UI for that route.`,
      },
      {
        id: "e5-q3",
        title: "Q3. Dynamic routes (4 pts)",
        pts: 4,
        type: "long",
        prompt: "What does [id] mean here? Give one example URL.",
        directory: `app/
└─ products/
   └─ [id]/
      └─ page.jsx`,
        answer:
          `[id] is a dynamic route parameter.
Example URL: /products/42 (id = "42").`,
      },
      {
        id: "e5-q4",
        title: "Q4. Client Component requirement (4 pts)",
        pts: 4,
        type: "long",
        prompt:
          "Name two features that require a Client Component.",
        answer:
          `Using hooks (useState/useEffect) and handling events (onClick/onChange) require a Client Component.`,
      },
      {
        id: "e5-q5",
        title: "Q5. Link vs a (4 pts)",
        pts: 4,
        type: "long",
        prompt:
          "Why is <Link> usually better than <a> for internal navigation in Next.js?",
        answer:
          `Link enables client-side navigation without full reload, making transitions faster and smoother (and can prefetch).`,
      },
    ],
  },

  {
    part: "Part 2: Code Reading & Debugging",
    points: 30,
    items: [
      {
        id: "e5-q6",
        title: "Q6. Bug fixing (10 pts)",
        pts: 10,
        type: "code",
        prompt:
          "This component has an issue in Next.js App Router. Explain and fix it.",
        code: `import { useState } from "react";

export default function Counter() {
  const [n, setN] = useState(0);

  return (
    <button onClick={() => setN(n + 1)}>
      {n}
    </button>
  );
}`,
        answer:
          `"use client";

import { useState } from "react";

export default function Counter() {
  const [n, setN] = useState(0);

  return (
    <button onClick={() => setN(n + 1)}>
      {n}
    </button>
  );
}

Explanation:
Hooks and event handlers require a Client Component ("use client").`,
      },
      {
        id: "e5-q7",
        title: "Q7. loading.jsx creation (10 pts)",
        pts: 10,
        type: "code",
        prompt:
          'Write a loading.jsx file that displays: "Loading..."',
        answer:
          `export default function Loading() {
  return <p>Loading...</p>;
}`,
      },
      {
        id: "e5-q8",
        title: "Q8. Suspense understanding (10 pts)",
        pts: 10,
        type: "long",
        prompt:
          "In one paragraph, explain what Suspense does and when you would use it.",
        answer:
          `Suspense provides component-level loading UI. You wrap a slow component with Suspense so the rest of the page can render while that component shows a fallback.`,
      },
    ],
  },

  {
    part: "Part 3: Routing & Layout",
    points: 30,
    items: [
      {
        id: "e5-q9",
        title: "Q9. Build routes (10 pts)",
        pts: 10,
        type: "long",
        prompt:
          "Create a folder structure for /blog and /blog/2026.",
        directory: `app/
└─ blog/
   ├─ page.jsx
   └─ [year]/
      └─ page.jsx`,
        answer:
          `/blog → blog/page.jsx
/blog/2026 → blog/[year]/page.jsx`,
      },
      {
        id: "e5-q10",
        title: "Q10. Why layout.jsx? (10 pts)",
        pts: 10,
        type: "long",
        prompt:
          "What is one benefit of using layout.jsx for a sidebar menu?",
        answer:
          `The sidebar stays visible across pages in the same segment, so you don’t repeat the menu on every page and navigation feels consistent.`,
      },
      {
        id: "e5-q11",
        title: "Q11. Write a Link (10 pts)",
        pts: 10,
        type: "code",
        prompt:
          "Write a Link that navigates to /08-loading-error.",
        answer:
          `import Link from "next/link";

<Link href="/08-loading-error">Loading & Error UI</Link>`,
      },
    ],
  },

  {
    part: "Part 4: Thinking Questions",
    points: 20,
    items: [
      {
        id: "e5-q12",
        title: "Q12. Security (10 pts)",
        pts: 10,
        type: "long",
        prompt:
          "Why should database queries not be written in a Client Component?",
        answer:
          `Client Components run in the browser, so DB credentials and queries could be exposed. DB access should stay on the server for security.`,
      },
      {
        id: "e5-q13",
        title: "Q13. Choose loading strategy (10 pts)",
        pts: 10,
        type: "long",
        prompt:
          "A page is fast except for one slow list section. Should you use loading.jsx or Suspense? Explain.",
        answer:
          `Use Suspense. It allows the rest of the page to render immediately while only the slow list shows a fallback. loading.jsx is route-level.`,
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

export default function Exam5App() {
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
        <h1>Next.js Basics Exam 5</h1>
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
