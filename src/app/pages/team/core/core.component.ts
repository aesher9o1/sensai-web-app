import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss'],
})
export class CoreComponent implements OnInit {
  posts = [
    {
      gravity: 'south',
      title: 'Welcome to Dashcore',
      description: 'Discover how to get started with DashCore now',
      videoId: 'EykWcFEtFqo',
    },
    {
      gravity: 'east',
      title: 'Customizing theme',
      description: 'Learn how to fit the theme to your own needs',
      videoId: 'MXghcI8hcWU',
    },
    {
      gravity: 'north',
      title: 'Using the API',
      description: 'Integrating the API with your new template',
      videoId: 'HLG_s9b2Uuw',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
