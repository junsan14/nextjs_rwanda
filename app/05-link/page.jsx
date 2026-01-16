import Link from "next/link";

export default function LinkSummary() {
  return (
    <div className="link-summary">
      <h1>Next.js Link – Summary</h1>

      <section>
        <h2>What is Link?</h2>
        <p>
          <strong>Link</strong> is used to navigate between pages
          <br />
          <span>without refreshing the browser</span>.
        </p>
      </section>

      <section>
        <h2>Basic Link</h2>
        <code>&lt;Link href="/04-routing"&gt;Go&lt;/Link&gt;</code>
      </section>

      <section>
        <h2>Dynamic Link</h2>
        <code>&lt;Link href="/post/100"&gt;Post 100&lt;/Link&gt;</code>
      </section>

      <section>
        <h2>External Link</h2>
        <code>
          &lt;a href="https://google.com" target="_blank"&gt;Google&lt;/a&gt;
        </code>
      </section>

      <section className="note">
        <p>✅ Internal → Link</p>
        <p>❌ External → &lt;a&gt;</p>
      </section>
    </div>
  );
}
