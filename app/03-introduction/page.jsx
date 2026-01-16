
export default function RouterTypesSummary() {
  return (
    <>
      <div className="router-summary">
        <h1>Next.js Router Types</h1>

        <section>
          <h2>Pages Router</h2>
          <p>
            Uses the <code>pages/</code> folder.
            <br />
            This is the <span>old routing system</span>.
          </p>
          <code>pages/index.js → /</code>
        </section>

        <section>
          <h2>App Router</h2>
          <p>
            Uses the <code>app/</code> folder.
            <br />
            This is the <span>new and recommended</span> system.
          </p>
          <code>app/page.js → /</code>
        </section>

        <section>
          <h2>Main Differences</h2>
          <code>Pages → CSR 중심</code>
          <br />
          <code>App → Server Components 중심</code>
        </section>

        <section>
          <h2>Layouts</h2>
          <p>
            Only <span>App Router</span> supports layouts.
          </p>
          <code>layout.js</code>
        </section>

        <section className="note">
          <p>📌 New project → App Router</p>
          <p>📌 Old project → Pages Router</p>
        </section>
      </div>
      <div className="render-summary">
      <h1>Rendering Types</h1>

      <section>
        <h2>CSR</h2>
        <p>
          Client Side Rendering
          <br />
          Rendering happens in the <span>browser</span>.
        </p>
        <code>Slow first load</code>
      </section>

      <section>
        <h2>SSG</h2>
        <p>
          Static Site Generation
          <br />
          Page is built at <span>build time</span>.
        </p>
        <code>Fast & SEO friendly</code>
      </section>

      <section>
        <h2>SSR</h2>
        <p>
          Server Side Rendering
          <br />
          Page is rendered on <span>each request</span>.
        </p>
        <code>Always fresh data</code>
      </section>

      <section>
        <h2>Next.js Default</h2>
        <p>
          App Router uses <span>Server Rendering</span> by default.
        </p>
      </section>

      <section className="note">
        <p>📌 Blog → SSG</p>
        <p>📌 Dashboard → SSR</p>
        <p>📌 Button UI → CSR</p>
      </section>
    </div>
    </>
  );
}
