import TodoApp from "./TodoApp";

async function getTodos() {
  // small delay so students can see loading.jsx
  await new Promise((r) => setTimeout(r, 600));

  const res = await fetch("http://localhost:3000/api/todos", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load todos");
  return res.json();
}

export default async function Page() {
  const initialTodos = await getTodos();
  return <TodoApp initialTodos={initialTodos} />;
}
