// app/quiz/data/questions.js
export const questions = [
  // =====================
  // Intro to Next.js (1–8)
  // =====================
  { id: 1, type: "tf", question: "Next.js is a React framework.", answer: true },
  { id: 2, type: "mcq", question: "Who created Next.js?", options: ["Google", "Meta", "Vercel", "Microsoft"], answer: 2 },
  { id: 3, type: "tf", question: "Next.js can be used to build full-stack applications.", answer: true },
  { id: 4, type: "mcq", question: "Which command creates a new Next.js app?", options: ["npm create-react-app", "npx create-next-app", "npm install next", "next new app"], answer: 1 },
  { id: 5, type: "tf", question: "Next.js replaces React completely.", answer: false },
  { id: 6, type: "mcq", question: "In App Router, components are Server Components by default.", options: ["True", "False"], answer: 0 },
  { id: 7, type: "tf", question: "You add 'use client' when you need browser interaction (events/state).", answer: true },
  { id: 8, type: "mcq", question: "Which is a common Next.js feature?", options: ["Routing", "Layouts", "API routes", "All of the above"], answer: 3 },

  // =====================
  // Rendering Types (9–20)
  // =====================
  { id: 9, type: "mcq", question: "Which rendering generates HTML in the browser?", options: ["SSR", "SSG", "CSR", "ISR"], answer: 2 },
  { id: 10, type: "tf", question: "In CSR, the browser generates the HTML.", answer: true },
  { id: 11, type: "mcq", question: "Which rendering happens at build time?", options: ["CSR", "SSR", "SSG", "Hydration"], answer: 2 },
  { id: 12, type: "tf", question: "SSG is good for content that rarely changes.", answer: true },
  { id: 13, type: "mcq", question: "Which rendering generates HTML on each request?", options: ["CSR", "SSG", "SSR", "Static HTML"], answer: 2 },
  { id: 14, type: "tf", question: "SSR can be useful for personalized content.", answer: true },
  { id: 15, type: "mcq", question: "Which option is usually fastest for first load (static pages)?", options: ["CSR", "SSG", "SSR", "All equal"], answer: 1 },
  { id: 16, type: "tf", question: "CSR requires a server to generate HTML before sending to the client.", answer: false },
  { id: 17, type: "mcq", question: "Which is a good choice for a dashboard that loads data in the browser?", options: ["CSR", "SSG", "SSR", "None"], answer: 0 },
  { id: 18, type: "tf", question: "SSG pages are pre-rendered before deployment.", answer: true },
  { id: 19, type: "mcq", question: "Which rendering is best for frequently changing data pages?", options: ["SSG", "SSR", "CSR only", "None"], answer: 1 },
  { id: 20, type: "tf", question: "CSR often fetches data after the page loads.", answer: true },

  // =====================
  // Page & Routing (21–40)
  // =====================
  { id: 21, type: "mcq", question: "Which file creates the route /about in App Router?", options: ["pages/about.js", "app/about.js", "app/about/page.js", "app/page/about.js"], answer: 2 },
  { id: 22, type: "tf", question: "Nested folders automatically create nested routes.", answer: true },
  { id: 23, type: "mcq", question: "What is the route of app/page.js?", options: ["/home", "/", "/index", "/main"], answer: 1 },
  { id: 24, type: "tf", question: "Extra router configuration is required in App Router.", answer: false },
  { id: 25, type: "mcq", question: "Which file defines shared UI like headers and footers?", options: ["page.js", "route.js", "layout.js", "loading.js"], answer: 2 },
  { id: 26, type: "tf", question: "layout.js wraps pages using the children prop.", answer: true },
  { id: 27, type: "mcq", question: "Which is a dynamic route segment?", options: ["{id}", "(id)", "[id]", "<id>"], answer: 2 },
  { id: 28, type: "tf", question: "Dynamic routes are commonly used for blog posts.", answer: true },
  { id: 29, type: "mcq", question: "Which structure matches /blog/1 ?", options: ["app/blog/1/page.js", "app/blog/[id]/page.js", "app/blog/id/page.js", "pages/blog/[id].js"], answer: 1 },
  { id: 30, type: "tf", question: "params can be used in page, layout, and route files.", answer: true },
  { id: 31, type: "mcq", question: "What does app/blog/page.js represent?", options: ["/blog", "/blog/page", "/page/blog", "/blog/*"], answer: 0 },
  { id: 32, type: "tf", question: "In App Router, a folder can contain page.js and layout.js.", answer: true },
  { id: 33, type: "mcq", question: "Which file is route-level loading UI?", options: ["loading.js", "error.js", "layout.js", "route.js"], answer: 0 },
  { id: 34, type: "tf", question: "A route-specific layout should be placed inside that route folder.", answer: true },
  { id: 35, type: "mcq", question: "Which route does app/quiz/page.js create?", options: ["/quiz", "/app/quiz", "/page/quiz", "/quiz/page"], answer: 0 },
  { id: 36, type: "tf", question: "page.js files automatically become routes in App Router.", answer: true },
  { id: 37, type: "mcq", question: "Which folder creates /products/shoes ?", options: ["app/products/shoes/page.js", "app/products/[shoes]/page.js", "app/products/page.js", "pages/products/shoes.js"], answer: 0 },
  { id: 38, type: "tf", question: "app/layout.js is a global layout.", answer: true },
  { id: 39, type: "mcq", question: "Which one is NOT a special Next.js App Router file?", options: ["page.js", "layout.js", "loading.js", "router.js"], answer: 3 },
  { id: 40, type: "tf", question: "The App Router uses the app/ directory.", answer: true },

  // =====================
  // Link Component (41–55)
  // =====================
  { id: 41, type: "mcq", question: "What is the main purpose of the Link component?", options: ["Styling pages", "Fetching data", "Navigation without reload", "Database connection"], answer: 2 },
  { id: 42, type: "tf", question: "Link allows navigation without refreshing the page.", answer: true },
  { id: 43, type: "mcq", question: "Which package provides Link?", options: ["react-router", "next/router", "next/link", "react/link"], answer: 2 },
  { id: 44, type: "tf", question: "Link should be used for external websites.", answer: false },
  { id: 45, type: "mcq", question: "Which tag should be used for external links?", options: ["<Link>", "<div>", "<a>", "<span>"], answer: 2 },
  { id: 46, type: "tf", question: "Link improves navigation performance.", answer: true },
  { id: 47, type: "mcq", question: "Which attribute does Link use to specify the path?", options: ["to", "href", "path", "url"], answer: 1 },
  { id: 48, type: "tf", question: "Internal navigation should use Link instead of <a>.", answer: true },
  { id: 49, type: "mcq", question: "Which is a correct dynamic Link example?", options: ["<Link to={`/posts/${id}`}>", "<Link href={`/posts/${id}`}>", "<a href={`/posts/${id}`}>", "<Route href={`/posts/${id}`}>"], answer: 1 },
  { id: 50, type: "tf", question: "Link causes a full page refresh.", answer: false },
  { id: 51, type: "mcq", question: "Which import is correct for Link?", options: ['import { Link } from "next/link";', 'import Link from "next/link";', 'import Link from "next/router";', 'import Link from "react";'], answer: 1 },
  { id: 52, type: "tf", question: "You must import Link before using it.", answer: true },
  { id: 53, type: "mcq", question: "Which is best for linking to /blog/posts/1 ?", options: ['<Link href="/blog/posts/1">', '<a to="/blog/posts/1">', '<Route href="/blog/posts/1">', '<NavLink href="/blog/posts/1">'], answer: 0 },
  { id: 54, type: "tf", question: "Link is mainly used for internal navigation in Next.js.", answer: true },
  { id: 55, type: "mcq", question: "For external links, which is recommended?", options: ["Link", "<a>", "useRouter", "layout.js"], answer: 1 },

  // =====================
  // Client vs Server Components (56–75)
  // =====================
  { id: 56, type: "tf", question: "Server Components run on the server.", answer: true },
  { id: 57, type: "mcq", question: "Which component runs in the browser?", options: ["Server Component", "Layout", "Client Component", "Route Handler"], answer: 2 },
  { id: 58, type: "tf", question: "Server Components can use useEffect.", answer: false },
  { id: 59, type: "mcq", question: "Which component must include 'use client'?", options: ["Static footer", "SEO metadata", "Like button", "Server layout"], answer: 2 },
  { id: 60, type: "tf", question: "Client Components can handle clicks and form events.", answer: true },
  { id: 61, type: "mcq", question: "Which is NOT allowed in Server Components?", options: ["fetch()", "Database access", "useState()", "Reading files"], answer: 2 },
  { id: 62, type: "tf", question: "'use client' must appear before imports.", answer: true },
  { id: 63, type: "mcq", question: "Which statement is true?", options: ["Client can import Server components freely", "Server can import Client components", "Client can access DB directly", "Server must use 'use client'"], answer: 1 },
  { id: 64, type: "tf", question: "Client Components usually send more JavaScript to the browser.", answer: true },
  { id: 65, type: "mcq", question: "Which is best as a Client Component?", options: ["Static footer", "Like button", "Static article content", "Server-only DB query"], answer: 1 },
  { id: 66, type: "tf", question: "Server Components are better for performance in many cases.", answer: true },
  { id: 67, type: "mcq", question: "Which is best as a Server Component?", options: ["Counter button", "Comment form", "Static header", "Live chat widget"], answer: 2 },
  { id: 68, type: "tf", question: "Client Components can use useState and useEffect.", answer: true },
  { id: 69, type: "mcq", question: "Why avoid making everything a Client Component?", options: ["It breaks CSS", "It sends more JS", "It disables HTML", "It removes routing"], answer: 1 },
  { id: 70, type: "tf", question: "Server Components can access filesystem (fs).", answer: true },
  { id: 71, type: "mcq", question: "Which file type is typically a Client Component?", options: ["loading.js", "error.js", "layout.js", "route.js"], answer: 1 },
  { id: 72, type: "tf", question: "error.js must be a Client Component.", answer: true },
  { id: 73, type: "mcq", question: "What does 'use client' mean?", options: ["Runs only on server", "Runs in browser", "Creates API route", "Builds static HTML"], answer: 1 },
  { id: 74, type: "tf", question: "Client Components can safely store secrets like DB passwords.", answer: false },
  { id: 75, type: "mcq", question: "Where should DB logic be placed?", options: ["Client UI component", "API route or Server component", "CSS file", "next/link"], answer: 1 },

  // =====================
  // Fetching Data (76–88)
  // =====================
  { id: 76, type: "tf", question: "Server Components can fetch data using fetch, DB/ORM, and fs.", answer: true },
  { id: 77, type: "mcq", question: "In Client Components, you must fetch data via:", options: ["Database directly", "API routes", "fs", "ORM in browser"], answer: 1 },
  { id: 78, type: "tf", question: "useEffect + fetch is a common client-side data fetching method.", answer: true },
  { id: 79, type: "mcq", question: "Which is recommended in Client Components for data fetching?", options: ["use()", "useSWR", "params", "layout.js"], answer: 1 },
  { id: 80, type: "tf", question: "useSWR provides automatic caching.", answer: true },
  { id: 81, type: "mcq", question: "Which is a benefit of useSWR?", options: ["Direct DB access", "Auto re-fetch on focus", "Build-time rendering", "Disables loading UI"], answer: 1 },
  { id: 82, type: "tf", question: "Client Components can import better-sqlite3 and query the DB.", answer: false },
  { id: 83, type: "mcq", question: "Which flow is correct for client data fetching?", options: ["UI → DB", "UI → API → DB", "DB → UI → API", "UI → fs"], answer: 1 },
  { id: 84, type: "tf", question: "useSWR usually makes loading and error handling simpler.", answer: true },
  { id: 85, type: "mcq", question: "Where should '/api/users' logic live?", options: ["app/api/users/route.js", "app/users/ui/UsersUI.jsx", "app/users/page.js", "styles.css"], answer: 0 },
  { id: 86, type: "tf", question: "Relative URLs like '/api/users' work in the browser.", answer: true },
  { id: 87, type: "mcq", question: "Which method fetches data after initial render?", options: ["SSR", "SSG", "useEffect", "layout.js"], answer: 2 },
  { id: 88, type: "tf", question: "useSWR can re-fetch data automatically when the tab gains focus.", answer: true },

  // =====================
  // Loading & Error UI (89–100)
  // =====================
  { id: 89, type: "mcq", question: "What is the purpose of loading.js?", options: ["Show UI while loading", "Handle errors", "Create routes", "Make links"], answer: 0 },
  { id: 90, type: "tf", question: "loading.js is route-level loading UI.", answer: true },
  { id: 91, type: "mcq", question: "Which file must be in the same route folder to show loading UI?", options: ["loading.js", "index.js", "router.js", "server.js"], answer: 0 },
  { id: 92, type: "tf", question: "loading.js must be a Server Component.", answer: true },
  { id: 93, type: "mcq", question: "What does Suspense provide?", options: ["Route-level routing", "Component-level loading fallback", "DB connection", "External linking"], answer: 1 },
  { id: 94, type: "tf", question: "Suspense can wrap only slow components.", answer: true },
  { id: 95, type: "mcq", question: "Which file handles errors and can retry with reset()?", options: ["layout.js", "error.js", "loading.js", "page.js"], answer: 1 },
  { id: 96, type: "tf", question: "error.js receives error and reset() props.", answer: true },
  { id: 97, type: "mcq", question: "Which file is a Client Component by requirement?", options: ["loading.js", "error.js", "layout.js", "page.js"], answer: 1 },
  { id: 98, type: "tf", question: "If page.js throws an error, Next.js renders error.js.", answer: true },
  { id: 99, type: "mcq", question: "Which is true about loading.js vs Suspense?", options: ["Both are route-level only", "loading.js is route-level, Suspense is component-level", "Suspense replaces error.js", "loading.js requires 'use client'"], answer: 1 },
  { id: 100, type: "tf", question: "If a page runs slow logic, users should see loading UI instead of a blank screen.", answer: true },
// =====================
  // TypeScript (20 questions)
  // =====================
  {
    id: 101,
    type: "tf",
    question: "TypeScript is a superset of JavaScript.",
    answer: true,
  },
  {
    id: 102,
    type: "mcq",
    question: "What does TypeScript mainly add to JavaScript?",
    options: ["Static typing", "HTML templates", "Database", "CSS modules"],
    answer: 0,
  },
  {
    id: 103,
    type: "tf",
    question: "TypeScript code is compiled (transpiled) into JavaScript.",
    answer: true,
  },
  {
    id: 104,
    type: "mcq",
    question: "Which command initializes a tsconfig.json file?",
    options: ["npx ts init", "npx tsc --init", "npm init ts", "tsc init --new"],
    answer: 1,
  },
  {
    id: 105,
    type: "tf",
    question: "The final output of a TypeScript project can run in a JavaScript runtime.",
    answer: true,
  },
  {
    id: 106,
    type: "mcq",
    question: "Which type annotation is correct for a string variable?",
    options: ['let name: string = "John";', 'let name: String = 10;', 'let name: number = "John";', 'let name = string("John");'],
    answer: 0,
  },
  {
    id: 107,
    type: "tf",
    question: "TypeScript can help catch type errors before running the code.",
    answer: true,
  },
  {
    id: 108,
    type: "mcq",
    question: "Which is the correct type for a number variable?",
    options: ["int", "float", "number", "Number()"],
    answer: 2,
  },
  {
    id: 109,
    type: "tf",
    question: "boolean is a valid TypeScript type.",
    answer: true,
  },
  {
    id: 110,
    type: "mcq",
    question: "Which is the correct way to type an array of strings?",
    options: ["string()", "Array<string>", "string[]", "Both B and C"],
    answer: 3,
  },
  {
    id: 111,
    type: "mcq",
    question: "Which is a correct object type annotation?",
    options: [
      'const user: { name: string; age: number } = { name: "John", age: 20 };',
      'const user: { name: number; age: string } = { name: "John", age: 20 };',
      'const user: { name; age } = { name: "John", age: 20 };',
      'const user: object<string> = { name: "John", age: 20 };',
    ],
    answer: 0,
  },
  {
    id: 112,
    type: "tf",
    question: "An interface can define the shape of an object.",
    answer: true,
  },
  {
    id: 113,
    type: "mcq",
    question: "Which keyword is used to declare an interface?",
    options: ["type", "interface", "struct", "class"],
    answer: 1,
  },
  {
    id: 114,
    type: "tf",
    question: "A function with return type void should not return a value.",
    answer: true,
  },
  {
    id: 115,
    type: "mcq",
    question: "Which function return type is correct if it returns a number?",
    options: ["function getTime(): number", "function getTime(): int", "function getTime(): float", "function getTime(): Number[]"],
    answer: 0,
  },
  {
    id: 116,
    type: "mcq",
    question: "What is a union type?",
    options: [
      "A type that merges two arrays",
      "A type that allows multiple possible types",
      "A type used only for objects",
      "A type that removes errors",
    ],
    answer: 1,
  },
  {
    id: 117,
    type: "tf",
    question: "string | number means the value can be either a string or a number.",
    answer: true,
  },
  {
    id: 118,
    type: "mcq",
    question: "Which is a valid union type parameter?",
    options: [
      "function f(x: string & number) {}",
      "function f(x: string | number) {}",
      "function f(x: string || number) {}",
      "function f(x: union<string, number>) {}",
    ],
    answer: 1,
  },
  {
    id: 119,
    type: "tf",
    question: "TypeScript always changes how JavaScript runs at runtime.",
    answer: false,
  },
  {
    id: 120,
    type: "mcq",
    question: "Which command compiles TypeScript (in a typical project)?",
    options: ["npx ts", "npx tsc", "npm run react", "node typescript"],
    answer: 1,
  },

];
