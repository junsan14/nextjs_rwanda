"use client";//This must be at the top.
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count}
    </button>
  );
}


/*
Client Components run in the browser 
and handle interaction.
Must include "use client".
Heavier (JS sent to client).
*/

