import { getDb } from "@/lib/to-do-app-practice";

export const runtime = "nodejs";

export async function GET() {
  const db = getDb();
  const rows = db.prepare("SELECT * FROM todos ORDER BY id DESC").all();
  return Response.json(rows);
}

export async function POST(request) {
  const db = getDb();
  const { title } = await request.json();

  if (!title || !title.trim()) {
    return new Response("Title is required", { status: 400 });
  }

  const info = db
    .prepare("INSERT INTO todos (title, done) VALUES (?, 0)")
    .run(title.trim());

  const todo = db.prepare("SELECT * FROM todos WHERE id = ?").get(info.lastInsertRowid);
  return Response.json(todo, { status: 201 });
}
