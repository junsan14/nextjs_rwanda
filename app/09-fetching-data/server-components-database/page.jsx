import { getUsers } from "@/lib/db";

export default function DatabasePage() {
  const users = getUsers(); // Sync fetch from SQLite

  return (
    <div>
      <h2>Database Example (SQLite)</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}
