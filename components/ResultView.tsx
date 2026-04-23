'use client';

import { useState, useEffect } from 'react';
import { Result } from '@/data/results';
import { copyToClipboard, getResultUrl } from '@/lib/share';
import Link from 'next/link';

type Props = { result: Result };

export default function ResultView({ result }: Props) {
  const [copied, setCopied] = useState(false);
  const [kakaoReady, setKakaoReady] = useState(false);

  useEffect(() => {
    // Kakao SDK init
    const KAKAO_KEY = process.env.NEXT_PUBLIC_KAKAO_KEY;
    if (!KAKAO_KEY) return;

    const script = document.createElement('script');
    script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.7.0/kakao.min.js';
    script.async = true;
    script.onload = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const Kakao = (window as any).Kakao;
      if (Kakao && !Kakao.isInitialized()) {
        Kakao.init(KAKAO_KEY);
      }
      setKakaoReady(true);
    };
    document.head.appendChild(script);
  }, []);

  const handleKakaoShare = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Kakao = (window as any).Kakao;
    if (!kakaoReady || !Kakao) return;

    const url = getResultUrl(result.type);
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: result.ogTitle,
        description: result.ogDescription,
        imageUrl: `${window.location.protocol}//${window.location.host}/og-${result.type}.jpg`,
        link: { mobileWebUrl: url, webUrl: url },
      },
      buttons: [
        { title: '나도 해보기', link: { mobileWebUrl: url, webUrl: url } },
      ],
    });
  };

  const handleCopy = async () => {
    const url = getResultUrl(result.type);
    const toastText = `${url}\n\n이상하게 맞습니다. 한번 해보세요.`;
    const ok = await copyToClipboard(toastText);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <main
      style={{
        backgroundColor: 'var(--paper)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '5rem 1.5rem 6rem',
      }}
    >
      <div style={{ width: '100%', maxWidth: '28rem' }}>

        {/* Character declaration */}
        <div className="animate-fade-in delay-1" style={{ marginBottom: '3.5rem' }}>
          <p
            style={{
              fontFamily: "'Noto Serif KR', Georgia, serif",
              fontSize: 'clamp(1.1rem, 3.5vw, 1.5rem)',
              fontWeight: 300,
              lineHeight: 1.8,
              color: 'var(--ink)',
            }}
          >
            {result.title}
            <img
              src={`/og-${result.type}.jpg`}
              alt="result"
              style={{
                width: '100%',
                margin: '2rem 0',
                display: 'block',
              }}
            />
          </p>
          <div
            style={{
              width: '1.5rem',
              height: '1px',
              backgroundColor: 'var(--line)',
              margin: '1.5rem 0',
            }}
          />
          <p
            style={{
              fontFamily: "'Noto Serif KR', Georgia, serif",
              fontSize: '0.9rem',
              fontWeight: 300,
              lineHeight: 2,
              color: 'var(--muted)',
              whiteSpace: 'pre-line',
            }}
          >
            {result.description}
          </p>
        </div>

        {/* Story */}
        <div className="animate-fade-in delay-3" style={{ marginBottom: '4rem' }}>
          <p
            style={{
              fontFamily: "'Courier Prime', monospace",
              fontSize: '0.75rem',
              color: 'var(--muted)',
              letterSpacing: '0.1em',
              marginBottom: '1.5rem',
            }}
          >
            {result.storyTitle}
          </p>

          <div
            style={{
              borderLeft: '1px solid var(--line)',
              paddingLeft: '1.5rem',
            }}
          >
            <p
              style={{
                fontFamily: "'Noto Serif KR', Georgia, serif",
                fontSize: '0.92rem',
                fontWeight: 300,
                lineHeight: 2.2,
                color: 'var(--ink)',
                whiteSpace: 'pre-line',
              }}
            >
              {result.storyText}
            </p>
          </div>
        </div>

        {/* Closing line */}
        <p
          className="animate-fade-in delay-4"
          style={{
            fontFamily: "'Noto Serif KR', Georgia, serif",
            fontSize: '0.8rem',
            fontWeight: 300,
            color: 'var(--muted)',
            marginBottom: '3rem',
            letterSpacing: '0.03em',
          }}
        >
          당신과 닮은 이야기였습니다.
        </p>

        {/* Share buttons */}
        <div
          className="animate-fade-in delay-5"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            marginBottom: '3rem',
          }}
        >
          {process.env.NEXT_PUBLIC_KAKAO_KEY && (
            <button
              onClick={handleKakaoShare}
              disabled={!kakaoReady}
              style={{
                width: '100%',
                padding: '0.9rem',
                backgroundColor: '#FEE500',
                color: '#3C1E1E',
                border: 'none',
                cursor: kakaoReady ? 'pointer' : 'default',
                fontFamily: "'Noto Sans KR', sans-serif",
                fontSize: '0.78rem',
                letterSpacing: '0.08em',
                opacity: kakaoReady ? 1 : 0.5,
                transition: 'opacity 0.2s',
              }}
            >
              카카오톡으로 공유하기
            </button>
          )}

          <button
            onClick={handleCopy}
            style={{
              width: '100%',
              padding: '0.9rem',
              backgroundColor: 'transparent',
              color: 'var(--ink)',
              border: '1px solid var(--line)',
              cursor: 'pointer',
              fontFamily: "'Noto Sans KR', sans-serif",
              fontSize: '0.78rem',
              letterSpacing: '0.08em',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--ink)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--line)';
            }}
          >
            {copied ? '복사되었습니다' : '링크 복사하기'}
          </button>
        </div>

        {/* Toast */}
        {copied && (
          <div
            style={{
              position: 'fixed',
              bottom: '2rem',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: 'var(--ink)',
              color: 'var(--paper)',
              padding: '0.75rem 1.5rem',
              fontFamily: "'Noto Sans KR', sans-serif",
              fontSize: '0.75rem',
              letterSpacing: '0.05em',
              whiteSpace: 'nowrap',
              animation: 'fadeIn 0.3s ease',
              zIndex: 100,
            }}
          >
            이상하게 맞습니다. 한번 해보세요.
          </div>
        )}

        {/* Divider */}
        <div
          className="animate-fade-in delay-6"
          style={{
            borderTop: '1px solid var(--line)',
            paddingTop: '2.5rem',
            marginBottom: '2rem',
          }}
        >
          <p
            style={{
              fontFamily: "'Noto Serif KR', Georgia, serif",
              fontSize: '0.75rem',
              fontWeight: 300,
              color: 'var(--muted)',
              marginBottom: '1rem',
              letterSpacing: '0.03em',
            }}
          >
            문수림 『500자 소설』
          </p>

          <a
            href="https://smartstore.naver.com/shop15th/products/13237397155"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Noto Sans KR', sans-serif",
              fontSize: '0.78rem',
              letterSpacing: '0.08em',
              color: 'var(--ink)',
              textDecoration: 'none',
              borderBottom: '1px solid var(--ink)',
              paddingBottom: '2px',
              display: 'inline-block',
              marginBottom: '2rem',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.6')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            이 이야기를 더 이어보기 →
          </a>
        </div>

        {/* Restart */}
        <div className="animate-fade-in delay-7">
          <Link
            href="/test"
            style={{
              fontFamily: "'Noto Sans KR', sans-serif",
              fontSize: '0.72rem',
              letterSpacing: '0.1em',
              color: 'var(--muted)',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            다시 하기
          </Link>
        </div>
      </div>
    </main>
  );
}
