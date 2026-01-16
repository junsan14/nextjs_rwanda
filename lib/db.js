import Database from "better-sqlite3";

const db = new Database("database.sqlite");

// ---------- USERS TABLE ----------
db.prepare(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
  )
`).run();

// Insert sample users
const userCount = db.prepare("SELECT COUNT(*) as count FROM users").get();
if (userCount.count === 0) {
  db.prepare("INSERT INTO users (name) VALUES (?)").run("John");
  db.prepare("INSERT INTO users (name) VALUES (?)").run("Mary");
}

// ---------- STUDENTS TABLE ----------
db.prepare(`
  CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    age INTEGER NOT NULL
  )
`).run();

// Insert sample students
const studentCount = db.prepare("SELECT COUNT(*) as count FROM students").get();
if (studentCount.count === 0) {
  db.prepare("INSERT INTO students (name, age) VALUES (?, ?)").run("Alice", 20);
  db.prepare("INSERT INTO students (name, age) VALUES (?, ?)").run("Bob", 22);
}

// ---------- FUNCTIONS ----------
export function getUsers() {
  return db.prepare("SELECT * FROM users").all();
}

export function getStudents() {
  return db.prepare("SELECT * FROM students").all();
}

export function addStudent(name, age) {
  const stmt = db.prepare(
    "INSERT INTO students (name, age) VALUES (?, ?)"
  );
  const info = stmt.run(name, age);
  return { id: info.lastInsertRowid, name, age };
}
