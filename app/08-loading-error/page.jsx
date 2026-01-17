export default function LoadingAndErrorUISummary() {
  return (
    <>
      <style>{`
        .le {
          padding: 20px;
          font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
          line-height: 1.6;
        }
        .le__title {
          text-align: center;
          margin-bottom: 16px;
        }
        .le__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 16px;
        }
        .le__card {
          background: #f9f9fb;
          border-radius: 12px;
          padding: 16px;
          box-shadow: 0 6px 16px rgba(0,0,0,0.07);
        }
        .le__card--loading { border-left: 6px solid #2196f3; }
        .le__card--suspense { border-left: 6px solid #9c27b0; }
        .le__card--error { border-left: 6px solid #f44336; }
        .le__card--compare { border-left: 6px solid #ff9800; margin-top: 16px; }

        .le__h3 { margin: 0 0 10px; }
        .le__list {
          padding-left: 18px;
          margin: 0 0 12px;
        }
        .le__codeTitle {
          font-weight: 700;
          margin: 10px 0 6px;
          font-size: 0.95rem;
        }
        .le__code {
          background: #111;
          color: #f1f1f1;
          padding: 12px;
          border-radius: 10px;
          font-size: 0.9rem;
          overflow-x: auto;
          margin-bottom: 10px;
        }
        .le__note {
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

      <div className="le">
        <h2 className="le__title">Loading & Error UI (Summary)</h2>

        <div className="le__grid">
          {/* What is Loading & Error UI */}
          <section className="le__card le__card--loading">
            <h3 className="le__h3">⏳ What is Loading & Error UI?</h3>
            <ul className="le__list">
              <li>Used when a page is fetching data</li>
              <li>Used when logic is slow</li>
              <li>Used when an error occurs</li>
              <li>Prevents users from seeing a blank screen</li>
            </ul>
          </section>

          {/* loading.js */}
          <section className="le__card le__card--loading">
            <h3 className="le__h3">🔄 loading.js (Loading UI)</h3>
            <ul className="le__list">
              <li>Route-level loading UI</li>
              <li>Appears while <code>page.jsx</code> or <code>layout.jsx</code> is loading</li>
              <li>Must be named <code>loading.js</code></li>
              <li>Must be in the same route folder</li>
              <li>Must be a Server Component</li>
            </ul>

            <div className="le__codeTitle">Basic Example</div>
            <pre className="le__code">
{`export default function Loading() {
  return <p>⏳ Loading data... please wait</p>;
}`}
            </pre>
          </section>

          {/* Suspense */}
          <section className="le__card le__card--suspense">
            <h3 className="le__h3">🧩 Suspense Component</h3>
            <ul className="le__list">
              <li><code>loading.js</code> cannot do partial loading</li>
              <li>Suspense enables component-level loading</li>
              <li>Wrap only slow components</li>
              <li>Works inside pages</li>
            </ul>

            <div className="le__codeTitle">Slow Component</div>
            <pre className="le__code">
{`async function getSlowData() {
  await new Promise(resolve => setTimeout(resolve, 5000));
  return "Data loaded successfully!";
}

export default async function SlowContent() {
  const data = await getSlowData();
  return <p>{data}</p>;
}`}
            </pre>

            <div className="le__codeTitle">Using Suspense</div>
            <pre className="le__code">
{`import { Suspense } from "react";
import SlowContent from "./SlowContent";

export default function Page() {
  return (
    <>
      <h1>Suspense Example</h1>
      <Suspense fallback={<p>Loading posts...</p>}>
        <SlowContent />
      </Suspense>
    </>
  );
}`}
            </pre>
          </section>

          {/* Error UI */}
          <section className="le__card le__card--error">
            <h3 className="le__h3">❌ error.js (Error UI)</h3>
            <ul className="le__list">
              <li>Displayed when an error is thrown</li>
              <li>Next.js catches the error automatically</li>
              <li>Must be named <code>error.js</code></li>
              <li>Must be in the same route folder</li>
              <li>Must be a Client Component</li>
            </ul>

            <div className="le__codeTitle">Basic Example</div>
            <pre className="le__code">
{`"use client";

export default function Error({ error, reset }) {
  return (
    <div>
      <h2>❌ Something went wrong</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
}`}
            </pre>

            <div className="le__note">
              Receives <code>error</code> (actual error) and <code>reset()</code> (retry).
            </div>
          </section>
        </div>

        {/* Comparison */}
        <section className="le__card le__card--compare">
          <h3 className="le__h3">⚖️ loading.js vs Suspense vs error.js</h3>
          <ul className="le__list">
            <li><strong>loading.js</strong>: Route-level loading UI</li>
            <li><strong>Suspense</strong>: Component-level loading UI</li>
            <li><strong>error.js</strong>: Error fallback UI</li>
          </ul>

          <div className="le__note">
            <strong>Rule of thumb:</strong><br />
            Use <code>loading.js</code> for full-page loading,<br />
            <code>Suspense</code> for partial loading,<br />
            <code>error.js</code> for error handling.
          </div>
        </section>
      </div>
    </>
  );
}
