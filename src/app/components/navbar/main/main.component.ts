import { Component, OnInit, Input } from '@angular/core';
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { Router } from '@angular/router';

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

  constructor(
    private scrollToService: ScrollToService,
    private router: Router
  ) {}

  ngOnInit() {}

  isRightPositioned() {
    return this.position === 'right';
  }
  scrollToElement(target: string, page: string = ''): void {
    this.router.navigate([`/${page}`]).then(() => {
      setTimeout(() => {
        this.scrollToService.scrollTo({
          target,
          offset: -300,
        });
      }, 0);
    });
  }
}
