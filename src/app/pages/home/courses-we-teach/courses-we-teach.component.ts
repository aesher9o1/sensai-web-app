import { Component, OnInit } from '@angular/core';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { Router } from '@angular/router';
import { subject } from '../subject';

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
      beforePrice: 9600,
      afterPrice: 7200,
      bg: '#00a190',
      animation: 'fade-up',
      class: 'features-beg',
      button: 'btn-success',
      readMore: false,
      aboutCourse:
        'How a computer works, how python works on it. Basic Input - Output. Different data types in python and operators. Looping and Conditions with different Strings. Sorting and Searching Algorithms, and Error Handling with Funcational Programming. A proper project and assessment.',
      courseHandsOn: '13',
      key: 'python',
      level: '1',
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
      beforePrice: 9600,
      afterPrice: 7200,
      bg: '#00a190',
      animation: 'fade-up',
      class: 'features-beg',
      button: 'btn-success',
      readMore: false,
      aboutCourse:
        'How computer works, What is Programming, why do we code? Basic Input - Output, Basic Data Types, Conditions and Loops. One Dimension Arrays, Strings. Searching and Sorting Algorithms. Pointers and Functional Programming.',
      courseHandsOn: '8',
      key: 'c-plus-plus',
      level: '1',
    },
    {
      name: 'IoT',
      lectures: '10',
      features: [
        '1-1 Personalised lectures',
        'Extensive Hands on Practice',
        'Create a bluetooth control car',
        'Hardware Kit included',
      ],
      beforePrice: 12800,
      afterPrice: 9600,
      bg: '#00a190',
      animation: 'fade-up',
      class: 'features-beg',
      button: 'btn-success',
      readMore: false,
      key: 'IoT',
      level: '1',
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
      beforePrice: 9600,
      afterPrice: 7200,
      bg: '#feab47',
      animation: 'fade-up',
      class: 'features-int',
      button: 'btn-warning',
      readMore: false,
      aboutCourse:
        'Function Recursion, File Handling through Python, Object Oriented Concepts and Programming, Introduction to Libraries like Numpy, Pandas, PyPlot. Introduction to Data Science, and a proper project of Sentimental Analysis with Manual Webscraping.',
      courseHandsOn: '9',
      key: 'python',
      level: '2',
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
      beforePrice: 9600,
      afterPrice: 7200,
      bg: '#feab47',
      animation: 'fade-up',
      class: 'features-int',
      button: 'btn-warning',
      readMore: false,
      aboutCourse:
        'Recursion, Two Dimensional Arrays, Errors and Exceptions, Object Oriented Concepts and Programming with Inheritence and Polymorphism. File Handling and a Proper Project with assessment.',
      courseHandsOn: '9',
      key: 'c-plus-plus',
      level: '2',
    },
    {
      name: 'Mobile App Dev',
      lectures: '35',
      features: [
        '1-1 Personalised lectures',
        'Extensive Hands on Practice',
        'Create a To-Do List App',
        'Create a Chat-App',
      ],
      beforePrice: 17000,
      afterPrice: 13500,
      bg: '#feab47',
      animation: 'fade-up',
      class: 'features-int',
      button: 'btn-warning',
      readMore: false,
      key: 'flutter',
      level: '2',
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
      beforePrice: 12800,
      afterPrice: 9600,
      bg: '#dc0065',
      animation: 'fade-up',
      class: 'features-sp',
      button: 'btn-danger',
      readMore: false,
      key: 'machine-learning',
      level: '3',
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
      beforePrice: 12800,
      afterPrice: 9600,
      bg: '#dc0065',
      animation: 'fade-up',
      class: 'features-sp',
      button: 'btn-danger',
      readMore: false,
      key: 'solidworks',
      level: '3',
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
      beforePrice: 9600,
      afterPrice: 7200,
      bg: '#dc0065',
      animation: 'fade-up',
      class: 'features-sp',
      button: 'btn-danger',
      readMore: false,
      key: 'flutter',
      level: '3',
    },
  ];

  beginnerShow: boolean = true;
  intermediateShow: boolean = false;
  specialisationShow: boolean = false;
  longAarrowAltRight = faLongArrowAltRight;
  visibleCourse = this.beginner;
  showDetails: boolean = false;
  constructor(
    private scrollToService: ScrollToService,
    private router: Router
  ) {}
  ngOnInit(): void {}
  clickOnBeginner() {
    this.visibleCourse = this.beginner;
  }
  clickOnIntermediate() {
    this.visibleCourse = this.intermediate;
  }
  clickOnSpec() {
    this.visibleCourse = this.special;
  }
  clickOnReadMore(i) {
    this.visibleCourse[i].readMore = !this.visibleCourse[i].readMore;
  }

  offerCalculator(finalPrice: number, initialPrice: number) {
    return `${Math.ceil(
      ((finalPrice - initialPrice) / finalPrice) * 100
    )}% Off`;
  }
  scrollToElement(target: string, key: string[]): void {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        this.scrollToService.scrollTo({
          target,
          offset: -300,
        });
      }, 0);
    });
    let level =
      key[1] == '1'
        ? 'Beginner'
        : key[1] == '2'
        ? 'Intermediate'
        : 'Specialisation';
    subject.next([key[0], level, key[2]]);
  }
}
