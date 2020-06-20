import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss'],
})
export class HowItWorksComponent implements OnInit {
  elements = [
    {
      icon: 'plan',
      title: 'Choose a course',
      description:
        'Choose from a variety of courses we offer, it is encouraged from our site to ask for a demo class',
    },
    {
      icon: 'payment',
      title: 'Complete payment',
      description:
        'Book a slot and class timings, due to us keeping batch sizes of 4-6 negotiations in timing is also possible',
    },
    {
      icon: 'work',
      title: "Let's work",
      description:
        'We share you the credentials to join the batch learn at your own pace clear doubts and we make sure you gain 100% of what you pay',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
