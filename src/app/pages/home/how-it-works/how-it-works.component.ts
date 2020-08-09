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
      description: '',
    },
    {
      icon: 'payment',
      title: 'Interactive Learning ',
      description: '',
    },
    {
      icon: 'work',
      title: 'Experienced Mentors',
      description: '',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
