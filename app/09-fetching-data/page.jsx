
export default function FetchingDataSummary() {
  return (
    <div className="fd">
      <h2 className="fd__title">Fetching Data in Next.js (App Router)</h2>

      <div className="fd__grid">
        {/* Server Components */}
        <section className="fd__card fd__card--server">
          <h3 className="fd__h3">🖥️ Server Components</h3>
          <p className="fd__text">
            Server Components can fetch data using any async I/O:
          </p>
          <ul className="fd__list">
            <li>
              <code>fetch()</code> API
            </li>
            <li>Database / ORM</li>
            <li>
              Filesystem via Node.js <code>fs</code>
            </li>
          </ul>

          <div className="fd__codeTitle">Example (fetch):</div>
          <pre className="fd__code">
{`export default async function Page() {
  const res = await fetch("https://api.vercel.app/blog");
  const posts = await res.json();

  return (
    <ul>
      {posts.map((p) => (
        <li key={p.id}>{p.title}</li>
      ))}
    </ul>
  );
}`}
          </pre>

          <div className="fd__codeTitle">Example (database):</div>
          <pre className="fd__code">
{`import { db, posts } from "@/lib/db";

export default async function Page() {
  const allPosts = await db.select().from(posts);

  return (
    <ul>
      {allPosts.map((p) => (
        <li key={p.id}>{p.title}</li>
      ))}
    </ul>
  );
}`}
          </pre>
        </section>

        {/* Client Components */}
        <section className="fd__card fd__card--client">
          <h3 className="fd__h3">🌐 Client Components</h3>
          <p className="fd__text">
            <strong>You cannot access the database directly.</strong> You must
            fetch data via <strong>API routes</strong>.
          </p>

          <div className="fd__flow">
            <span>UI (Client)</span>
            <span className="fd__arrow">→</span>
            <span>API Route</span>
            <span className="fd__arrow">→</span>
            <span>Database</span>
          </div>

          <div className="fd__codeTitle">page.jsx (Server):</div>
          <pre className="fd__code">
{`import UsersUI from "@/app/ui/users";

export default function Page() {
  return (
    <div>
      <h1>Users</h1>
      <UsersUI />
    </div>
  );
}`}
          </pre>

          <div className="fd__codeTitle">UsersUI.jsx (Client: useEffect + fetch):</div>
          <pre className="fd__code">
{`"use client";
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
}`}
          </pre>

          <div className="fd__codeTitle">API Route (server-side DB access):</div>
          <pre className="fd__code">
{`// app/api/users/route.js
import { getUsers } from "@/lib/db";

export async function GET() {
  return Response.json(getUsers());
}`}
          </pre>

          <div className="fd__note">
            <strong>Recommended:</strong> useSWR (caching, refetch on focus,
            easy loading & error states).
          </div>
        </section>
      </div>

      <section className="fd__card fd__card--ex">
        <h3 className="fd__h3">🧪 Exercises (from this lesson)</h3>
        <ul className="fd__list">
          <li>Create <code>/api/students</code> route (GET) using <code>getStudents()</code></li>
          <li>
            Create <code>StudentsUI</code> (Client) and fetch{" "}
            <code>/api/students</code> using <code>useEffect</code> and{" "}
            <code>useSWR</code>
          </li>
          <li>
            Create <code>students/page.jsx</code> and render <code>StudentsUI</code>
          </li>
        </ul>
      </section>
    </div>
  );
}
