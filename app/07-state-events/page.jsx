"use client";
import { useState } from "react";

export default function StatePage() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>useState & Events</h2>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
    </div>
  );
}
