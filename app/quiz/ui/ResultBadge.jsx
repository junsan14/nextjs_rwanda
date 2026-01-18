export default function ResultBadge({ correct, answer }) {
  return (
    <p style={{ marginTop: 10 }}>
      {correct ? (
        <span style={{ color: "green" }}>✅ OK</span>
      ) : (
        <span style={{ color: "red" }}>
          ❌ Wrong — Correct answer: <strong>{answer}</strong>
        </span>
      )}
    </p>
  );
}
