export default function Page() {
  return (
<h1>Welcome</h1>
  );
}

/*
Server Components run on the server, 
not in the browser.
In Next.js App Router, 
all components are Server Components by default.
Cannot use React hooks like useState.
Smaller JS sent to browser.
*/
