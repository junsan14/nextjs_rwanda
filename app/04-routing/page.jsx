export default function RoutingAndLayoutSummary() {
  return (
    <section style={{ padding: "24px", lineHeight: 1.7 }}>
      <h1>Next.js Page & Routing Summary (App Router)</h1>

      <h2>1. App Router Basics</h2>
      <p>
        In Next.js App Router, every folder under the <code>app/</code> directory
        can contain a <code>page.js</code> file.
        This file automatically becomes a route.
      </p>

      <ul>
        <li>Folder name = URL path</li>
        <li><code>page.js</code> = rendered page</li>
        <li>No manual router setup is required</li>
      </ul>

      <pre>
{`app/04-routing/page.js
→ Route: /04-routing`}
      </pre>

      <h2>2. Basic Page Example</h2>
      <p>
        Visiting <code>/04-routing</code> renders the following component.
      </p>

      <pre>
{`export default function Page() {
  return <h1>We are studying Page and Routing</h1>
}`}
      </pre>

      <h2>3. Layouts</h2>
      <p>
        Layouts allow you to share common UI elements such as
        headers and footers across multiple pages.
      </p>

      <h3>3.1 Global Layout</h3>
      <p>
        <code>app/layout.js</code> defines a layout that wraps all pages
        in the application.
      </p>

      <pre>
{`export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <header>My Site Header</header>
        {children}
        <footer>My Site Footer</footer>
      </body>
    </html>
  )
}`}
      </pre>

      <h3>3.2 Route-specific Layout</h3>
      <p>
        You can define a layout that applies only to a specific route
        by placing a <code>layout.js</code> file inside that route folder.
      </p>

      <pre>
{`app/04-routing/layout.js`}
      </pre>

      <pre>
{`export default function Layout({ children }) {
  return (
    <div className="04-routing">
      This comes from the 04-routing layout!
      <main>{children}</main>
    </div>
  )
}`}
      </pre>

      <h2>4. Nested Routes</h2>
      <p>
        Nested folders automatically create nested routes.
      </p>

      <pre>
{`app/04-routing/about/page.js
→ Route: /04-routing/about`}
      </pre>

      <h2>5. Dynamic Routes</h2>
      <p>
        Dynamic routes use square brackets to represent variable segments.
      </p>

      <pre>
{`app/blog/[id]/page.js
→ Route: /blog/:id`}
      </pre>

      <p>
        In a Client Component page, dynamic route parameters can be accessed
        using the <code>useParams</code> hook.
      </p>

      <pre>
{`"use client";
import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams();

  return (
    <>
      Hello, this is a blog article.
      ID: {id}
    </>
  );
}`}
      </pre>

      <h2>6. Exercises</h2>
      <ul>
        <li>Create an about page at <code>/04-routing/about</code></li>
        <li>Create a layout that applies only to <code>04-routing</code></li>
        <li>Create a page to create a new blog post (front-end only)</li>
        <li>Create a page to edit a blog post using a dynamic route</li>
      </ul>

      <h2>7. Key Points</h2>
      <ul>
        <li><code>page.js</code> creates a route</li>
        <li><code>layout.js</code> wraps pages</li>
        <li>Folders define URL structure</li>
        <li>Dynamic routes use <code>[id]</code></li>
        <li>App Router requires no manual routing configuration</li>
      </ul>
    </section>
  );
}
