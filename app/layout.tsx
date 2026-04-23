import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '쓰지 않고 쓰는 내 인생, 소설',
  description: '당신의 선택이 하나의 서사를 만듭니다.',
  openGraph: {
    title: '쓰지 않고 쓰는 내 인생, 소설',
    description: '당신의 선택이 하나의 서사를 만듭니다.',
    images: ['/og-default.png'],
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
