export default function ClientVsServerSummary() {
  return (
    <>
      <style>{`
        .cs {
          padding: 20px;
          font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
          line-height: 1.6;
        }
        .cs__title {
          text-align: center;
          margin-bottom: 16px;
        }
        .cs__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 16px;
        }
        .cs__card {
          background: #f9f9fb;
          border-radius: 12px;
          padding: 16px;
          box-shadow: 0 6px 16px rgba(0,0,0,0.07);
        }
        .cs__card--server { border-left: 6px solid #4caf50; }
        .cs__card--client { border-left: 6px solid #2196f3; }
        .cs__card--rules { border-left: 6px solid #9c27b0; }
        .cs__card--mix { border-left: 6px solid #ff9800; margin-top: 16px; }

        .cs__h3 { margin: 0 0 10px; }
        .cs__list {
          padding-left: 18px;
          margin: 0 0 12px;
        }
        .cs__codeTitle {
          font-weight: 700;
          margin: 10px 0 6px;
          font-size: 0.95rem;
        }
        .cs__code {
          background: #111;
          color: #f1f1f1;
          padding: 12px;
          border-radius: 10px;
          font-size: 0.9rem;
          overflow-x: auto;
          margin-bottom: 10px;
        }
        .cs__note {
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

      <div className="cs">
        <h2 className="cs__title">Client vs Server Components (Summary)</h2>

        <div className="cs__grid">
          {/* Server Components */}
          <section className="cs__card cs__card--server">
            <h3 className="cs__h3">🖥️ Server Components</h3>
            <ul className="cs__list">
              <li>Run on the <strong>server</strong>, not in the browser</li>
              <li>Default in Next.js App Router</li>
              <li>Cannot use React hooks like <code>useState</code></li>
              <li>Can access databases and server resources</li>
              <li>Send <strong>less JavaScript</strong> to the browser</li>
            </ul>

            <div className="cs__codeTitle">Example</div>
            <pre className="cs__code">
{`export default function Page() {
  return <h1>Welcome</h1>;
}`}
            </pre>
          </section>

          {/* Client Components */}
          <section className="cs__card cs__card--client">
            <h3 className="cs__h3">🌐 Client Components</h3>
            <ul className="cs__list">
              <li>Run in the <strong>browser</strong></li>
              <li>Handle user interaction (clicks, forms)</li>
              <li>Must include <code>"use client"</code></li>
              <li>Heavier (more JS sent to browser)</li>
            </ul>

            <div className="cs__codeTitle">Example</div>
            <pre className="cs__code">
{`"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count}
    </button>
  );
}`}
            </pre>
          </section>

          {/* use client rule */}
          <section className="cs__card cs__card--rules">
            <h3 className="cs__h3">⚠️ The "use client" Rule</h3>
            <ul className="cs__list">
              <li><code>"use client"</code> must be at the <strong>top</strong> of the file</li>
              <li>It must appear <strong>before imports</strong></li>
              <li>Without it, hooks will not work</li>
            </ul>

            <div className="cs__codeTitle">❌ Incorrect</div>
            <pre className="cs__code">
{`import { useState } from "react";
"use client";`}
            </pre>

            <div className="cs__codeTitle">✅ Correct</div>
            <pre className="cs__code">
{`"use client";
import { useState } from "react";`}
            </pre>
          </section>
        </div>

        {/* Mixing */}
        <section className="cs__card cs__card--mix">
          <h3 className="cs__h3">🔀 Mixing Server & Client Components</h3>
          <ul className="cs__list">
            <li>✅ Server Components can import Client Components</li>
            <li>❌ Client Components cannot import Server Components</li>
          </ul>

          <div className="cs__note">
            <strong>Use Server Components</strong> for static content, data fetching, and SEO.<br />
            <strong>Use Client Components</strong> for buttons, forms, counters, and user interaction.
          </div>

          <div className="cs__note">
            <strong>Remember:</strong> Client Components cannot access databases directly.
          </div>
        </section>
      </div>
    </>
  );
}
