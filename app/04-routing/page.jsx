export default function PageAndRoutingSummary() {
  return (
    <>
      <style>{`
        .pr {
          padding: 20px;
          font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
          line-height: 1.6;
        }
        .pr__title {
          text-align: center;
          margin-bottom: 16px;
        }
        .pr__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 16px;
        }
        .pr__card {
          background: #f9f9fb;
          border-radius: 12px;
          padding: 16px;
          box-shadow: 0 6px 16px rgba(0,0,0,0.07);
        }
        .pr__card--basic { border-left: 6px solid #4caf50; }
        .pr__card--layout { border-left: 6px solid #2196f3; }
        .pr__card--dynamic { border-left: 6px solid #9c27b0; }
        .pr__card--quiz { border-left: 6px solid #ff9800; margin-top: 16px; }

        .pr__h3 { margin: 0 0 10px; }
        .pr__h4 { margin: 12px 0 8px; }
        .pr__list {
          padding-left: 18px;
          margin: 0 0 12px;
        }
        .pr__codeTitle {
          font-weight: 700;
          margin: 10px 0 6px;
          font-size: 0.95rem;
        }
        .pr__code {
          background: #111;
          color: #f1f1f1;
          padding: 12px;
          border-radius: 10px;
          font-size: 0.9rem;
          overflow-x: auto;
          margin-bottom: 10px;
        }
        .pr__note {
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

      <div className="pr">
        <h2 className="pr__title">Page & Routing (App Router Summary)</h2>

        <div className="pr__grid">
          {/* App Router Basics */}
          <section className="pr__card pr__card--basic">
            <h3 className="pr__h3">📁 App Router Basics</h3>
            <ul className="pr__list">
              <li>
                Every folder under <code>app/</code> can contain a{" "}
                <code>page.js</code> file.
              </li>
              <li>
                That <code>page.js</code> automatically becomes a route.
              </li>
              <li>
                Nested folders create <strong>nested routes</strong>.
              </li>
              <li>
                No extra router configuration is needed.
              </li>
            </ul>

            <div className="pr__codeTitle">Basic Route Example</div>
            <pre className="pr__code">
{`// app/04-routing/page.js
export default function Page() {
  return <h1>We are studying Page and Routing</h1>;
}`}
            </pre>

            <div className="pr__note">
              Visiting <strong>/04-routing</strong> renders this page.
            </div>
          </section>

          {/* Layouts */}
          <section className="pr__card pr__card--layout">
            <h3 className="pr__h3">🧱 Layouts</h3>
            <ul className="pr__list">
              <li>
                Layouts wrap pages using the <code>{`{children}`}</code> prop.
              </li>
              <li>
                Used to share UI like headers and footers.
              </li>
              <li>
                Layouts can be <strong>global</strong> or{" "}
                <strong>route-specific</strong>.
              </li>
            </ul>

            <div className="pr__codeTitle">Global Layout</div>
            <pre className="pr__code">
{`// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <header>My Site Header</header>
        {children}
        <footer>My Site Footer</footer>
      </body>
    </html>
  );
}`}
            </pre>

            <div className="pr__codeTitle">Route-specific Layout</div>
            <pre className="pr__code">
{`// app/04-routing/layout.js
export default function Layout({ children }) {
  return (
    <div className="04-routing">
      This comes from 04-routing root layout!
      <main>{children}</main>
    </div>
  );
}`}
            </pre>
          </section>

          {/* Dynamic Routes */}
          <section className="pr__card pr__card--dynamic">
            <h3 className="pr__h3">🧩 Dynamic Routes</h3>
            <ul className="pr__list">
              <li>
                Dynamic routes use square brackets: <code>[id]</code>
              </li>
              <li>
                Commonly used for blogs and detail pages.
              </li>
              <li>
                Parameters are passed via the <code>params</code> prop.
              </li>
            </ul>

            <div className="pr__codeTitle">Dynamic Route Structure</div>
            <pre className="pr__code">
{`app/blog/[id]/page.js`}
            </pre>

            <div className="pr__codeTitle">Dynamic Route Example</div>
            <pre className="pr__code">
{`"use client";
import { use } from "react";

export default function Page({ params }) {
  const { id } = use(params);

  return (
    <>
      Hello this is a blog article.
      ID: {id}
    </>
  );
}`}
            </pre>

            <div className="pr__note">
              <code>params</code> is available in <code>page</code>,{" "}
              <code>layout</code>, and <code>route</code> files.
            </div>
          </section>
        </div>

        {/* Quiz */}
        <section className="pr__card pr__card--quiz">
          <h3 className="pr__h3">🧪 Quick Check</h3>
          <ul className="pr__list">
            <li>
              Which file creates the route <code>/about</code>? →{" "}
              <strong>app/about/page.js</strong>
            </li>
            <li>
              What is the route of <code>app/page.js</code>? →{" "}
              <strong>/</strong>
            </li>
            <li>
              Which structure creates <code>/blog/2025</code>? →{" "}
              <strong>app/blog/[id]/page.js</strong>
            </li>
            <li>
              Which file wraps all pages inside <code>/blog</code>? →{" "}
              <strong>app/blog/layout.js</strong>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
