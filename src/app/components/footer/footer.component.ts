import { Component, OnInit } from '@angular/core';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor() {}
  fa = {
    faFacebook: faFacebook,
    faTwitter: faTwitter,
    faInstagram: faInstagram,
  };

  ngOnInit(): void {}
}
