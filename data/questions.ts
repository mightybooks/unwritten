export type CharacterType = 'valjean' | 'don' | 'hamlet' | 'meursault' | 'bartleby';

export type Choice = {
  text: string;
  type: CharacterType;
};

export type Question = {
  id: number;
  scene: string;
  prompt: string;
  choices: Choice[];
};

export const questions: Question[] = [
  {
    id: 1,
    scene: '고지대의 낡은 산장.\n두 사람의 대화가 이어지고 있다.',
    prompt: '당신은',
    choices: [
      { text: '문을 열고 들어간다', type: 'valjean' },
      { text: '창문 너머로 바라본다', type: 'meursault' },
      { text: '돌아선다', type: 'bartleby' },
      { text: '잠시 멈춰 듣는다', type: 'hamlet' },
    ],
  },
  {
    id: 2,
    scene: '두 사람은 당신을 본다.\n하지만 아무 말도 하지 않는다.',
    prompt: '당신은',
    choices: [
      { text: '먼저 말을 건다', type: 'valjean' },
      { text: '아무 말 없이 자리를 잡는다', type: 'don' },
      { text: '아무 반응도 하지 않는다', type: 'meursault' },
      { text: '나가려고 한다', type: 'bartleby' },
      { text: '잠시 머뭇거린다', type: 'hamlet' },
    ],
  },
  {
    id: 3,
    scene: '발밑에서 물이 차오르고 있다.',
    prompt: '당신은',
    choices: [
      { text: '상황을 알린다', type: 'valjean' },
      { text: '그대로 둔다', type: 'meursault' },
      { text: '아무것도 하지 않는다', type: 'bartleby' },
      { text: '자리를 지킨다', type: 'don' },
      { text: '판단을 미룬다', type: 'hamlet' },
    ],
  },
  {
    id: 4,
    scene: '물이 허리까지 차올랐다.',
    prompt: '당신은',
    choices: [
      { text: '다른 사람을 돕는다', type: 'valjean' },
      { text: '그대로 서 있는다', type: 'don' },
      { text: '아무것도 하지 않는다', type: 'bartleby' },
      { text: '지켜본다', type: 'meursault' },
      { text: '결정을 미룬다', type: 'hamlet' },
    ],
  },
  {
    id: 5,
    scene: '"누가 떠올라?"',
    prompt: '마지막으로, 당신은',
    choices: [
      { text: '누군가를 말한다', type: 'valjean' },
      { text: '아무 말도 하지 않는다', type: 'bartleby' },
      { text: '떠오른 것을 흘려보낸다', type: 'meursault' },
      { text: '끝까지 남는다', type: 'don' },
      { text: '입을 열지 못한다', type: 'hamlet' },
    ],
  },
];
