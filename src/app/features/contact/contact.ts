import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export default class ContactComponent {
  sending = false;
  sent = false;
  error = false;

  contactForm: FormGroup;

  links = [
    {
      label: 'GitHub',
      url: 'https://github.com/rakelBarranco',
      tag: '@rakelBarranco'
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/raquel-barrval-70a9361b5',
      tag: 'raquel-barranco'
    },
    {
      label: 'Email',
      url: 'mailto:raquelbarranco02@gmail.com',
      tag: 'raquelbarranco02@gmail.com'
    }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }

  async sendEmail() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.sending = true;
    this.error = false;

    try {
      await emailjs.send(
        'service_c6pwbkd',
        'template_bgz8woi',
        {
          from_name: this.name?.value,
          from_email: this.email?.value,
          message: this.message?.value
        },
        'k4dvprHjT95McH4dx'
      );
      this.sent = true;
      this.contactForm.reset();
    } catch {
      this.error = true;
    } finally {
      this.sending = false;
    }
  }
}
