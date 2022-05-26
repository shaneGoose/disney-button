import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-genie-button',
  templateUrl: './genie-button.component.html',
  styleUrls: ['./genie-button.component.css'],
})
export class GenieButtonComponent implements OnInit, OnDestroy {
  // In px, sprite sheet is 3x4
  private readonly spriteSheet = { width: 1080, height: 1268 };
  private readonly sprite = { width: 360, height: 317 };
  private readonly GENIE = [
    { y: 0, x: 0 },
    { y: 0, x: 1 },
    { y: 0, x: 2 },
    { y: 1, x: 0 },
    { y: 1, x: 1 },
    { y: 1, x: 2 },
    { y: 2, x: 0 },
    { y: 2, x: 1 },
    { y: 2, x: 2 },
    { y: 3, x: 0 },
    { y: 3, x: 1 },
    { y: 3, x: 2 },
  ];

  private spriteContainer;
  private animationInterval;
  private position;

  constructor() {}

  ngOnInit() {
    this.spriteContainer = document.getElementById('genie-sprite');

    this.testAnimation();
  }

  ngOnDestroy(): void {
    if (this.animationInterval) clearInterval(this.animationInterval);
  }

  private testAnimation() {
    const speed = 100;
    this.position = 0;

    this.animationInterval = setInterval(() => {
      const x = this.GENIE[this.position].x * this.sprite.width;
      const y = this.GENIE[this.position].y * this.sprite.height;
      this.spriteContainer.style.backgroundPosition = `-${x}px -${y}px`;

      this.position = (this.position + 1) % this.GENIE.length;
    }, speed);
  }
}

enum GENIE_POS {
  UP0,
  UP1,
  UP2,
  UP3,
  UP4,
  UP5,
  PEAK,
  RAISE_BROW,
  DOWN0,
  DOWN1,
  DOWN2,
  DOWN3,
}
