'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { questions, CharacterType } from '@/data/questions';
import { calculateResult } from '@/lib/scoring';
import QuestionCard from '@/components/Question';

export default function TestPage() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<CharacterType[]>([]);
  const [transitioning, setTransitioning] = useState(false);

  const handleAnswer = (type: CharacterType) => {
    if (transitioning) return;
    setTransitioning(true);

    const newAnswers = [...answers, type];
    setAnswers(newAnswers);

    setTimeout(() => {
      window.scrollTo(0, 0);

      if (currentIndex < questions.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setTransitioning(false);
      } else {
        const result = calculateResult(newAnswers);
        router.push(`/result?type=${result}`);
      }
    }, 300);
  };

  const question = questions[currentIndex];

  return (
    <div
      style={{
        opacity: transitioning ? 0 : 1,
        transition: 'opacity 0.3s ease',
      }}
    >
      <QuestionCard
        key={currentIndex}
        question={question}
        questionNumber={currentIndex + 1}
        totalQuestions={questions.length}
        onAnswer={handleAnswer}
      />
    </div>
  );
}
