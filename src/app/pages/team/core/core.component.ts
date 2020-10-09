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

    // {
    //   gravity: 'north',
    //   title: 'Priya Arora',
    //   description: 'Worked at Delhivery & Benori before',
    //   image: 'url(assets/img/team/priya.jpg)',
    // },
    // {
    //   gravity: 'east',
    //   title: 'Syed Amjad',
    //   description: 'Loves agile environment and management',
    //   image: 'url(assets/img/team/syed.jpg)',
    // },
    // {
    //   gravity: 'north',
    //   title: 'Sonali Banik',
    //   description: 'Operations under her, Upcoming L&T Employee',
    //   image: 'url(assets/img/team/sonali.jpg)',
    // },
    {
      gravity: 'north',
      title: 'Shreya Jaggi',
      description: 'Our fabulous content writer',
      image: 'url(assets/img/team/shreya.jpg)',
    },
    {
      gravity: 'north',
      title: 'Vaibhav Garg',
      description: 'Designing has never been so easier',
      image: 'url(assets/img/team/vaibhav.jpg)',
    },
    {
      gravity: 'north',
      title: 'Priyansh Khandelwal',
      description: 'Our cool visual designer',
      image: 'url(assets/img/team/priyansh.jpg)',
    },
    {
      gravity: 'north',
      title: 'Heta',
      description: 'Valuable asset to the designing team',
      image: 'url(assets/img/team/heta.jpg)',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
