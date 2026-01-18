import { getDb } from "@/lib/to-do-app-practice";

export const runtime = "nodejs";

export async function PATCH(request, { params }) {
  const db = getDb();
  const id = Number(params.id);
  const body = await request.json();

  const current = db.prepare("SELECT * FROM todos WHERE id = ?").get(id);
  if (!current) return new Response("Not found", { status: 404 });

  const title = body.title ?? current.title;
  const done = typeof body.done === "boolean" ? (body.done ? 1 : 0) : current.done;

  if (!title || !title.trim()) {
    return new Response("Title is required", { status: 400 });
  }

  db.prepare("UPDATE todos SET title = ?, done = ? WHERE id = ?").run(title.trim(), done, id);
  const updated = db.prepare("SELECT * FROM todos WHERE id = ?").get(id);
  return Response.json(updated);
}

export async function DELETE(_, { params }) {
  const db = getDb();
  const id = Number(params.id);

  const current = db.prepare("SELECT * FROM todos WHERE id = ?").get(id);
  if (!current) return new Response("Not found", { status: 404 });

  db.prepare("DELETE FROM todos WHERE id = ?").run(id);
  return new Response(null, { status: 204 });
}
