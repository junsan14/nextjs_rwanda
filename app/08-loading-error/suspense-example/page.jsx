import { Suspense } from "react";
import SlowContent from "./SlowContent";

export default function Page() {
  return (
    <>
      <h1>Suspense Example(This is displayed)</h1>

      <Suspense fallback={<p>Loading posts...</p>}>
        <SlowContent />
      </Suspense>
    </>
  );
}
