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
      name: 'Aryan Dhiman',
      description:
        'Since my childhood, I always had keen interest in Computer Science. Recommended by a friend I joined the course and I loved it. Coding is so fun and our friendly Sensai makes it more fun. I would recommend Python for everyone. Till then #learnandskillup',
      designation: ' Class 11, Our Student',
      image: '',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
