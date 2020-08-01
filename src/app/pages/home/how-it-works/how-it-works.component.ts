import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss'],
})
export class HowItWorksComponent implements OnInit {
  elements = [
    {
      icon: 'plan',
      title: 'Personalised Courses',
      description:
        'Curriculum created with love by our experienced industrial experts for the smooth learning experience/',
    },
    {
      icon: 'payment',
      title: 'Interactive Learning ',
      description:
        'With batch sizes of only five students, we aim to encourage one on one interactions for better understanding of the students, with more focus on hands on experience.',
    },
    {
      icon: 'work',
      title: 'Experienced Mentors',
      description:
        'Our mentors are experienced in their respective domains with vast knowledge and industrial experience.',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
