export default function LinkComponentSummary() {
  return (
    <>
      <style>{`
        .lk {
          padding: 20px;
          font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
          line-height: 1.6;
        }
        .lk__title {
          text-align: center;
          margin-bottom: 16px;
        }
        .lk__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 16px;
        }
        .lk__card {
          background: #f9f9fb;
          border-radius: 12px;
          padding: 16px;
          box-shadow: 0 6px 16px rgba(0,0,0,0.07);
        }
        .lk__card--basic { border-left: 6px solid #4caf50; }
        .lk__card--dynamic { border-left: 6px solid #2196f3; }
        .lk__card--external { border-left: 6px solid #9c27b0; }
        .lk__card--quiz { border-left: 6px solid #ff9800; margin-top: 16px; }

        .lk__h3 { margin: 0 0 10px; }
        .lk__list {
          padding-left: 18px;
          margin: 0 0 12px;
        }
        .lk__codeTitle {
          font-weight: 700;
          margin: 10px 0 6px;
          font-size: 0.95rem;
        }
        .lk__code {
          background: #111;
          color: #f1f1f1;
          padding: 12px;
          border-radius: 10px;
          font-size: 0.9rem;
          overflow-x: auto;
          margin-bottom: 10px;
        }
        .lk__note {
          background: #fff;
          border: 1px dashed #c9c9d6;
          padding: 10px 12px;
          border-radius: 10px;
          margin-top: 10px;
        }
        code {
          background: #eee;
          padding: 2px 6px;
          border-radius: 6px;
        }
      `}</style>

      <div className="lk">
        <h2 className="lk__title">Link Component (Summary)</h2>

        <div className="lk__grid">
          {/* Basic Link */}
          <section className="lk__card lk__card--basic">
            <h3 className="lk__h3">🔗 What is the Link Component?</h3>
            <ul className="lk__list">
              <li>
                Used for <strong>navigation between pages</strong> in Next.js.
              </li>
              <li>
                Moves between pages <strong>without refreshing</strong> the browser.
              </li>
              <li>
                Improves navigation <strong>performance</strong>.
              </li>
              <li>
                Provided by <code>next/link</code>.
              </li>
            </ul>

            <div className="lk__codeTitle">Basic Syntax (Next.js 13+)</div>
            <pre className="lk__code">
{`import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/">Go to top page</Link>
    </div>
  );
}`}
            </pre>

            <div className="lk__note">
              No need to use an <code>&lt;a&gt;</code> tag for internal navigation.
            </div>
          </section>

          {/* Dynamic Links */}
          <section className="lk__card lk__card--dynamic">
            <h3 className="lk__h3">🧩 Link with Dynamic Routes</h3>
            <ul className="lk__list">
              <li>
                Can link to pages with dynamic segments like <code>[id]</code>.
              </li>
              <li>
                Often used for blog posts or detail pages.
              </li>
            </ul>

            <div className="lk__codeTitle">Static Dynamic Links</div>
            <pre className="lk__code">
{`<Link href="/blog/posts/1">Post 1</Link>
<Link href="/blog/posts/2">Post 2</Link>`}
            </pre>

            <div className="lk__codeTitle">Dynamic ID Example</div>
            <pre className="lk__code">
{`<Link href={\`/posts/\${post.id}\`}>
  {post.title}
</Link>`}
            </pre>

            <div className="lk__note">
              This matches <code>app/blog/posts/[id]/page.jsx</code>.
            </div>
          </section>

          {/* External Links */}
          <section className="lk__card lk__card--external">
            <h3 className="lk__h3">🌍 External Links</h3>
            <ul className="lk__list">
              <li>
                For external websites, use a normal <code>&lt;a&gt;</code> tag.
              </li>
              <li>
                <code>Link</code> is for <strong>internal navigation only</strong>.
              </li>
            </ul>

            <div className="lk__codeTitle">External Link Example</div>
            <pre className="lk__code">
{`<a href="https://google.com" target="_blank">
  Google
</a>`}
            </pre>
          </section>
        </div>

        {/* Quiz Summary */}
        <section className="lk__card lk__card--quiz">
          <h3 className="lk__h3">🧪 Quick Check</h3>
          <ul className="lk__list">
            <li>
              Main purpose of <code>Link</code>:{" "}
              <strong>navigation without page reload</strong>
            </li>
            <li>
              Package name: <strong>next/link</strong>
            </li>
            <li>
              Correct syntax:{" "}
              <code>&lt;Link href="/about"&gt;About&lt;/Link&gt;</code>
            </li>
            <li>
              Internal navigation should use <strong>Link</strong>, not{" "}
              <code>&lt;a&gt;</code>
            </li>
            <li>
              External sites should use <strong>&lt;a&gt;</strong>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
