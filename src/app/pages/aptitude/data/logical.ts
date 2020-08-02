import { Question } from '../models/Questions';

const Logical: Question[] = [
  {
    value:
      'After walking 6 kms, I turned right and travelled a distance of 2 kms, then turned left and covered a distance of 10 km. In the end I was moving towards the north. From which direction did I start my journey?',
    options: [
      {
        value: 'North',
      },
      {
        value: 'South',
        isCorrect: true,
      },
      {
        value: 'East',
      },
      {
        value: 'West',
      },
    ],
  },
  {
    value:
      'In a certain code language if the word ‘MUSEUM’ is coded as ‘LSPAPG’, then how will the word ‘PALACE’ be coded in that language?',
    options: [
      {
        value: 'OYIWXY',
        isCorrect: true,
      },
      {
        value: 'OYIXYW',
      },
      {
        value: 'IYXYWO',
      },
      {
        value: 'YXWYOI',
      },
    ],
  },
  {
    value:
      '<b>Event (A):</b> Senior students ragged junior students.<br> <b>Event (B):</b> Senior students were suspended.',
    options: [
      {
        value:
          'if ‘A’ is the effect and ‘B’ is its immediate and principal cause.',
      },
      {
        value:
          'if ‘A’ is the immediate and principal cause and ‘B’ is its effect.',
        isCorrect: true,
      },
      {
        value:
          ' if ‘A’ is an effect but ‘B’ is not its immediate and principal  cause.',
      },
      {
        value:
          'if ‘B’ is an effect but ‘A’ is not its immediate and principal  cause.',
      },
    ],
  },
  {
    value:
      'There are five friends Sachin, Kunal, Mohit, Anuj and Rohan. Sachin ia shorter than Kunal but taller than Rohan. Mohit is tallest. Anuj is a little shorter than Kunal and little taller than Sachin. Who is the shortest?',
    options: [
      {
        value: 'Rohan',
        isCorrect: true,
      },
      {
        value: 'Sachin',
      },
      {
        value: 'Anuj',
      },
      {
        value: 'Kunal',
      },
    ],
  },
  {
    value:
      'Pointing to Manju, Raju said, “The son of her only brother is the brother of my wife”. How is Manju related to Raju?',
    options: [
      {
        value: 'Mother’s sister',
      },
      {
        value: 'Grandmother',
      },
      {
        value: 'Sister of father-in-law',
        isCorrect: true,
      },
      {
        value: 'Maternal aunt',
      },
    ],
  },
  {
    value:
      'Mr.Ramu’s mother’s father-in-law’s only son’s only daughter’s son is Chetan. How is Ramu related to Chetan?',
    options: [
      {
        value: 'Uncle',
        isCorrect: true,
      },
      {
        value: 'Nephew',
      },
      {
        value: 'Niece',
      },
      {
        value: 'Father',
      },
    ],
  },
  {
    value:
      '<b>Statements:</b> Some blades are hammers. Some hammers are knives. Some knives are axes.<br><b>Conclusions:</b><li>Some axes are hammers</li><li>Some knives are blades.</li><li>Some axes are blades.</li>',
    options: [
      {
        value: 'None follows',
        isCorrect: true,
      },
      {
        value: 'Only I follows',
      },
      {
        value: 'Only II follows',
      },
      {
        value: 'Only III follows',
      },
    ],
  },
  {
    value:
      'What is the angle between the two hands of a clock when the time shown by the clock is 5.30 p.m. ?',
    options: [
      {
        value: '0',
      },
      {
        value: '50',
      },
      {
        value: '30',
      },
      {
        value: '15',
        isCorrect: true,
      },
    ],
  },
];

export default Logical;
