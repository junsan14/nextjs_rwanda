"use client";

import { useEffect, useState } from "react";
import useSWR from "swr";

export function UsersWithUseEffect() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
  <>
    <h2>Fetching data with useEffect</h2>
    <ul>
      {users.map(u => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  </>
  );
}





const fetcher = url => fetch(url).then(res => res.json());

export function UsersWithuseSWR() {
  const { data, error, isLoading } = useSWR("/api/users", fetcher);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading users</p>;

  return (
    <>
      <h2>Fetching data with useSWR</h2>
      <ul>
        {data.map(u => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </>
  );
}
