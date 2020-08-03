import { Component, OnInit, ViewChild } from '@angular/core';
import QuestionHelper from './questions';
import { Options } from './models/Questions';
import { AngularFireDatabase } from '@angular/fire/database';
import { CountdownComponent } from 'ngx-countdown';

@Component({
  selector: 'app-aptitude',
  templateUrl: './aptitude.component.html',
  styleUrls: ['./aptitude.component.scss'],
})
export class AptitudeComponent implements OnInit {
  userKey: number;
  name: string;
  email: string;
  isQuizShow = false;
  isQuizSubmitted = false;
  answered: Record<string, boolean> = {};
  questionHelper = QuestionHelper.getInstance();
  quizEndTime: Date;
  formText = 'Not ready to give this right now? Give it later!';
  @ViewChild('cd', { static: false }) private countdown: CountdownComponent;
  questions = [];

  constructor(private af: AngularFireDatabase) {
    this.questions.push({
      key: 'quants',
      name: 'Quantitative Analytics',
      questions: this.questionHelper.getQuants(),
    });

    this.questions.push({
      key: 'logical',
      name: 'Logical Reasoning',
      questions: this.questionHelper.getLogical(),
    });

    this.questions.push({
      key: 'basics',
      name: 'Basic Computers',
      questions: this.questionHelper.getBasics(),
    });

    this.questions.push({
      key: 'verbal',
      name: 'Verbal Ability',
      questions: this.questionHelper.getVerbal(),
    });

    this.questions.push({
      key: 'data-interpretaion',
      questions: this.questionHelper.getDI(),
    });
  }

  ngOnInit(): void {}

  startQuiz() {
    if (!this.userKey) return;

    if (!this.validateEmail(this.email)) {
      this.formText = 'The email is not valid';
      return;
    }

    if (this.userKey.toString().length < 10) {
      this.formText = 'The phone number is not valid';
      return;
    }

    if (this.name.length < 3) {
      this.formText = 'Please enter a valid name';
      return;
    }
    // this.countdown.begin();
    this.isQuizShow = true;
    const getEndTimeInMinutes = 15 * 60000;

    setTimeout(() => this.submitQuiz(), getEndTimeInMinutes);
    this.quizEndTime = new Date(new Date().getTime() + getEndTimeInMinutes);
  }

  selectQuestion(sectionID: string, index: number, selectedOption: Options) {
    if (selectedOption.isCorrect) this.answered[`${sectionID}-${index}`] = true;
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  submitQuiz() {
    this.af.database
      .ref('aptitude')
      .child(this.userKey.toString())
      .push({
        score: Object.keys(this.answered).length,
        answers: this.answered,
        name: this.name,
        email: this.email,
      });
    this.isQuizSubmitted = true;
  }
}
