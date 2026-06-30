import { Component } from '@angular/core';
import HeroComponent from '../hero/hero';
import {Projects} from '../projects/projects';
import AboutComponent from '../about/about';
import ContactComponent from '../contact/contact';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    Projects,
    AboutComponent,
    ContactComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export default class HomeComponent {

}
