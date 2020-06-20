import { Component, OnInit, Input } from '@angular/core';
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  @Input()
  useOnlyDarkLogo: boolean;

  @Input()
  darkLinks: boolean;

  @Input()
  position: string;

  signInAlt = faSignInAlt;
  userPlus = faUserPlus;

  constructor() {}

  ngOnInit() {}

  isRightPositioned() {
    return this.position === 'right';
  }
}
