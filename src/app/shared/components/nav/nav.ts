import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [
    RouterLink
  ],
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class NavComponent {
  menuOpen = false;

  links = [
    { label: 'proyectos', anchor: '#projects' },
    { label: 'sobre mí', anchor: '#about' },
    { label: 'contacto', anchor: '#contact' }
  ];

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
