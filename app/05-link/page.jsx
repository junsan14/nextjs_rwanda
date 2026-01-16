import Link from "next/link";

export default function LinkSummary() {
  return (
    <section style={{ padding: "24px", lineHeight: 1.7 }}>
      <h1>Next.js Link Component Summary</h1>

      <h2>1. What is the Link Component?</h2>
      <p>
        The <code>Link</code> component is used for navigation between pages
        in a Next.js application.
      </p>
      <p>
        It allows users to move between pages <strong>without refreshing the browser</strong>,
        which improves performance and user experience.
      </p>

      <h2>2. Basic Syntax</h2>
      <p>
        In Next.js 13+, you do NOT need to use an <code>&lt;a&gt;</code> tag
        inside <code>Link</code>.
      </p>

      <pre>
{`import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/">Go to top page</Link>
    </div>
  );
}`}
      </pre>

      <h2>3. Exercise (Basic Link)</h2>
      <p>
        Add a link to the <code>04-routing</code> top page.
      </p>

      <pre>
{`<Link href="/04-routing">Go to 04-routing</Link>`}
      </pre>

      <h2>4. Link with Dynamic Routes</h2>
      <p>
        Link can be used with dynamic routes by including the ID in the path.
      </p>

      <pre>
{`<Link href="/blog/posts/1">Post 1</Link>
<Link href="/blog/posts/2">Post 2</Link>`}
      </pre>

      <p>
        Dynamic route file structure:
      </p>

      <pre>
{`app/blog/posts/[id]/page.jsx`}
      </pre>

      <p>
        Example using JavaScript variables:
      </p>

      <pre>
{`<Link href={\`/posts/\${post.id}\`}>
  {post.title}
</Link>`}
      </pre>

      <h2>5. Exercise (Dynamic Links)</h2>
      <p>
        Add three links to the <code>04-routing/post</code> page
        with IDs <strong>100</strong>, <strong>101</strong>, and <strong>104</strong>.
      </p>

      <h2>6. External Links</h2>
      <p>
        For external websites, use a normal <code>&lt;a&gt;</code> tag.
        Do NOT use <code>Link</code> for external navigation.
      </p>

      <pre>
{`<a href="https://google.com" target="_blank">
  Google
</a>`}
      </pre>

      <h2>7. Linking with Data (Front-end Only)</h2>
      <p>
        Links are often created from data such as blog posts.
        In real applications, this data usually comes from a database.
      </p>

      <pre>
{`const posts = [
  { id: 1, title: "React Basics" },
  { id: 2, title: "Next.js Routing" },
];

{posts.map(post => (
  <Link key={post.id} href={\`/post/\${post.id}\`}>
    {post.title}
  </Link>
))}`}
      </pre>

      <h2>8. Key Points</h2>
      <ul>
        <li>Use <code>Link</code> for internal navigation</li>
        <li>Link does not refresh the page</li>
        <li>Use <code>href</code> attribute</li>
        <li>External links use <code>&lt;a&gt;</code></li>
      </ul>

      <h2>9. Review Questions</h2>
      <ol>
        <li>What is the main purpose of the Link component?</li>
        <li>Which package provides the Link component?</li>
        <li>Does Link cause a full page refresh?</li>
        <li>Which tag is replaced by Link for internal navigation?</li>
      </ol>

      <h2>10. True or False</h2>
      <ul>
        <li>Link improves navigation performance</li>
        <li>Link can be used without importing it</li>
        <li>Internal navigation should use Link</li>
        <li>Link causes a full page refresh</li>
        <li>Link uses the href attribute</li>
      </ul>
    </section>
  );
}
