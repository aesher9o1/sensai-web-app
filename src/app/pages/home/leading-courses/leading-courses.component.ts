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
    // { name: 'Styles', image: 'node-sass' },
    // { name: 'Styles', image: 'node-sass' },
    // { name: 'Styles', image: 'node-sass' },
  ];
  items = [
    {
      icon: 'activity',
      title: 'Siddharth Jaidka',
      description: '4+ years of experience, Senior Software Engineer, QuillBot',
    },
    {
      icon: 'upload-cloud',
      title: 'Vidhyanshu Jain',
      description: '2+ years of experience, Software Engineer, Dell',
    },
    {
      icon: 'zap',
      title: 'Tanya Agarwal',
      description:
        '2+ years of experience, Quality Analyst, General Electronics',
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
