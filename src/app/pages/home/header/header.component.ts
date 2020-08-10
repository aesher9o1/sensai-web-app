import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  elements = [
    {
      icon: 'plan',
      title: 'Improves Logic',
      description: '',
    },
    {
      icon: 'payment',
      title: 'Better Problem Solving and Optimization',
      description: '',
    },
    {
      icon: 'work',
      title: 'High Critical Thinking',
      description: '',
    },
    {
      icon: 'work',
      title: 'Increases Imagination and Creativity',
      description: '',
    },
    // {
    //   icon: 'work',
    //   title: 'Nurture Focus and Concentration',
    //   description: '',
    // },
    // {
    //   icon: 'work',
    //   title: 'One Step Forward in their Career',
    //   description: '',
    // },
  ];
  constructor() {}

  ngOnInit(): void {}
}
