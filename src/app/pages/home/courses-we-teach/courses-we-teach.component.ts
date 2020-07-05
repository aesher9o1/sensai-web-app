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
      title: 'Python',
      description:
        'Want to learn Data Science or Machine learning? Do you have a knack for development? Python is your way towards a myriad of skills.',
      class: 'mt-6 ml-lg-auto',
      bg: 'bg-warning-gradient',
      animation: 'fade-up',
      link: '',
    },
    {
      img: '1',
      title: 'C++',
      class: 'mr-lg-auto',
      description:
        'Skill up yourself and become a pro at the most powerful programming language in the world.',
      bg: 'bg-info-gradient',
      animation: 'fade-up',
      link: '',
    },
    {
      img: '3',
      title: 'Internet of Things',
      class: 'ml-lg-auto',
      description:
        'Learn to make intelligent machines and start your journey towards the future.',
      bg: 'bg-danger-gradient',
      animation: 'fade-up',
      link: '',
    },
    {
      img: '4',
      title: 'Solidworks',
      description:
        'Design, Assemble, Create and become pro in Solidworks effortlessly.',
      class: 'mt-6n mr-lg-auto',
      bg: 'bg-secondary-gradient',
      animation: 'fade-up',
      link: '',
    },
  ];
  longAarrowAltRight = faLongArrowAltRight;
  constructor() {}

  ngOnInit(): void {}
}
