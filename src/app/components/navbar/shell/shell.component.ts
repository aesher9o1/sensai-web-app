import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { Router } from '@angular/router';

const STICKY_POINT = 90;

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {
  @Input()
  useOnlyDarkLogo: boolean;

  @Input()
  darkLinks: boolean;

  navbarExpanded: boolean;
  navbarSticky: boolean;

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;

    if (windowScroll >= STICKY_POINT) {
      this.navbarSticky = true;
    } else {
      this.navbarSticky = false;
    }
  }

  constructor(
    private scrollToService: ScrollToService,
    private router: Router
  ) {}

  ngOnInit() {}

  toggleNavbar() {
    this.navbarExpanded = !this.navbarExpanded;
  }
  viewCourses() {
    this.router.navigate([`/team`]);
  }

  scrollToElement(target: string, page: string = ''): void {
    this.router.navigate([`/${page}`]).then(() => {
      setTimeout(() => {
        this.scrollToService.scrollTo({
          target,
        });
      }, 0);
    });
  }
}
