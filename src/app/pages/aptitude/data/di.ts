import { Question } from '../models/Questions';

const DataInterpretation: Question[] = [
  {
    value:
      'What was the percentage increase in the sales of commercial vehicles over the one year period mentioned?',
    options: [
      {
        value: '25%',
        isCorrect: true,
      },
      {
        value: '16%',
      },
      {
        value: '33 1/3%',
      },
      {
        value: '22 6/7%',
      },
    ],
  },
  {
    value:
      'If Bajaj Tempo had a 10% share of the commercial vehicles market and sold its vehicles at 10% less than the list price, what were its sales (in rupees) in 1993-94, if the list price of its vehicles was Rs.10,000?',
    options: [
      {
        value: '13572 crore',
      },
      {
        value: '167.25 lakh',
      },
      {
        value: '135.72 crore',
        isCorrect: true,
      },
      {
        value: '167.25 crore',
      },
    ],
  },
  {
    value:
      'Which of the following is true of the percentage increase in the sales of passenger cars for the given period?',
    options: [
      {
        value:
          'It was higher than the percentage increase in the production of cars for the given period.',
      },
      {
        value:
          'It was lower than the percentage increase in the production of cars for the given period.',
        isCorrect: true,
      },
      {
        value:
          'It was equal to the percentage increase in the production of cars for the given period.',
      },
      {
        value: 'Insufficient information to decide.',
      },
    ],
  },
];

export default DataInterpretation;
