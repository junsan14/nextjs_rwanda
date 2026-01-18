"use client";

import { useMemo, useState } from "react";

const QUESTIONS = [
  {
    part: "Part 1: Core Concepts (Short Answer)",
    points: 20,
    items: [
      {
        id: "q1",
        title: "Q1. App Router (4 pts)",
        pts: 4,
        type: "long",
        prompt:
          "Explain the role of page.jsx, layout.jsx, and loading.jsx in Next.js App Router.",
        answer: `- page.jsx: Defines the UI for a route (the page content).
- layout.jsx: Wraps pages in the same segment and persists across route changes inside that segment.
- loading.jsx: Route-level loading UI shown automatically while the route is loading/streaming.`,
      },
      {
        id: "q2",
        title: "Q2. Routing (4 pts)",
        pts: 4,
        type: "long",
        prompt: "Refer to this folder structure and answer the questions.",
        directory: `app/
└─ blog/
   └─ post/
      └─ [id]/
         └─ page.jsx`,
        extra: `1) What is the URL?
2) What does [id] mean?`,
        answer: `1) URL pattern: /blog/post/<id>
2) [id] is a dynamic route segment (route param). Example: /blog/post/123 => params.id === "123".`,
      },
      {
        id: "q3",
        title: "Q3. Client vs Server Components (4 pts)",
        pts: 4,
        type: "long",
        prompt:
          "Explain two differences between Server Components and Client Components.",
        answer: `- Server Components run on the server and can access server resources (DB/secrets). Client Components run in the browser.
- Client Components can use hooks (useState/useEffect) and handle events; Server Components cannot.`,
      },
      {
        id: "q4",
        title: "Q4. Link component (4 pts)",
        pts: 4,
        type: "long",
        prompt:
          "Why should we use Link from next/link instead of a normal <a> tag?",
        answer:
          "Link enables client-side navigation (no full reload), faster transitions, and can prefetch routes for better UX.",
      },
      {
        id: "q5",
        title: "Q5. loading.jsx vs Suspense (4 pts)",
        pts: 4,
        type: "long",
        prompt:
          "What is the difference between loading.jsx and Suspense? Give one use case for each.",
        answer: `- loading.jsx: Route-level loading UI for a segment. Use it when navigating/loading a whole page/segment.
- Suspense: Component-level boundary with fallback. Use it when only part of the page is slow (partial loading).`,
      },
    ],
  },
  {
    part: "Part 2: Code Reading & Debugging",
    points: 30,
    items: [
      {
        id: "q6a",
        title: "Q6. Bug fixing (10 pts) - (1) What is wrong?",
        pts: 5,
        type: "long",
        prompt: "Read the code and explain what is wrong.",
        code: `import useState from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}`,
        answer:
          'useState is a named export (must be imported as { useState }). Also hooks require a Client Component ("use client") in App Router.',
      },
      {
        id: "q6b",
        title: "Q6. Bug fixing (10 pts) - (2) Fix the code",
        pts: 5,
        type: "code",
        prompt: "Write the corrected version of the component.",
        answer: `"use client";

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
        id: "q7",
        title: "Q7. Client or Server? (10 pts)",
        pts: 10,
        type: "long",
        prompt:
          "Decide Server/Client and write a short reason for each: Blog list, Like button, Static footer, Comment form.",
        answer: `Typical:
- Blog post list: Server (data fetch + less JS)
- Like button: Client (click + state)
- Static footer: Server (no interactivity)
- Comment form: Client (inputs + events)`,
      },
      {
        id: "q8",
        title: "Q8. Suspense behavior (10 pts)",
        pts: 10,
        type: "long",
        prompt: `Does the following code show "Loading..."? Explain why or why not.`,
        code: `import { Suspense } from "react";

async function getData() {
  await new Promise((r) => setTimeout(r, 3000));
  return "Hello";
}

export default async function Page() {
  const data = await getData();

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <p>{data}</p>
    </Suspense>
  );
}`,
        answer:
          'No (not as expected). Because the page awaits data before rendering Suspense. The await must happen inside a child component wrapped by Suspense.',
      },
    ],
  },
  {
    part: "Part 3: Practical Coding",
    points: 30,
    items: [
      {
        id: "q9",
        title: "Q9. Routing task (10 pts)",
        pts: 10,
        type: "long",
        prompt:
          "Create a folder structure and explain the URL for /products and /products/123.",
        answer: `app/
└─ products/
   ├─ page.jsx       => /products
   └─ [id]/
      └─ page.jsx    => /products/<id>`,
      },
      {
        id: "q10",
        title: "Q10. Loading UI (10 pts)",
        pts: 10,
        type: "code",
        prompt:
          'Create a simple loading.jsx that displays: "Loading page…". When is it used automatically?',
        answer: `export default function Loading() {
  return <p>Loading page...</p>;
}

// Used automatically when the segment/route is loading during navigation or streaming.`,
      },
      {
        id: "q11",
        title: "Q11. Client Component with useState (10 pts)",
        pts: 10,
        type: "code",
        prompt:
          "Write a Client Component that displays a number and increases it when a button is clicked.",
        answer: `"use client";

import { useState } from "react";

export default function Counter() {
  const [n, setN] = useState(0);
  return (
    <div>
      <p>{n}</p>
      <button onClick={() => setN(n + 1)}>+</button>
    </div>
  );
}`,
      },
    ],
  },
  {
    part: "Part 4: Thinking Questions",
    points: 20,
    items: [
      {
        id: "q12",
        title: "Q12. Architecture (10 pts)",
        pts: 10,
        type: "long",
        prompt:
          "Why is it recommended to use Server Components by default in Next.js?",
        answer:
          "To reduce client JS, fetch data securely on the server, improve performance/SEO, and keep secrets/DB access out of the browser. Use Client Components only when you need interactivity.",
      },
      {
        id: "q13",
        title: "Q13. UX question (10 pts)",
        pts: 10,
        type: "long",
        prompt:
          "A page loads slowly because only one section is slow. Which is better: loading.jsx or Suspense? Explain.",
        answer:
          "Suspense is better because it enables partial loading: show the rest of the page immediately and show fallback only for the slow section. loading.jsx is route-level.",
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

export default function ExamApp() {
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
        <h1>Next.js Basics Exam</h1>
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

              {q.extra && <p className="question-extra">{q.extra}</p>}

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

              {open[q.id] && <pre className="model-answer">{q.answer}</pre>}
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}
