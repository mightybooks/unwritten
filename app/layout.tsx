import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '쓰지 않고 쓰는 내 인생, 소설',
  description: '당신의 선택이 하나의 서사를 만듭니다.',
  openGraph: {
    title: '쓰지 않고 쓰는 내 인생, 소설',
    description: '당신의 선택이 하나의 서사를 만듭니다.',    
    images: [
      {
        url: 'https://unwritten-psi.vercel.app/intro.png',
        width: 1200,
        height: 630,
        alt: '당신은 어떤 결말을 가진 사람인가',
      },
    ],
  },
  verification: {
    google: '16LgOTtn--lHPZEAVf0h2NuRilPisRGREtf3wZooizo',
  },
  other: {
    'naver-site-verification': 'f42fffc93185bdcacbd16acb3ec07c301b9176ba',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}