"use client"

import Link from 'next/link';

export default function Home() {
  return (
    <main
      style={{
        backgroundColor: 'var(--paper)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem 1.5rem',
      }}
    >
      {/* Top label */}
      <div
        className="animate-fade-in delay-1"
        style={{
          fontFamily: "'Noto Sans KR', sans-serif",
          fontSize: '0.68rem',
          letterSpacing: '0.18em',
          color: 'var(--muted)',
          textTransform: 'uppercase',
          marginBottom: '4rem',
        }}
      >
        문수림 · 500자 소설
      </div>

      {/* Title block */}
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <h1
          className="animate-fade-in delay-2"
          style={{
            fontFamily: "'Noto Serif KR', Georgia, serif",
            fontSize: 'clamp(1.6rem, 5vw, 2.6rem)',
            fontWeight: 300,
            lineHeight: 1.6,
            color: 'var(--ink)',
            letterSpacing: '-0.01em',
            marginBottom: '1.5rem',
          }}
        >
          쓰지 않고 쓰는
          <br />
          내 인생, 소설
        </h1>

        <div
          className="animate-fade-in delay-3"
          style={{
            width: '2rem',
            height: '1px',
            backgroundColor: 'var(--line)',
            margin: '0 auto 1.5rem',
          }}
        />

        <p
          className="animate-fade-in delay-3"
          style={{
            fontFamily: "'Noto Serif KR', Georgia, serif",
            fontSize: '0.9rem',
            fontWeight: 300,
            lineHeight: 2,
            color: 'var(--muted)',
            letterSpacing: '0.01em',
          }}
        >
          당신의 선택이
          <br />
          하나의 서사를 만듭니다.
        </p>
      </div>

      {/* CTA */}
      <Link
        href="/test"
        className="animate-fade-in delay-4"
        style={{
          fontFamily: "'Noto Sans KR', sans-serif",
          fontSize: '0.8rem',
          letterSpacing: '0.12em',
          color: 'var(--paper)',
          backgroundColor: 'var(--ink)',
          padding: '1rem 2.5rem',
          textDecoration: 'none',
          display: 'inline-block',
          transition: 'opacity 0.2s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.75')}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
      >
        시작하기
      </Link>

      {/* Bottom note */}
      <p
        className="animate-fade-in delay-5"
        style={{
          position: 'fixed',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: "'Noto Sans KR', sans-serif",
          fontSize: '0.65rem',
          color: 'var(--line)',
          letterSpacing: '0.1em',
          whiteSpace: 'nowrap',
        }}
      >
        5개의 선택 · 1개의 이야기
      </p>
    </main>
  );
}
