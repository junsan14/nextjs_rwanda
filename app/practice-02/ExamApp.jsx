"use client";

import { useMemo, useState } from "react";

/* =======================
   QUESTIONS (EXAM 2)
======================= */

const QUESTIONS = [
  {
    part: "Part 1: Core Concepts",
    points: 20,
    items: [
      {
        id: "e2-q1",
        title: "Q1. page.jsx (4 pts)",
        pts: 4,
        type: "long",
        prompt:
          "What is the role of page.jsx in the App Router? When is it rendered?",
        answer:
          `page.jsx defines the UI for a route.
It is rendered when the user visits the URL that matches the folder path.`,
      },

      {
        id: "e2-q2",
        title: "Q2. Dynamic Routes (4 pts)",
        pts: 4,
        type: "long",
        prompt: "Explain the URL created by this structure:",
        directory: `app/
└─ users/
   └─ [username]/
      └─ page.jsx`,
        answer:
          `The URL pattern is /users/<username>.
[username] is a dynamic route parameter.
Example: /users/john`,
      },

      {
        id: "e2-q3",
        title: "Q3. Client Components (4 pts)",
        pts: 4,
        type: "long",
        prompt:
          "Why must Client Components start with \"use client\"?",
        answer:
          `"use client" tells Next.js that the component runs in the browser.
It is required to use hooks (useState, useEffect) and event handlers.`,
      },

      {
        id: "e2-q4",
        title: "Q4. loading.jsx (4 pts)",
        pts: 4,
        type: "long",
        prompt:
          "What problem does loading.jsx solve in Next.js?",
        answer:
          `loading.jsx provides automatic loading UI during route transitions or data fetching, improving user experience.`,
      },

      {
        id: "e2-q5",
        title: "Q5. Server Components (4 pts)",
        pts: 4,
        type: "long",
        prompt:
          "Give one advantage of Server Components.",
        answer:
          `Server Components reduce client-side JavaScript and can safely access databases or secrets.`,
      },
    ],
  },

  {
    part: "Part 2: Code Reading & Debugging",
    points: 30,
    items: [
      {
        id: "e2-q6",
        title: "Q6. Bug fixing (10 pts)",
        pts: 10,
        type: "code",
        prompt:
          "The following component has a problem. Explain and fix it.",
        code: `export default function Button() {
  function click() {
    alert("Clicked");
  }

  return <button onClick={click()}>Click</button>;
}`,
        answer:
          `"use client";

export default function Button() {
  function click() {
    alert("Clicked");
  }

  return <button onClick={click}>Click</button>;
}

Explanation:
Event handlers require a Client Component.`,
      },

      {
        id: "e2-q7",
        title: "Q7. useState (10 pts)",
        pts: 10,
        type: "code",
        prompt:
          "Create a counter component using useState.",
        answer:
          `"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}`,
      },

      {
        id: "e2-q8",
        title: "Q8. Suspense concept (10 pts)",
        pts: 10,
        type: "long",
        prompt:
          "What is Suspense used for in Next.js?",
        answer:
          `Suspense is used for component-level loading.
It allows part of a page to show a fallback UI while waiting for data.`,
      },
    ],
  },

  {
    part: "Part 3: Routing & Structure",
    points: 30,
    items: [
      {
        id: "e2-q9",
        title: "Q9. Routing task (10 pts)",
        pts: 10,
        type: "long",
        prompt:
          "Create a folder structure for /posts and /posts/hello.",
        directory: `app/
└─ posts/
   ├─ page.jsx
   └─ [slug]/
      └─ page.jsx`,
        answer:
          `/posts → posts/page.jsx
/posts/hello → posts/[slug]/page.jsx`,
      },

      {
        id: "e2-q10",
        title: "Q10. layout.jsx (10 pts)",
        pts: 10,
        type: "long",
        prompt:
          "What is layout.jsx used for? Give one example.",
        answer:
          `layout.jsx is used for shared UI.
Example: a sidebar or header that remains visible across pages.`,
      },

      {
        id: "e2-q11",
        title: "Q11. Link component (10 pts)",
        pts: 10,
        type: "code",
        prompt:
          "Create a Link that navigates to /dashboard.",
        answer:
          `import Link from "next/link";

<Link href="/dashboard">Dashboard</Link>`,
      },
    ],
  },

  {
    part: "Part 4: Thinking Question",
    points: 20,
    items: [
      {
        id: "e2-q12",
        title: "Q12. Performance (10 pts)",
        pts: 10,
        type: "long",
        prompt:
          "Why does Next.js recommend minimizing Client Components?",
        answer:
          `Because Client Components increase JavaScript sent to the browser, which can reduce performance.`,
      },

      {
        id: "e2-q13",
        title: "Q13. UX (10 pts)",
        pts: 10,
        type: "long",
        prompt:
          "When should you use loading.jsx instead of Suspense?",
        answer:
          `Use loading.jsx when the entire route or page is loading, such as during navigation between pages.`,
      },
    ],
  },
];

/* =======================
   UI COMPONENTS
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

export default function Exam2App() {
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
        <h1>Next.js Basics Exam 2</h1>
        <p>Total {totalPoints} points · 90 minutes</p>
      </header>

      {QUESTIONS.map((part) => (
        <section key={part.part} className="exam-section">
          <h2>{part.part} ({part.points} pts)</h2>

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
