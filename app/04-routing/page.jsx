
export default function RoutingLayoutSummary() {
  return (
    <div className="routing-summary">
      <h1>Routing & Layout – Summary</h1>

      <section>
        <h2>Routing (App Router)</h2>
        <p>
          Each folder inside <code>app/</code> becomes a URL.
          <br />
          <span><code>page.js</code> creates a route</span>.
        </p>
        <code>app/about/page.js → /about</code>
      </section>

      <section>
        <h2>Nested Routes</h2>
        <p>
          Nested folders create nested URLs automatically.
        </p>
        <code>app/blog/[id]/page.js → /blog/1</code>
      </section>

      <section>
        <h2>Layouts</h2>
        <p>
          Layouts wrap pages with shared UI
          <br />
          (header, footer, menu).
        </p>
        <code>app/layout.js → all pages</code>
        <br />
        <code>app/blog/layout.js → only /blog</code>
      </section>

      <section>
        <h2>Dynamic Routes</h2>
        <p>
          Use <code>[id]</code> for dynamic URLs.
        </p>
        <code>app/post/[id]/page.js</code>
      </section>

      <section className="note">
        <p>📌 page.js = route</p>
        <p>📌 layout.js = wrapper</p>
        <p>📌 folders = URLs</p>
      </section>
    </div>
  );
}
