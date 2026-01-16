

export default function ClientServerSummary() {
  return (
    <div className="cs-summary">
      <h1>Client vs Server Components</h1>

      <section>
        <h2>Server Components</h2>
        <p>
          Server Components run on the <span>server</span>.
          <br />
          They are the <strong>default</strong> in App Router.
        </p>
        <code>No useState, no browser events</code>
      </section>

      <section>
        <h2>Client Components</h2>
        <p>
          Client Components run in the <span>browser</span>
          <br />
          and handle user interaction.
        </p>
        <code>"use client" is required</code>
      </section>

      <section>
        <h2>"use client" Rule</h2>
        <p>
          Must be written:
        </p>
        <ul>
          <li>At the top of the file</li>
          <li>Before imports</li>
        </ul>
      </section>

      <section>
        <h2>When to Use</h2>
        <code>Server → static content, data, SEO</code>
        <br />
        <code>Client → buttons, forms, counters</code>
      </section>

      <section>
        <h2>Mixing Components</h2>
        <p>✅ Server can import Client</p>
        <p>❌ Client cannot import Server</p>
      </section>

      <section className="note">
        <p>📌 Default = Server</p>
        <p>📌 Interaction = Client</p>
      </section>
    </div>
  );
}
