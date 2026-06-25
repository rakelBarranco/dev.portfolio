import { Component } from '@angular/core';
import HeroComponent from '../hero/hero';
import {Projects} from '../projects/projects';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    Projects
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export default class HomeComponent {

}
