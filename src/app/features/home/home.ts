import { Component } from '@angular/core';
import HeroComponent from '../hero/hero';
import {Projects} from '../projects/projects';
import {AboutComponent} from '../about/about';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    Projects,
    AboutComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export default class HomeComponent {

}
