import Database from "better-sqlite3";

const db = new Database("database.sqlite");

// Create a table if not exists
db.prepare(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
  )
`).run();

// Insert sample data (only if table is empty)
const row = db.prepare("SELECT COUNT(*) as count FROM users").get();
if (row.count === 0) {
  db.prepare("INSERT INTO users (name) VALUES (?)").run("John");
  db.prepare("INSERT INTO users (name) VALUES (?)").run("Mary");
}

export function getUsers() {
  return db.prepare("SELECT * FROM users").all();
}
