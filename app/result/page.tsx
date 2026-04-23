import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { results } from '@/data/results';
import { CharacterType } from '@/data/questions';
import ResultView from '@/components/ResultView';

type Props = {
  searchParams: Promise<{ type?: string }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { type } = await searchParams;
  const key = type as CharacterType;

  const result = results[key];

  // 👉 도메인 반드시 본인 걸로 변경
  const baseUrl = 'https://당신도메인.com';

  if (!result) {
    return {
      title: '쓰지 않고 쓰는 내 인생, 소설',
      openGraph: {
        images: [`${baseUrl}/og-meursault.png`],
      },
    };
  }

  const imageUrl = `${baseUrl}/og-${key}.png`;

  return {
    title: result.ogTitle,
    description: result.ogDescription,

    openGraph: {
      title: result.ogTitle,
      description: result.ogDescription,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title: result.ogTitle,
      description: result.ogDescription,
      images: [imageUrl],
    },
  };
}

export default async function ResultPage({ searchParams }: Props) {
  const { type } = await searchParams;
  const key = type as CharacterType;

  const result = results[key];

  if (!result) {
    redirect('/');
  }

  return <ResultView result={result} />;
}