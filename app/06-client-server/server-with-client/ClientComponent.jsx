"use client";
import {useState} from 'react';
export default function ClientComponent() {
  const [value,setValue] = useState("");
  return (
    <>
      <p>Client Component</p>
      <input type="text" 
        onChange={(e)=>setValue(e.target.value)}
      />
    </> 
    )
}
