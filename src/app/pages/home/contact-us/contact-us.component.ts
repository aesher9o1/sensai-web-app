import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
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
  topics = [
    {
      value: 'python',
      name: 'Python Programming',
    },
    {
      value: 'c-plus-plus',
      name: 'C++ Programming',
    },
    {
      value: 'IoT',
      name: 'Internet of Things',
    },
    {
      value: 'flutter',
      name: 'Mobile Application Development',
    },
    {
      value: 'solidworks',
      name: 'Solidworks',
    },
    {
      value: 'others',
      name: 'Others',
    },
  ];
  contactForm: FormGroup;
  message = {
    class: '',
    message: '',
  };

  fa = {
    mapMarker: faMapMarker,
    phone: faPhone,
    envelope: faEnvelope,
    facebook: faFacebook,
    twitter: faTwitter,
    instagram: faInstagram,
  };
  constructor(
    private formBuilder: FormBuilder,
    private db: AngularFireDatabase
  ) {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      phone: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      topic: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: [''],
    });
  }

  submitForm() {
    console.log('Function');
    if (!this.contactForm.valid) {
      this.message = {
        class: 'error',
        message: 'Please check the details',
      };
      return;
    }
    const currentTime = new Date().getTime();
    this.db
      .object(currentTime.toString())
      .set(this.contactForm.value)
      .then((res) => {
        this.message = {
          class: 'success',
          message: 'We have sucessfully received your input!',
        };
      });
    this.contactForm.reset();
    setTimeout(() => {
      this.message = {
        class: '',
        message: '',
      };
    }, 4000);
  }
  ngOnInit(): void {}
}
