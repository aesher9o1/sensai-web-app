import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss'],
})
export class HowItWorksComponent implements OnInit {
  elements = [
    {
      icon: '1-1',
      title: 'Personalised 1-1 Mentorship',
      description: '',
    },
    {
      icon: 'hands-on',
      title: 'Interactive Hands-On Learning ',
      description: '',
    },
    {
      icon: 'experienced',
      title: 'Experienced Mentors',
      description: '',
    },
    {
      icon: 'logic-building',
      title: 'Targets Logic Building and Understanding',
      description: '',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
