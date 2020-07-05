import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.scss'],
})
export class MentorsComponent implements OnInit {
  posts = [
    {
      gravity: 'south',
      title: 'Siddharth Jaidka',
      description: 'Discover how to get started with DashCore now',
      image: 'url(assets/img/mentors/sarvagya.jpg)',
    },
    {
      gravity: 'south',
      title: 'Aashis Kumar',
      description: 'Discover how to get started with DashCore now',
      image: 'url(assets/img/mentors/sarvagya.jpg)',
    },
    {
      gravity: 'south',
      title: 'Sarvagya Singh',
      description: 'Discover how to get started with DashCore now',
      image: 'url(assets/img/mentors/sarvagya.jpg)',
    },
    {
      gravity: 'east',
      title: 'Kabir Nagpal',
      description: 'Learn how to fit the theme to your own needs',
      image: 'url(assets/img/mentors/kabir.jpg)',
    },
    {
      gravity: 'north',
      title: 'Ananya Smriti',
      description: 'Integrating the API with your new template',
      image: 'url(assets/img/mentors/ananya.jpg)',
    },
    {
      gravity: 'north',
      title: 'Srikanth Kuppili',
      description: 'Integrating the API with your new template',
      image: 'url(assets/img/mentors/ananya.jpg)',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
