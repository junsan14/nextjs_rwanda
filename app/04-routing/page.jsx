export default function RoutingAndLayoutSummary() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif", lineHeight: "1.6" }}>
      <h1 style={{ color: "#2563eb" }}>Next.js Routing & Layout Summary</h1>

      <section>
        <h2>1️⃣ App Router (Next.js 13+)</h2>
        <p>
          - Use <code>app/</code> folder for routes.
          <br />
          - Each folder with <code>page.js</code> = a route.
          <br />
          - Nested <code>layout.js</code> can wrap child pages.
          <br />
          - Dynamic routes use <code>[param]/page.js</code>.
        </p>
        <pre style={{ background: "#f4f4f4", padding: "10px" }}>
{`app/
├─ layout.js        -> global layout
├─ page.js          -> /
├─ about/
│  └─ page.js      -> /about
├─ blog/
│  └─ [id]/page.js -> /blog/:id`}
        </pre>
      </section>

      <section>
        <h2>2️⃣ Page Router (Classic)</h2>
        <p>
          - Use <code>pages/</code> folder.
          <br />
          - Each file = route.
          <br />
          - Dynamic routes: <code>[id].js</code>
          <br />
          - Global layout via <code>_app.js</code>.
        </p>
        <pre style={{ background: "#f4f4f4", padding: "10px" }}>
{`pages/
├─ _app.js       -> global layout
├─ index.js      -> /
├─ about.js      -> /about
├─ blog/
│  └─ [id].js   -> /blog/:id`}
        </pre>
      </section>

      <section>
        <h2>3️⃣ Key Differences</h2>
        <ul>
          <li>App Router uses **Server Components by default**</li>
          <li>Nested layouts are easier in App Router</li>
          <li>Page Router requires `_app.js` for global layout</li>
          <li>Dynamic routes: `[param]/page.js` (App) vs `[param].js` (Page)</li>
          <li>Loading & Error UI files are only in App Router</li>
        </ul>
      </section>

      <section>
        <h2>4️⃣ Example Links</h2>
        <p>
          Use <code>Link</code> component to navigate:
        </p>
        <pre style={{ background: "#f4f4f4", padding: "10px" }}>
{`import Link from "next/link";

<Link href="/about">Go to About</Link>
<Link href="/blog/1">Go to Blog 1</Link>`}
        </pre>
      </section>

      <section>
        <h2>5️⃣ Nested Layout Example</h2>
        <pre style={{ background: "#f4f4f4", padding: "10px" }}>
{`// app/blog/layout.js
export default function BlogLayout({ children }) {
  return (
    <div>
      <h2>Blog Section</h2>
      {children}
    </div>
  );
}

// app/blog/[id]/page.js
export default function BlogPost({ params }) {
  return <p>Blog Post ID: {params.id}</p>;
}`}
        </pre>
      </section>

      <p style={{ marginTop: "20px", fontStyle: "italic" }}>
        ✅ App Router = modern, server-first, nested layouts <br />
        ✅ Page Router = classic, simpler, uses _app.js
      </p>
    </div>
  );
}
