"use client";

export default function Error({ error, reset }) {
  return (
    <div className="p-3 border rounded">
      <p className="font-semibold">Something went wrong.</p>
      <pre className="text-sm text-red-600 whitespace-pre-wrap">{error?.message}</pre>
      <button className="mt-2 px-3 py-1 border rounded" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
