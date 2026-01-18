"use client";

import { exercises } from "../data/exercises";

import ExerciseCard from "./ExerciseCard";

export default function ExercisesApp() {
  return (
    <div style={{ marginTop: 16 }}>
      {exercises.map((ex) => (
        <ExerciseCard key={ex.id} ex={ex} />
      ))}

    </div>
  );
}
