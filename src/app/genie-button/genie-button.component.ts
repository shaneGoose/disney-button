import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-genie-button',
  templateUrl: './genie-button.component.html',
  styleUrls: ['./genie-button.component.css'],
})
export class GenieButtonComponent implements OnInit, OnDestroy {
  toAnimate = false;
  isAnimating = false;

  @HostListener('mouseenter')
  onMouseEnter() {
    if (!this.isAnimating) {
      console.log("Entered area");
      this.toAnimate = true;
      this.testAnimation();
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.toAnimate = false;
  }

  // In px, sprite sheet is 3x4
  private readonly spriteSheet = { width: 1080, height: 1268 };
  private readonly sprite = { width: 360, height: 317 };
  private readonly speed = 150;
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
    this.position = GENIE_POS.HIDE.valueOf();
  }

  ngOnDestroy(): void {
    if (this.animationInterval) {
      clearInterval(this.animationInterval);
    }
  }

  private testAnimation() {
    this.isAnimating = true;

    this.animationInterval = setInterval(() => {
      console.log(`Position: ${this.position}`);
      const x = this.GENIE[this.position].x * this.sprite.width;
      const y = this.GENIE[this.position].y * this.sprite.height;
      this.spriteContainer.style.backgroundPosition = `-${x}px -${y}px`;

      this.position = (this.position + 1) % this.GENIE.length;

      // Exit animation if left
      if (!this.toAnimate && this.position === GENIE_POS.HIDE.valueOf() + 1) {
        if (this.animationInterval) clearInterval(this.animationInterval);
        this.isAnimating = false;
      }
      // TEST
      else if (this.position === GENIE_POS.HIDE.valueOf() + 1) {
        clearInterval(this.animationInterval);
        setTimeout(() => {
          this.testAnimation();
        }, 3_000);
      }
    }, this.speed);
  }

  // Intent is to have the Genie Rise and stay
  private rise() {
    // this.animationInterval = setInterval(() => {
    //   const x = this.GENIE[this.position].x * this.sprite.width;
    //   const y = this.GENIE[this.position].y * this.sprite.height;
    //   this.spriteContainer.style.backgroundPosition = `-${x}px -${y}px`;
    //   this.position = (this.position + 1) % this.GENIE.length;

    //   if ((this.position = GENIE_POS.RAISE_BROWS.valueOf())) {
    //     this.animationInterval = clearInterval(this.animationInterval);
    //     --this.position;
    //   }
    // }, this.speed);
  }

  // Intent is to have the Genie shrug eyebrows while user is hovering
  private shrugEyes() {}

  // Intent is to have the Genie lower when the user's mouse leaves the area
  private lower() {}
}

enum GENIE_POS {
  HIDE,
  UP0,
  UP1,
  UP2,
  UP3,
  UP4,
  PEAK,
  RAISE_BROWS,
  DOWN0,
  DOWN1,
  DOWN2,
  DOWN3,
}
