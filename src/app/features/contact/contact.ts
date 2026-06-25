import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {

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
}
