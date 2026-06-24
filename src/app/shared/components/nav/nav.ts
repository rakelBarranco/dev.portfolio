import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class NavComponent {

  links = [
    { label: 'proyectos', anchor: '#projects' },
    { label: 'sobre mí', anchor: '#about' },
    { label: 'contacto', anchor: '#contact' }
  ];

}
