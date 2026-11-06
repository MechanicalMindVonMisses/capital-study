import { useState } from "react";
import { Check, ChevronRight, RotateCcw, X } from "lucide-react";
import type { Lesson } from "@/data/course";

export default function KnowledgeCheck({ lesson, onFinish }: { lesson: Lesson; onFinish: (score: number) => void }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);
  const question = lesson.quiz[index];
  const check = () => {
    if (selected === null) return;
    setChecked(true);
    if (selected === question.answer) setCorrectCount((count) => count + 1);
  };
  const next = () => {
    if (index === lesson.quiz.length - 1) {
      const finalScore = Math.round((correctCount / lesson.quiz.length) * 100);
      setScore(finalScore); setFinished(true); onFinish(finalScore); return;
    }
    setIndex((value) => value + 1); setSelected(null); setChecked(false);
  };
  const reset = () => {
    setIndex(0); setSelected(null); setChecked(false); setCorrectCount(0); setFinished(false); setScore(0);
  };
  if (finished) return (
    <section className="quiz-section quiz-result" aria-live="polite">
      <p className="eyebrow">Knowledge check complete</p>
      <div className="score-display"><strong>{score}</strong><span>/ 100</span></div>
      <h2>{score === 100 ? "Every distinction held." : "Good reading. Now revisit the gaps."}</h2>
      <p>Your best score is saved with this lesson. Completion does not require a perfect score—returning to an argument is part of studying it.</p>
      <button type="button" className="secondary-button focus-ring" onClick={reset}><RotateCcw size={17} />Retake the check</button>
    </section>
  );
  const isCorrect = selected === question.answer;
  return (
    <section className="quiz-section" id="knowledge-check">
      <div className="quiz-head"><div><p className="eyebrow">Knowledge check</p><h2>Make the argument your own.</h2></div><span>{index + 1} / {lesson.quiz.length}</span></div>
      <fieldset className="quiz-fieldset" disabled={checked}>
        <legend>{question.question}</legend>
        <div className="quiz-options">
          {question.options.map((option, optionIndex) => {
            const showCorrect = checked && optionIndex === question.answer;
            const showWrong = checked && optionIndex === selected && !isCorrect;
            return (
              <label key={option} className={`quiz-option ${selected === optionIndex ? "selected" : ""} ${showCorrect ? "correct" : ""} ${showWrong ? "wrong" : ""}`}>
                <input type="radio" name={`question-${lesson.id}-${index}`} checked={selected === optionIndex} onChange={() => setSelected(optionIndex)} />
                <span className="option-letter">{String.fromCharCode(65 + optionIndex)}</span><span>{option}</span>{showCorrect && <Check size={19} />}{showWrong && <X size={19} />}
              </label>
            );
          })}
        </div>
      </fieldset>
      {checked && <div className={`answer-explanation ${isCorrect ? "correct" : "wrong"}`} role="status"><strong>{isCorrect ? "Correct." : "Not quite."}</strong><p>{question.explanation}</p></div>}
      <div className="quiz-actions">
        {!checked ? <button type="button" className="primary-button focus-ring" disabled={selected === null} onClick={check}>Check answer</button> : <button type="button" className="primary-button focus-ring" onClick={next}>{index === lesson.quiz.length - 1 ? "Finish check" : "Next question"}<ChevronRight size={18} /></button>}
      </div>
    </section>
  );
}
