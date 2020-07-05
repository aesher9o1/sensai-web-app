import { Component, OnInit } from '@angular/core';
import {
  faMapMarker,
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  fa = {
    mapMarker: faMapMarker,
    phone: faPhone,
    envelope: faEnvelope,
    facebook: faFacebook,
    twitter: faTwitter,
    instagram: faInstagram,
  };
  constructor() {}

  ngOnInit(): void {}
}
