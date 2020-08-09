import { Component, OnInit } from '@angular/core';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-courses-we-teach',
  templateUrl: './courses-we-teach.component.html',
  styleUrls: ['./courses-we-teach.component.scss'],
})
export class CoursesWeTeachComponent implements OnInit {
  beginner = [
    {
      name: 'Python',
      lectures: '21',
      features: [
        '1-1 Personalised lectures',
        'Extensive Hands on Practice',
        'Projects and Applications',
        'Industrial way of code',
      ],
      beforePrice: '9,600',
      afterPrice: '7,200',
    },
    {
      name: 'C++',
      lectures: '18',
      features: [
        '1-1 Personalised lectures',
        'Extensive Hands on Practice',
        'Projects and Applications',
        'Industrial way of code',
      ],
      beforePrice: '9,600',
      afterPrice: '7,200',
    },
    {
      name: 'IOT',
      lectures: '10',
      features: [
        '1-1 Personalised lectures',
        'Extensive Hands on Practice',
        'Create a bluetooth control car',
        'Hardware Kit included',
      ],
      beforePrice: '9,600',
      afterPrice: '7,200',
    },
  ];
  intermediate = [
    {
      name: 'Python',
      lectures: '19',
      features: [
        '1-1 Personalised lectures',
        'Extensive Hands on Practice',
        'Projects and Applications',
        'Industrial way of code',
      ],
      beforePrice: '9,600',
      afterPrice: '7,200',
    },
    {
      name: 'C++',
      lectures: '18',
      features: [
        '1-1 Personalised lectures',
        'Extensive Hands on Practice',
        'Projects and Applications',
        'Industrial way of code',
      ],
      beforePrice: '9,600',
      afterPrice: '7,200',
    },
    {
      name: 'Mobile App Dev',
      lectures: '24',
      features: [
        '1-1 Personalised lectures',
        'Extensive Hands on Practice',
        'Create a To-Do List App',
        'Create a Chat-App',
      ],
      beforePrice: '9,600',
      afterPrice: '7,200',
    },
  ];
  special = [
    {
      name: 'Machine Learning',
      lectures: '20',
      features: [
        'Step in to Artifical Intelligence',
        'Extensive Hands on Practice',
        'Projects and Applications',
        'Industrial way of code',
      ],
      beforePrice: '12,800',
      afterPrice: '9,600',
    },
    {
      name: 'Solidworks',
      lectures: '28',
      features: [
        '1-1 Personalised lectures',
        'Extensive Hands on Practice',
        'Projects and Applications',
        'Industrial way of code',
      ],
      beforePrice: '9,600',
      afterPrice: '7,200',
    },
    {
      name: 'Mobile App Dev',
      lectures: '24',
      features: [
        '1-1 Personalised lectures',
        'Extensive Hands on Practice',
        'Create a To-Do List App',
        'Create a Chat-App',
      ],
      beforePrice: '9,600',
      afterPrice: '7,200',
    },
  ];

  beginnerShow: boolean = true;
  intermediateShow: boolean = false;
  specialisationShow: boolean = false;
  longAarrowAltRight = faLongArrowAltRight;
  constructor() {}

  ngOnInit(): void {}
  clickOnBeginner() {
    this.intermediateShow = false;
    this.specialisationShow = false;
    this.beginnerShow = true;
  }
  clickOnIntermediate() {
    this.specialisationShow = false;
    this.beginnerShow = false;
    this.intermediateShow = true;
  }
  clickOnSpec() {
    this.beginnerShow = false;
    this.intermediateShow = false;
    this.specialisationShow = true;
  }
}
