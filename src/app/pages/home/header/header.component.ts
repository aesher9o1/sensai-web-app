import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  elements = [
    {
      icon: 'improves_logic',
      title: 'Improves Logic',
      description: '',
    },
    {
      icon: 'better_optimization',
      title: 'Better Problem Solving and Optimization',
      description: '',
    },
    {
      icon: 'critical_thinking',
      title: 'High Critical Thinking',
      description: '',
    },
    {
      icon: 'imagination',
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
