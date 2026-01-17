export default function NextjsIntroRenderingSummary() {
  return (
    <>
      <style>{`
        .nr {
          padding: 20px;
          font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
          line-height: 1.6;
        }
        .nr__title {
          text-align: center;
          margin: 0 0 16px;
        }
        .nr__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 16px;
        }
        .nr__card {
          background: #f9f9fb;
          border-radius: 12px;
          padding: 16px;
          box-shadow: 0 6px 16px rgba(0,0,0,0.07);
        }
        .nr__card--next { border-left: 6px solid #7c4dff; }
        .nr__card--render { border-left: 6px solid #00acc1; }
        .nr__card--practice { border-left: 6px solid #ff9800; margin-top: 16px; }

        .nr__h3 { margin: 0 0 10px; }
        .nr__h4 { margin: 12px 0 8px; }
        .nr__list { padding-left: 18px; margin: 0 0 12px; }
        .nr__text { margin: 0 0 10px; }

        .nr__pillRow {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 8px 0 12px;
        }
        .nr__pill {
          background: #fff;
          border: 1px solid #e6e6ee;
          padding: 6px 10px;
          border-radius: 999px;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .nr__note {
          margin-top: 10px;
          padding: 10px 12px;
          border-radius: 10px;
          background: #fff;
          border: 1px dashed #c9c9d6;
        }

        .nr__codeTitle {
          font-weight: 800;
          margin: 10px 0 6px;
          font-size: 0.95rem;
        }
        .nr__code {
          background: #111;
          color: #f1f1f1;
          padding: 12px;
          border-radius: 10px;
          overflow-x: auto;
          font-size: 0.9rem;
          margin: 0 0 10px;
        }

        .nr__renderGrid {
          display: grid;
          gap: 10px;
          margin: 8px 0 10px;
        }
        .nr__renderBox {
          background: #fff;
          border: 1px solid #e6e6ee;
          border-radius: 12px;
          padding: 12px;
        }
        .nr__tagRow {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 6px;
        }
        .nr__tag {
          background: #f2f2f7;
          padding: 4px 8px;
          border-radius: 999px;
          font-size: 0.85rem;
        }

        code {
          background: #eee;
          padding: 2px 6px;
          border-radius: 6px;
        }
      `}</style>

      <div className="nr">
        <h2 className="nr__title">Next.js + Rendering (Summary)</h2>

        <div className="nr__grid">
          {/* Intro */}
          <section className="nr__card nr__card--next">
            <h3 className="nr__h3">🚀 What is Next.js?</h3>
            <ul className="nr__list">
              <li>
                Next.js is a <strong>React framework</strong> created by{" "}
                <strong>Vercel</strong>.
              </li>
              <li>
                It helps you build <strong>full-stack web apps</strong> with React
                + server features.
              </li>
              <li>
                Simple idea: <strong>Next.js = React + Routing + Server features</strong>
              </li>
            </ul>

            <h4 className="nr__h4">Core Concepts</h4>
            <div className="nr__pillRow">
              <span className="nr__pill">Pages & Routing</span>
              <span className="nr__pill">Link component</span>
              <span className="nr__pill">Layouts</span>
              <span className="nr__pill">Data Fetching</span>
              <span className="nr__pill">API Routes</span>
              <span className="nr__pill">Client Components</span>
            </div>

            <div className="nr__note">
              <strong>App Router:</strong> components are{" "}
              <strong>Server Components by default</strong>. Add{" "}
              <code>"use client"</code> for state/events/effects.
            </div>

            <div className="nr__codeTitle">Link example:</div>
            <pre className="nr__code">
{`import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/about">Go to About</Link>
    </div>
  );
}`}
            </pre>

            <div className="nr__codeTitle">layout example:</div>
            <pre className="nr__code">
{`export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <header>My Site</header>
        {children}
        <footer>© 2026</footer>
      </body>
    </html>
  );
}`}
            </pre>
          </section>

          {/* Rendering */}
          <section className="nr__card nr__card--render">
            <h3 className="nr__h3">🧩 Types of Rendering</h3>

            <div className="nr__renderGrid">
              <div className="nr__renderBox">
                <h4 className="nr__h4">CSR</h4>
                <p className="nr__text">
                  Client-Side Rendering: the browser renders the UI. Data is often fetched after load.
                </p>
                <div className="nr__tagRow">
                  <span className="nr__tag">Browser renders</span>
                  <span className="nr__tag">Fetch after load</span>
                </div>
              </div>

              <div className="nr__renderBox">
                <h4 className="nr__h4">SSG</h4>
                <p className="nr__text">
                  Static Site Generation: pages are pre-rendered at build time.
                  Very fast + good SEO, but not ideal for frequently changing data.
                </p>
                <div className="nr__tagRow">
                  <span className="nr__tag">Build time</span>
                  <span className="nr__tag">Fast</span>
                  <span className="nr__tag">SEO</span>
                </div>
              </div>

              <div className="nr__renderBox">
                <h4 className="nr__h4">SSR</h4>
                <p className="nr__text">
                  Server-Side Rendering: HTML is generated on each request.
                  Good for SEO and personalized content, but can be slower than SSG.
                </p>
                <div className="nr__tagRow">
                  <span className="nr__tag">Each request</span>
                  <span className="nr__tag">SEO</span>
                  <span className="nr__tag">Personalized</span>
                </div>
              </div>
            </div>

            <h4 className="nr__h4">Quick Comparison</h4>
            <ul className="nr__list">
              <li><strong>SSG</strong>: best for content that rarely changes (docs, stable blog posts).</li>
              <li><strong>SSR</strong>: best for frequently changing or personalized pages.</li>
              <li><strong>CSR</strong>: common for dashboards/apps that load data in the browser.</li>
            </ul>

            <div className="nr__note">
              Note: “CSR requires a backend server to generate HTML” is <strong>false</strong>.
              In CSR, the <strong>browser</strong> generates the HTML.
            </div>
          </section>
        </div>

        <section className="nr__card nr__card--practice">
          <h3 className="nr__h3">🧪 Mini Practice</h3>
          <ul className="nr__list">
            <li>Choose CSR/SSG/SSR for: docs site, admin dashboard, personalized profile page.</li>
            <li>Explain when you must add <code>"use client"</code>.</li>
            <li>Write one Link example and one layout example.</li>
          </ul>
        </section>
      </div>
    </>
  );
}
