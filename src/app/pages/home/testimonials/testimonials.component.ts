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
    slidesPerView: 1,
    centeredSlides: true,
    autoplay: false,
    navigation: true,
    pagination: false,
  };

  items = [
    {
      name: 'Dr. Ragini Singh',
      description:
        ' It has been a really nice experience to learn with Sensai. I enrolled my child Idhant Singh under Sarvagya Singh who is a remarkable person and teacher with great aptitude for Python. He explains each and every concept with explicit detail leaving no scope for doubt. He also ensures that all concepts are lucid and I am really very proud to have my son practicing with them.',
      designation: ' Parent of Idhant Singh',
      image: 'ragini',
    },
    {
      name: 'Aryan Dhiman',
      description:
        'Since my childhood, I always had keen interest in Computer Science. Recommended by a friend I joined the course and I loved it. Coding is so fun and our friendly Sensai makes it more fun. I would recommend Python for everyone. Till then #learnandskillup',
      designation: ' Class 11, Our Student',
      image: 'aryan',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
