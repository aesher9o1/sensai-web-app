import { Component, OnInit } from '@angular/core';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-courses-we-teach',
  templateUrl: './courses-we-teach.component.html',
  styleUrls: ['./courses-we-teach.component.scss'],
})
export class CoursesWeTeachComponent implements OnInit {
  cards = [
    {
      img: '2',
      title: 'jQuery',
      class: 'mt-6 ml-lg-auto',
      bg: 'bg-primary-gradient',
      animation: 'fade-up',
    },
    {
      img: '1',
      title: 'Codebase',
      class: 'mr-lg-auto',
      bg: 'bg-info-gradient',
      animation: 'fade-up',
    },
    {
      img: '3',
      title: 'OpenCart',
      class: 'ml-lg-auto',
      bg: 'bg-danger-gradient',
      animation: 'fade-up',
    },
    {
      img: '4',
      title: 'Morpheus',
      class: 'mt-6n mr-lg-auto',
      bg: 'bg-success-gradient',
      animation: 'fade-up',
    },
  ];
  longAarrowAltRight = faLongArrowAltRight;
  constructor() {}

  ngOnInit(): void {}
}
