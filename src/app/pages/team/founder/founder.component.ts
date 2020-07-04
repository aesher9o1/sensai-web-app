import { Component, OnInit } from '@angular/core';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-founder',
  templateUrl: './founder.component.html',
  styleUrls: ['./founder.component.scss'],
})
export class FounderComponent implements OnInit {
  quoteLeft = faQuoteLeft;

  constructor() {}

  ngOnInit(): void {}
}
