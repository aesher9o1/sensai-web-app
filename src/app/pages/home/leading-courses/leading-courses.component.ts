import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leading-courses',
  templateUrl: './leading-courses.component.html',
  styleUrls: ['./leading-courses.component.scss'],
})
export class LeadingCoursesComponent implements OnInit {
  stacks = [
    // { name: 'Dell', image: 'dell' },
    { name: 'GE', image: 'ge' },
    { name: 'QuillBot', image: 'quill' },
    // { name: 'Styles', image: 'node-sass' },
    // { name: 'Styles', image: 'node-sass' },
    // { name: 'Styles', image: 'node-sass' },
  ];
  items = [
    {
      icon: 'url(assets/img/mentors/jaidka.jpg)',
      title: 'Siddharth Jaidka',
      description: 'Full Stack Software Developer, QuillBot',
    },
    {
      icon: 'url(assets/img/mentors/vidhu.jpg)',
      title: 'Vidhyanshu Jain',
      description: 'Software Engineer, Dell',
    },
    {
      icon: 'url(assets/img/mentors/tanya.jpg)',
      title: 'Tanya Agarwal',
      description: 'Enterprise Solution Specialist, General Electric',
    },
    // {
    //   icon: 'url(assets/img/mentors/tanuj.jpg)',
    //   title: 'Tanuj Sahal',
    //   description: 'Application Development Consultant, Microsoft',
    // },
  ];

  constructor() {}

  ngOnInit(): void {}
}
