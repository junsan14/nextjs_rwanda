"use client";

import { useState } from "react";

export default function TodoApp({ initialTodos }) {
  const [todos, setTodos] = useState(initialTodos);
  const [title, setTitle] = useState("");
  const [busy, setBusy] = useState(false);

  async function refresh() {
    const res = await fetch("/api/todos", { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to refresh");
    setTodos(await res.json());
  }

  async function addTodo(e) {
    e.preventDefault();
    if (!title.trim()) return;

    setBusy(true);
    try {
      const res = await fetch("/api/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
      });
      if (!res.ok) throw new Error(await res.text());
      const created = await res.json();
      setTodos((t) => [created, ...t]);
      setTitle("");
    } finally {
      setBusy(false);
    }
  }

  async function toggle(todo) {
    const nextDone = !Boolean(todo.done);

    // optimistic UI
    setTodos((t) => t.map((x) => (x.id === todo.id ? { ...x, done: nextDone ? 1 : 0 } : x)));

    const res = await fetch(`/api/todos/${todo.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ done: nextDone }),
    });

    if (!res.ok) {
      // rollback if failed
      await refresh();
      alert("Failed to update");
    }
  }

  async function rename(todo) {
    const next = prompt("New title:", todo.title);
    if (next === null) return;

    const res = await fetch(`/api/todos/${todo.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: next }),
    });

    if (!res.ok) {
      alert("Failed to rename");
      return;
    }

    const updated = await res.json();
    setTodos((t) => t.map((x) => (x.id === todo.id ? updated : x)));
  }

  async function remove(todo) {
    const res = await fetch(`/api/todos/${todo.id}`, { method: "DELETE" });
    if (!res.ok) {
      alert("Failed to delete");
      return;
    }
    setTodos((t) => t.filter((x) => x.id !== todo.id));
  }

  return (
    <div className="max-w-xl">
      <form onSubmit={addTodo} className="flex gap-2 mb-4">
        <input
          className="border rounded px-3 py-2 flex-1"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New todo..."
        />
        <button className="border rounded px-3 py-2" disabled={busy}>
          Add
        </button>
      </form>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li key={todo.id} className="border rounded px-3 py-2 flex items-center justify-between">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={Boolean(todo.done)}
                onChange={() => toggle(todo)}
              />
              <span className={Boolean(todo.done) ? "line-through text-gray-500" : ""}>
                {todo.title}
              </span>
            </label>

            <div className="flex gap-2">
              <button className="text-sm underline" onClick={() => rename(todo)} type="button">
                Edit
              </button>
              <button className="text-sm underline" onClick={() => remove(todo)} type="button">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {todos.length === 0 && <p className="text-gray-500 mt-3">No todos yet.</p>}
    </div>
  );
}
