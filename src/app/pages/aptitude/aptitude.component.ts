import { Component, OnInit } from '@angular/core';
import QuestionHelper from './questions';
import { Options } from './models/Questions';
import { AngularFireDatabase } from '@angular/fire/database';

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
  quizEndTime: Date;

  questions = [];

  constructor(private af: AngularFireDatabase) {
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
    this.isQuizShow = true;
    const getEndTimeInMinutes = 15 * 60000;

    setTimeout(() => this.submitQuiz(), getEndTimeInMinutes);
    this.quizEndTime = new Date(new Date().getTime() + getEndTimeInMinutes);
  }

  selectQuestion(sectionID: string, index: number, selectedOption: Options) {
    if (selectedOption.isCorrect) this.answered[`${sectionID}-${index}`] = true;
  }

  submitQuiz() {
    this.isQuizSubmitted = true;
    this.af.database
      .ref('aptitude')
      .child(this.userKey.toString())
      .push({
        score: Object.keys(this.answered).length,
        answers: this.answered,
      });
  }
}
