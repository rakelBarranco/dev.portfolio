import {Component, OnDestroy, OnInit} from '@angular/core';
import AnimatedCanvasComponent from '../../shared/components/animated-canvas/animated-canvas';

@Component({
  selector: 'app-hero',
  imports: [
    AnimatedCanvasComponent
  ],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export default class HeroComponent implements OnInit, OnDestroy {
  typedText = '';
  private fullText = 'ng generate component portfolio';
  private index = 0;
  private interval: ReturnType<typeof setInterval> | undefined;

  ngOnInit() {
    this.interval = setInterval(() => {
      if (this.index < this.fullText.length) {
        this.typedText += this.fullText[this.index];
        this.index++;
      } else {
        clearInterval(this.interval);
      }
    }, 60);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
