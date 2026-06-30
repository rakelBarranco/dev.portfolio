import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-animated-canvas',
  imports: [],
  templateUrl: './animated-canvas.html',
  styleUrl: './animated-canvas.scss',
})

export default class AnimatedCanvasComponent implements OnInit, OnDestroy {
  @Input() canvasId = 'animatedCanvas';

  private animFrame: any;

  ngOnInit() {
    setTimeout(() => this.animateCanvas(), 0);
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.animFrame);
  }

  private animateCanvas() {
    const canvas = document.getElementById(this.canvasId) as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const lines = 22;
    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < lines; i++) {
        const progress = i / lines;
        const alpha = 0.15 + progress * 0.5;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(167, 139, 250, ${alpha})`;
        ctx.lineWidth = 1;

        const startX = canvas.width * (0.3 + progress * 0.7);
        const startY = 0;
        const cp1x = canvas.width * (0.5 + Math.sin(t + progress) * 0.2);
        const cp1y = canvas.height * (0.3 + Math.cos(t * 0.7 + progress) * 0.1);
        const cp2x = canvas.width * (0.2 + Math.cos(t * 0.5 + progress * 2) * 0.3);
        const cp2y = canvas.height * (0.6 + Math.sin(t * 0.8 + progress) * 0.1);
        const endX = canvas.width * (0 + progress * 0.4);
        const endY = canvas.height;

        ctx.moveTo(startX, startY);
        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, endX, endY);
        ctx.stroke();
      }

      t += 0.014;
      this.animFrame = requestAnimationFrame(draw);
    };

    draw();
  }
}
