import Quants from './data/quants';
import Logical from './data/logical';
import BasicComputer from './data/basics';
import Verbal from './data/verbal';
import { Question } from './models/Questions';

class QuestionHelper {
  private static instance: QuestionHelper;
  private QUESTIONS_PER_SECTION = 5;

  private constructor() {}

  public static getInstance() {
    if (!QuestionHelper.instance)
      QuestionHelper.instance = new QuestionHelper();
    return QuestionHelper.instance;
  }

  private shuffleQuestion(question: Question[]) {
    let currentIndex = question.length;
    let temporaryValue;
    let randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = question[currentIndex];
      question[currentIndex] = question[randomIndex];
      question[randomIndex] = temporaryValue;
    }

    return question;
  }

  public getQuants() {
    const shuffledQuants = this.shuffleQuestion(Quants);

    if (shuffledQuants.length > 5)
      return shuffledQuants.slice(0, this.QUESTIONS_PER_SECTION);
    return shuffledQuants;
  }

  public getLogical() {
    const shuffledQuants = this.shuffleQuestion(Logical);

    if (shuffledQuants.length > 5)
      return shuffledQuants.slice(0, this.QUESTIONS_PER_SECTION);
    return shuffledQuants;
  }

  public getBasics() {
    const shuffledQuants = this.shuffleQuestion(BasicComputer);

    if (shuffledQuants.length > 5)
      return shuffledQuants.slice(0, this.QUESTIONS_PER_SECTION);
    return shuffledQuants;
  }

  public getVerbal() {
    const shuffledQuants = this.shuffleQuestion(Verbal);

    if (shuffledQuants.length > 5)
      return shuffledQuants.slice(0, this.QUESTIONS_PER_SECTION);
    return shuffledQuants;
  }
}

export default QuestionHelper;
