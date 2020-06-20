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

  constructor() {}

  ngOnInit() {}
}
