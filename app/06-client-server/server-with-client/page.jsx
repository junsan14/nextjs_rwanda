import ClientComponent from "./ClientComponent";

export default function ServerPage() {
  return (
    <div>
      <h2>Server Component</h2>
      <ClientComponent />
    </div>
  );
}
/*
✅Server Components can import Client Components
❌ Client Components cannot import Server Components
*/
