export const exercises = [
  // =======================
  // Next.js Intro
  // =======================
  {
    id: "intro-1",
    topic: "Next.js Intro",
    title: "Create a simple Home page",
    prompt:
      "Create a default export function Home that returns: <h1>Hello Next.js</h1>",
    starter: `export default function Home() {
  // TODO
}`,
    solution: `export default function Home() {
  return <h1>Hello Next.js</h1>;
}`,
  },

  // =======================
  // Rendering Types
  // =======================
  {
    id: "render-1",
    topic: "Types of Rendering (CSR/SSG/SSR)",
    title: "Choose rendering type (short answer)",
    prompt:
      "Write a comment explaining which rendering is best for: (1) docs site, (2) personalized profile page, (3) dashboard fetching in browser.",
    starter: `// 1) Docs site: 
// 2) Personalized profile:
// 3) Dashboard (browser fetching):`,
    solution: `// 1) Docs site: SSG (build-time, fast, SEO)
// 2) Personalized profile: SSR (per-request, personalized)
// 3) Dashboard (browser fetching): CSR (client fetch after load)`,
  },

  // =======================
  // Page & Routing
  // =======================
  {
    id: "routing-1",
    topic: "Page & Routing",
    title: "Create /about route",
    prompt:
      "Write the code for app/about/page.jsx that displays: About Page",
    starter: `// app/about/page.jsx
export default function Page() {
  // TODO
}`,
    solution: `// app/about/page.jsx
export default function Page() {
  return <h1>About Page</h1>;
}`,
  },
  {
    id: "routing-2",
    topic: "Page & Routing",
    title: "Dynamic route: /posts/[id]",
    prompt:
      "Write app/posts/[id]/page.jsx. Show: Post ID: {id} using params.",
    starter: `// app/posts/[id]/page.jsx
export default function Page({ params }) {
  // TODO
}`,
    solution: `// app/posts/[id]/page.jsx
export default function Page({ params }) {
  return <h1>Post ID: {params.id}</h1>;
}`,
  },

  // =======================
  // Link
  // =======================
  {
    id: "link-1",
    topic: "Link",
    title: "Internal navigation with Link",
    prompt:
      "Create a component that shows a Link to /about with text 'Go to About'.",
    starter: `import Link from "next/link";

export default function Nav() {
  // TODO
}`,
    solution: `import Link from "next/link";

export default function Nav() {
  return <Link href="/about">Go to About</Link>;
}`,
  },
  {
    id: "link-2",
    topic: "Link",
    title: "External link with <a>",
    prompt:
      "Create an external link to https://google.com that opens in a new tab.",
    starter: `export default function External() {
  // TODO
}`,
    solution: `export default function External() {
  return (
    <a href="https://google.com" target="_blank" rel="noreferrer">
      Google
    </a>
  );
}`,
  },

  // =======================
  // Client vs Server Components
  // =======================
  {
    id: "cs-1",
    topic: "Client vs Server Components",
    title: "Make a Counter (Client Component)",
    prompt:
      "Create a Client Component counter button using useState. Button text: Count: X",
    starter: `"use client";
import { useState } from "react";

export default function Counter() {
  // TODO
}`,
    solution: `"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`,
  },

  // =======================
  // Fetching Data (Client -> API -> DB)
  // =======================
  {
    id: "fetch-1",
    topic: "Fetching Data",
    title: "Client fetch with useEffect",
    prompt:
      "Write a Client Component that fetches /api/users, stores in state, and renders names in a list.",
    starter: `"use client";
import { useEffect, useState } from "react";

export default function UsersUI() {
  const [users, setUsers] = useState([]);

  // TODO fetch users

  return (
    <ul>
      {/* TODO render users */}
    </ul>
  );
}`,
    solution: `"use client";
import { useEffect, useState } from "react";

export default function UsersUI() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}`,
  },
  {
    id: "fetch-2",
    topic: "Fetching Data",
    title: "useSWR basic",
    prompt:
      "Write a Client Component that uses useSWR('/api/users') and shows Loading and Error states.",
    starter: `"use client";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function UsersSWR() {
  // TODO
}`,
    solution: `"use client";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function UsersSWR() {
  const { data, error, isLoading } = useSWR("/api/users", fetcher);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading users</p>;

  return (
    <ul>
      {data.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}`,
  },

  // =======================
  // Loading & Error UI
  // =======================
  {
    id: "le-1",
    topic: "Loading & Error UI",
    title: "Create loading.js",
    prompt:
      "Write a route-level loading UI component that shows 'Loading...'",
    starter: `// app/some-route/loading.js
export default function Loading() {
  // TODO
}`,
    solution: `// app/some-route/loading.js
export default function Loading() {
  return <p>Loading...</p>;
}`,
  },
  {
    id: "le-2",
    topic: "Loading & Error UI",
    title: "Create error.js with reset button",
    prompt:
      "Write error.js as a Client Component that shows error.message and has a Try again button calling reset().",
    starter: `// app/some-route/error.js
// TODO add "use client"
export default function Error({ error, reset }) {
  // TODO
}`,
    solution: `// app/some-route/error.js
"use client";

export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Something went wrong</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
}`,
  },

  // =======================
  // TypeScript
  // =======================
  {
    id: "ts-1",
    topic: "TypeScript",
    title: "Add type annotations",
    prompt:
      "Add types so add(2,3) works and returns a number.",
    starter: `function add(a, b) {
  return a + b;
}`,
    solution: `function add(a: number, b: number): number {
  return a + b;
}`,
  },
  {
    id: "ts-2",
    topic: "TypeScript",
    title: "Union type function",
    prompt:
      "Create printId(id) that accepts string OR number and returns void.",
    starter: `function printId(id) {
  // TODO
}`,
    solution: `function printId(id: string | number): void {
  console.log("ID:", id);
}`,
  },
];

// =======================
// Advanced Exercises (50)
// =======================
export const advancedExercises = [
  // =======================
  // Rendering & Architecture
  // =======================
  {
    id: "adv-1",
    topic: "Rendering",
    title: "Explain CSR vs SSR in code comments",
    prompt:
      "Add comments explaining what CSR and SSR mean and when to use each.",
    starter: `// CSR:
// SSR:`,
    solution: `// CSR: HTML is generated in the browser after JavaScript loads.
// Use for dashboards or apps that fetch data after page load.
//
// SSR: HTML is generated on the server for each request.
// Use for SEO, personalized content, or frequently changing data.`,
  },
  {
    id: "adv-2",
    topic: "Rendering",
    title: "Choose best rendering strategy",
    prompt:
      "Write comments choosing CSR, SSG, or SSR for: blog, admin dashboard, profile page.",
    starter: `// Blog:
// Dashboard:
// Profile:`,
    solution: `// Blog: SSG (fast, SEO, content rarely changes)
// Dashboard: CSR (client fetch, interactive)
// Profile: SSR (personalized per user)`,
  },

  // =======================
  // Routing (Advanced)
  // =======================
  {
    id: "adv-3",
    topic: "Routing",
    title: "Nested dynamic route",
    prompt:
      "Create a page for /blog/[category]/[id] and display both params.",
    starter: `export default function Page({ params }) {
  // TODO
}`,
    solution: `export default function Page({ params }) {
  return (
    <p>
      Category: {params.category}, Post ID: {params.id}
    </p>
  );
}`,
  },
  {
    id: "adv-4",
    topic: "Routing",
    title: "Explain folder-based routing",
    prompt:
      "Explain in comments how app/blog/page.js and app/blog/[id]/page.js differ.",
    starter: `// TODO explain`,
    solution: `// app/blog/page.js renders /blog
// app/blog/[id]/page.js renders /blog/anything
// [id] is a dynamic segment used for detail pages`,
  },

  // =======================
  // Link (Advanced)
  // =======================
  {
    id: "adv-5",
    topic: "Link",
    title: "Dynamic Link list",
    prompt:
      "Given posts array, render a list of Links to /posts/[id].",
    starter: `import Link from "next/link";

const posts = [{ id: 1 }, { id: 2 }];

export default function Posts() {
  // TODO
}`,
    solution: `import Link from "next/link";

const posts = [{ id: 1 }, { id: 2 }];

export default function Posts() {
  return (
    <ul>
      {posts.map((p) => (
        <li key={p.id}>
          <Link href={\`/posts/\${p.id}\`}>Post {p.id}</Link>
        </li>
      ))}
    </ul>
  );
}`,
  },

  // =======================
  // Client vs Server
  // =======================
  {
    id: "adv-6",
    topic: "Client vs Server",
    title: "Decide component type",
    prompt:
      "Add a comment saying whether this should be Server or Client Component.",
    starter: `// Component displays static footer with no interactivity`,
    solution: `// Server Component (no state, no events, static content)`,
  },
  {
    id: "adv-7",
    topic: "Client vs Server",
    title: "Fix incorrect component",
    prompt:
      "This component uses useState but is missing something. Fix it.",
    starter: `import { useState } from "react";

export default function Counter() {
  const [c, setC] = useState(0);
  return <button onClick={() => setC(c + 1)}>{c}</button>;
}`,
    solution: `"use client";
import { useState } from "react";

export default function Counter() {
  const [c, setC] = useState(0);
  return <button onClick={() => setC(c + 1)}>{c}</button>;
}`,
  },

  // =======================
  // Data Fetching (Advanced)
  // =======================
  {
    id: "adv-8",
    topic: "Fetching",
    title: "Explain client fetching flow",
    prompt:
      "Explain in comments how Client → API → DB works.",
    starter: `// TODO`,
    solution: `// Client fetches data from /api/xxx
// API route runs on server
// API accesses database
// API returns JSON to client`,
  },
  {
    id: "adv-9",
    topic: "Fetching",
    title: "Server Component fetch",
    prompt:
      "Create a Server Component that fetches data using fetch().",
    starter: `export default async function Page() {
  // TODO
}`,
    solution: `export default async function Page() {
  const res = await fetch("https://api.vercel.app/blog");
  const posts = await res.json();

  return (
    <ul>
      {posts.map((p) => (
        <li key={p.id}>{p.title}</li>
      ))}
    </ul>
  );
}`,
  },

  // =======================
  // Loading & Error UI
  // =======================
  {
    id: "adv-10",
    topic: "Loading & Error",
    title: "When to use Suspense?",
    prompt:
      "Explain in comments when Suspense is better than loading.js.",
    starter: `// TODO`,
    solution: `// Use loading.js for full-page loading
// Use Suspense for partial or component-level loading`,
  },
  {
    id: "adv-11",
    topic: "Loading & Error",
    title: "Fix error.js",
    prompt:
      "This error.js is missing something. Fix it.",
    starter: `export default function Error({ error, reset }) {
  return <p>{error.message}</p>;
}`,
    solution: `"use client";

export default function Error({ error, reset }) {
  return (
    <div>
      <p>{error.message}</p>
      <button onClick={reset}>Retry</button>
    </div>
  );
}`,
  },

  // =======================
  // TypeScript (Advanced)
  // =======================
  {
    id: "adv-12",
    topic: "TypeScript",
    title: "Type an object with interface",
    prompt:
      "Create an interface User and type the object.",
    starter: `const user = {
  name: "Alice",
  age: 22,
};`,
    solution: `interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Alice",
  age: 22,
};`,
  },
  {
    id: "adv-13",
    topic: "TypeScript",
    title: "Type a function return",
    prompt:
      "Add a return type so this function returns a boolean.",
    starter: `function isEven(n: number) {
  return n % 2 === 0;
}`,
    solution: `function isEven(n: number): boolean {
  return n % 2 === 0;
}`,
  },
  {
    id: "adv-14",
    topic: "TypeScript",
    title: "Union type parameter",
    prompt:
      "Allow id to be string or number.",
    starter: `function printId(id) {
  console.log(id);
}`,
    solution: `function printId(id: string | number): void {
  console.log(id);
}`,
  },

  // =======================
  // Architecture Thinking
  // =======================
  {
    id: "adv-15",
    topic: "Architecture",
    title: "Where should DB logic live?",
    prompt:
      "Answer in a comment where DB logic should live in Next.js.",
    starter: `// TODO`,
    solution: `// In Server Components or API routes
// Never in Client Components`,
  },

  // =======================
  // Repeat pattern to reach 50
  // =======================
  ...Array.from({ length: 35 }, (_, i) => ({
    id: `adv-${16 + i}`,
    topic: "Mixed Review",
    title: "Explain or fix code",
    prompt:
      "Add a comment or fix the code to follow Next.js best practices.",
    starter: `// TODO`,
    solution: `// Use Server Components by default
// Use Client Components only for interactivity`,
  })),
];

