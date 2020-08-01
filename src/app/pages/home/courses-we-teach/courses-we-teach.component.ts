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
      bg: '#feab47',
      animation: 'fade-up',
      link:
        'https://docs.google.com/document/d/1lW-KPVEzdwzKQ7089mJSq-IGrsSCqZHTFkV2cYMtqxE/edit?usp=sharing',
      payment: 'le0feb73e98e84e5b94d85c9435569edc',
    },
    {
      img: '1',
      title: 'C++',
      class: 'mr-lg-auto',
      description:
        'Skill up yourself and become a pro at the most powerful programming language in the world.',
      bg: '#dc0065',
      animation: 'fade-up',
      link:
        'https://docs.google.com/document/d/1npmJzSPOnbJdRDCPnV3g_vIvKRXEwBkU-dbv0dPIBnI/edit?usp=sharing',
      payment: '',
    },
    {
      img: '3',
      title: 'Internet of Things',
      class: 'ml-lg-auto',
      description:
        'Learn to make intelligent machines and start your journey towards the future.',
      bg: '#00a190',
      animation: 'fade-up',
      link:
        'https://docs.google.com/document/d/1Wl0WijUIrizaJ5aYGNefkK_Ywu9r6qsI_w2FUpb8WnU/edit?usp=sharing',
      payment: '',
    },
    {
      img: '4',
      title: 'Solidworks',
      description:
        'Design, Assemble, Create and become pro in Solidworks effortlessly.',
      class: 'mt-6n mr-lg-auto',
      bg: '#006787',
      animation: 'fade-up',
      link:
        'https://docs.google.com/document/d/1g6QocKdTK6O5OXcyJcEGz7uZmLOGOzZUuYK7695FY6w/edit?usp=sharing',
      payment: '',
    },
  ];
  longAarrowAltRight = faLongArrowAltRight;
  constructor() {}

  ngOnInit(): void {}
}
