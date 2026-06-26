import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {

  name = '';
  email = '';
  message = '';
  sending = false;
  sent = false;
  error = false;

  links = [
    {
      label: 'GitHub',
      url: 'https://github.com/rakelBarranco',
      tag: '@rakelBarranco'
    },
    {
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/raquel-barranco',
      tag: 'raquel-barranco'
    },
    {
      label: 'Email',
      url: 'mailto:raquelbarranco02@gmail.com',
      tag: 'raquelbarranco02@gmail.com'
    }
  ];

  async sendEmail() {
    if (!this.name || !this.email || !this.message) return;

    this.sending = true;
    this.error = false;

    try {
      await emailjs.send(
        'service_c6pwbkd',
        'template_bgz8woi',
        {
          from_name: this.name,
          from_email: this.email,
          message: this.message
        },
        'k4dvprHjT95McH4dx'
      );
      this.sent = true;
      this.name = '';
      this.email = '';
      this.message = '';
    } catch {
      this.error = true;
    } finally {
      this.sending = false;
    }
  }

}
