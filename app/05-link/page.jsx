import Link from "next/link";

export default function LinkSummary() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif", lineHeight: "1.6" }}>
      <h1 style={{ color: "#2563eb" }}>Next.js Link Component Summary</h1>

      <section>
        <h2>1️⃣ Internal Links</h2>
        <p>
          - Use <code>Link</code> to navigate between pages **without reloading**.
          - Keeps SPA behavior (client-side navigation).
        </p>
        <pre style={{ background: "#f4f4f4", padding: "10px" }}>
{`import Link from "next/link";

<Link href="/about">Go to About Page</Link>
<Link href="/blog">Go to Blog List</Link>`}
        </pre>
      </section>

      <section>
        <h2>2️⃣ Dynamic Links</h2>
        <p>
          - Use variables in <code>href</code> for dynamic routes.
          - Works with App Router <code>[id]/page.js</code> or Page Router <code>[id].js</code>.
        </p>
        <pre style={{ background: "#f4f4f4", padding: "10px" }}>
{`// Example: blog post with id
const postId = 123;

<Link href={\`/blog/\${postId}\`}>Go to Blog 123</Link>

// Using object form (recommended if query params needed)
<Link href={{ pathname: '/blog/[id]', query: { id: postId } }}>
  Go to Blog 123
</Link>`}
        </pre>
      </section>

      <section>
        <h2>3️⃣ External Links</h2>
        <p>
          - For external URLs, use <code>a</code> tag with <code>target="_blank"</code> and <code>rel="noopener noreferrer"</code>.
          - Do NOT use Next.js <code>Link</code> for external sites.
        </p>
        <pre style={{ background: "#f4f4f4", padding: "10px" }}>
{`<a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
  Visit Google
</a>`}
        </pre>
      </section>

      <section>
        <h2>4️⃣ Key Points</h2>
        <ul>
          <li>Next.js <code>Link</code> = SPA navigation (internal)</li>
          <li>Dynamic links = use template strings or <code>href object</code></li>
          <li>External links = regular <code>a</code> tag + <code>target="_blank"</code></li>
          <li>Always import <code>Link</code> from "next/link"</li>
        </ul>
      </section>

      <section>
        <h2>5️⃣ Example Component</h2>
        <pre style={{ background: "#f4f4f4", padding: "10px" }}>
{`import Link from "next/link";

export default function Navigation() {
  const postId = 5;
  return (
    <nav>
      <Link href="/">Home</Link> | 
      <Link href="/about">About</Link> | 
      <Link href={\`/blog/\${postId}\`}>Blog {postId}</Link> | 
      <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
        Google
      </a>
    </nav>
  );
}`}
        </pre>
      </section>
    </div>
  );
}
