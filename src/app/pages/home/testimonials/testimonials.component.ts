import { Component, OnInit } from '@angular/core';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent implements OnInit {
  public config: SwiperConfigInterface = {
    slidesPerView: 3,
    a11y: true,
    centeredSlides: false,
    autoplay: true,
    navigation: true,
    pagination: false,
    initialSlide: 1,
    updateOnWindowResize: true,
  };

  items = [
    {
      name: 'Dr. Ragini Singh',
      description:
        ' It has been a really nice experience to learn with Sensai. I enrolled my child Idhant Singh under Sarvagya Singh who is a remarkable person and teacher with great aptitude for Python. He explains each and every concept with explicit detail leaving no scope for doubt. He also ensures that all concepts are lucid and I am really very proud to have my son practicing with them.',
      designation: ' Parent of Idhant Singh, Class 8',
      image: 'ragini',
    },
    {
      name: 'Mrs. Parul Tiwari',
      description:
        'I must say yet to come across more professional and sincere mentors like at Sensai. They understand children and come up to their level to explain the concepts. Coding is tough but they has tailored it to suit the children and make them understand easily. Sensai is always there to explain in a very approachable way. Hope this learning will help my son in the future.',
      designation: ' Parent of Vihan Tiwari, Class 8',
      image: 'parul',
    },
    {
      name: 'Aryan Dhiman',
      description:
        'Since my childhood, I always had keen interest in Computer Science. Recommended by a friend I joined the course and I loved it. Coding is so fun and our friendly Sensai makes it more fun. I would recommend Python for everyone. Till then #learnandskillup',
      designation: ' Class 11, Our Student',
      image: 'aryan',
    },
    {
      name: 'Aditya Harsh',
      description:
        'My mentor was really sincere and very thorough with his concepts. Proper one to one interaction with great tutoring attitude. It actually helped me to Learn and Skill Up. Worth it.',
      designation: ' B. Tech Graduate, Our Student',
      image: 'aditya',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
