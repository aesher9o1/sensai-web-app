import { Component, OnInit } from '@angular/core';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { emit } from 'process';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { Router } from '@angular/router';

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
  scrollToElement(target: string, page: string = ''): void {
    this.router.navigate([`/${page}`]).then(() => {
      setTimeout(() => {
        this.scrollToService.scrollTo({
          target,
        });
      }, 0);
    });
  }
}
