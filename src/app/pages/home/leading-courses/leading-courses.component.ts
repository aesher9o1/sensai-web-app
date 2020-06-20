import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leading-courses',
  templateUrl: './leading-courses.component.html',
  styleUrls: ['./leading-courses.component.scss'],
})
export class LeadingCoursesComponent implements OnInit {
  stacks = [
    { name: 'Javascript', image: 'javascript' },
    { name: 'Javascript', image: 'es6' },
    { name: 'Styles', image: 'node-sass' },
  ];
  items = [
    {
      icon: 'activity',
      title: 'Live Mentorship',
      description: '',
    },
    {
      icon: 'upload-cloud',
      title: 'Practice & Practicals',
      description: '',
    },
    {
      icon: 'zap',
      title: 'Talks and Seminar',
      description: '',
    },
    {
      icon: 'hexagon',
      title: 'Project Driven',
      description: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
