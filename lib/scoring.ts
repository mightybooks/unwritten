import { CharacterType } from '@/data/questions';

const PRIORITY: CharacterType[] = ['valjean', 'donquixote', 'hamlet', 'meursault', 'bartleby'];

export function calculateResult(answers: CharacterType[]): CharacterType {
  const counts: Record<CharacterType, number> = {
    valjean: 0,
    donquixote: 0,
    hamlet: 0,
    meursault: 0,
    bartleby: 0,
  };

  for (const answer of answers) {
    counts[answer]++;
  }

  const maxCount = Math.max(...Object.values(counts));
  const tied = PRIORITY.filter((t) => counts[t] === maxCount);
  return tied[0];
}
