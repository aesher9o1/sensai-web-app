import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss'],
})
export class CoreComponent implements OnInit {
  posts = [
    // {
    //   gravity: 'south',
    //   title: 'Aashis Kumar',
    //   description: 'Discover how to get started with DashCore now',
    //   image: 'EykWcFEtFqo',
    // },
    {
      gravity: 'east',
      title: 'Syed Amjad',
      description: 'Learn how to fit the theme to your own needs',
      image: 'MXghcI8hcWU',
    },
    {
      gravity: 'north',
      title: 'Priya Arora',
      description: 'Finance at Delhivery, Research Analyst at Benori',
      image: 'HLG_s9b2Uuw',
    },
    {
      gravity: 'north',
      title: 'Sonali Banik',
      description: 'Integrating the API with your new template',
      image: 'HLG_s9b2Uuw',
    },
    {
      gravity: 'north',
      title: 'Shreya Jaggi',
      description: 'Integrating the API with your new template',
      image: 'HLG_s9b2Uuw',
    },
    {
      gravity: 'north',
      title: 'Vaibhav Garg',
      description: 'Integrating the API with your new template',
      image: 'HLG_s9b2Uuw',
    },
    {
      gravity: 'north',
      title: 'Priyansh ',
      description: 'Integrating the API with your new template',
      image: 'HLG_s9b2Uuw',
    },
    {
      gravity: 'north',
      title: 'Heta',
      description: 'Integrating the API with your new template',
      image: 'HLG_s9b2Uuw',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
