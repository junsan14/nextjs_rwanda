import ExercisesApp from "./ui/ExercisesApp";

export default function ExercisesPage() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Code Exercises</h1>
      <p>Type your answer, then click “Show Answer” to compare.</p>
      <ExercisesApp />
    </div>
  );
}
