"use client";

import { questions } from "../data/questions";
import QuestionCard from "./QuestionCard";

export default function QuizApp() {
  return (
    <div>
      {questions.map((q) => (
        <QuestionCard key={q.id} question={q} />
      ))}
    </div>
  );
}
