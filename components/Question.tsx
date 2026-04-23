'use client';

import { Question, CharacterType } from '@/data/questions';

type Props = {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (type: CharacterType) => void;
};

export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
}: Props) {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--paper)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem 1.5rem',
      }}
    >
      {/* Progress */}
      <div
        className="animate-fade-in"
        style={{
          width: '100%',
          maxWidth: '28rem',
          marginBottom: '3rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '0.6rem',
          }}
        >
          <span
            style={{
              fontFamily: "'Courier Prime', monospace",
              fontSize: '0.7rem',
              color: 'var(--muted)',
              letterSpacing: '0.1em',
            }}
          >
            {String(questionNumber).padStart(2, '0')} / {String(totalQuestions).padStart(2, '0')}
          </span>
        </div>
        <div
          style={{
            width: '100%',
            height: '1px',
            backgroundColor: 'var(--line)',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              height: '1px',
              width: `${(questionNumber / totalQuestions) * 100}%`,
              backgroundColor: 'var(--ink)',
              transition: 'width 0.6s ease',
            }}
          />
        </div>
      </div>

      {/* Scene */}
      <div
        style={{
          width: '100%',
          maxWidth: '28rem',
          marginBottom: '3rem',
        }}
      >
        <p
          className="animate-fade-in delay-1"
          style={{
            fontFamily: "'Noto Serif KR', Georgia, serif",
            fontSize: 'clamp(1rem, 3vw, 1.25rem)',
            fontWeight: 300,
            lineHeight: 1.9,
            color: 'var(--ink)',
            whiteSpace: 'pre-line',
            marginBottom: '2rem',
          }}
        >
          {question.scene}
        </p>

        <p
          className="animate-fade-in delay-2"
          style={{
            fontFamily: "'Noto Serif KR', Georgia, serif",
            fontSize: '0.85rem',
            fontWeight: 400,
            color: 'var(--muted)',
            letterSpacing: '0.05em',
          }}
        >
          {question.prompt}
        </p>
      </div>

      {/* Choices */}
      <div
        style={{
          width: '100%',
          maxWidth: '28rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0',
        }}
      >
        {question.choices.map((choice, i) => (
          <button
            key={choice.type}
            onClick={() => onAnswer(choice.type)}
            className={`animate-fade-in delay-${i + 3}`}
            style={{
              width: '100%',
              textAlign: 'left',
              padding: '1.1rem 0',
              borderTop: i === 0 ? '1px solid var(--line)' : 'none',
              borderBottom: '1px solid var(--line)',
              borderLeft: 'none',
              borderRight: 'none',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              fontFamily: "'Noto Serif KR', Georgia, serif",
              fontSize: '0.95rem',
              fontWeight: 300,
              color: 'var(--ink)',
              lineHeight: 1.6,
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.paddingLeft = '0.5rem';
              e.currentTarget.style.color = 'var(--accent)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.paddingLeft = '0';
              e.currentTarget.style.color = 'var(--ink)';
            }}
          >
            <span
              style={{
                fontFamily: "'Courier Prime', monospace",
                fontSize: '0.65rem',
                color: 'var(--line)',
                minWidth: '1rem',
              }}
            >
              {String.fromCharCode(65 + i)}
            </span>
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
}
