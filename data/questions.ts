export type CharacterType = 'valjean' | 'donquixote' | 'hamlet' | 'meursault' | 'bartleby';

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
    scene: '고지대의 낡은 산장. 두 사람의 대화가 이어지고 있다.',
    prompt: '당신은',
    choices: [
      { text: '문을 열고 들어간다', type: 'valjean' },
      { text: '창문 너머로 바라본다', type: 'meursault' },
      { text: '돌아선다', type: 'bartleby' },
      { text: '잠시 멈춰 듣는다', type: 'hamlet' },
      { text: '문이 열릴 때까지 큰 소리로 사람을 부른다', type: 'donquixote' },
    ],
  },
  {
    id: 2,
    scene: '두 사람은 당신을 본다. 하지만 아무 말도 하지 않는다.',
    prompt: '당신은',
    choices: [
      { text: '먼저 말을 건다', type: 'valjean' },
      { text: '당당하게 자리를 잡는다', type: 'donquixote' },
      { text: '눈을 내리깔고 조용히 자리를 찾는다', type: 'meursault' },
      { text: '조용히 나가려고 한다', type: 'bartleby' },
      { text: '적당한 인사말을 고민한다', type: 'hamlet' },
    ],
  },
  {
    id: 3,
    scene: '발밑에서 물이 차오르고 있다.',
    prompt: '당신은',
    choices: [
      { text: '모두에게 상황을 알린다', type: 'valjean' },
      { text: '왜 이런 일이 생겼는지 주변을 살펴본다', type: 'meursault' },
      { text: '일단 물을 피해 자리를 옮긴다', type: 'bartleby' },
      { text: '여유롭게 그 자리를 지킨다', type: 'donquixote' },
      { text: '최선의 방법에 대해 고민하며 움직이지 않는다', type: 'hamlet' },
    ],
  },
  {
    id: 4,
    scene: '물이 허리까지 차올랐다.',
    prompt: '당신은',
    choices: [
      { text: '직접 상황을 해결하기 위해 나선다', type: 'valjean' },
      { text: '그래도 그 자리를 버티고 선다', type: 'donquixote' },
      { text: '조용히 그 자리를 떠난다', type: 'bartleby' },
      { text: '상황을 조금만 더 지켜본다', type: 'meursault' },
      { text: '아직 최선의 방법이 떠오르지 않았다', type: 'hamlet' },
    ],
  },
  {
    id: 5,
    scene: '"누가 떠올라?"',
    prompt: '마지막으로, 당신은',
    choices: [
      { text: '가장 먼저 떠오른 이의 이름을 말한다', type: 'valjean' },
      { text: '굳이 말하지는 않기로 한다', type: 'bartleby' },
      { text: '떠오르는 감정을 흘려보낸다', type: 'meursault' },
      { text: '이미 줄곧 하나의 이름만을 떠올리고 있었다', type: 'donquixote' },
      { text: '떠오른 이름이 너무 많아 말하지 못한다', type: 'hamlet' },
    ],
  },
];
