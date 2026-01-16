"use client";

export default function Error({ error, reset }) {
  return (
    <div>
      <h2>❌ Something went wrong</h2>
      <p>{error.message}</p>

      <button onClick={reset}>
        Try again
      </button>
    </div>
  );
}

/*
Must be named error.js
Must be Client Component
*/
