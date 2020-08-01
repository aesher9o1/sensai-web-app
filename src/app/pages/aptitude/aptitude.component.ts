import { Component, OnInit } from '@angular/core';
import QuestionHelper from './questions';
import { Options } from './models/Questions';

@Component({
  selector: 'app-aptitude',
  templateUrl: './aptitude.component.html',
  styleUrls: ['./aptitude.component.scss'],
})
export class AptitudeComponent implements OnInit {
  userKey: number;
  isQuizShow = false;
  isQuizSubmitted = false;
  answered: Record<string, boolean> = {};
  questionHelper = QuestionHelper.getInstance();

  questions = [];

  constructor() {
    setTimeout(() => this.submitQuiz(), 900000);

    this.questions.push({
      key: 'quants',
      questions: this.questionHelper.getQuants(),
    });

    this.questions.push({
      key: 'logical',
      questions: this.questionHelper.getLogical(),
    });

    this.questions.push({
      key: 'basics',
      questions: this.questionHelper.getBasics(),
    });

    this.questions.push({
      key: 'verbal',
      questions: this.questionHelper.getVerbal(),
    });
  }

  ngOnInit(): void {}

  startQuiz() {
    if (!this.userKey) return;
    console.log(this.userKey);
    this.isQuizShow = true;
  }

  selectQuestion(sectionID: string, index: number, selectedOption: Options) {
    if (selectedOption.isCorrect) this.answered[`${sectionID}-${index}`] = true;

    console.log(selectedOption);
    console.log(this.answered);
  }

  submitQuiz() {
    this.isQuizSubmitted = true;
  }
}
