import Link from "next/link";

export default function TodoLayout({ children }) {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold">Todo (SQLite)</h1>
        <Link className="underline" href="/">
          Home
        </Link>
      </div>
      {children}
    </section>
  );
}
