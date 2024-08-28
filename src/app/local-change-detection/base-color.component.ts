import { Component } from '@angular/core';

@Component({
  selector: 'app-base-node',
  standalone: true,
  template: ``,
})
export class BaseColorComponent {
  get color() {
    return this.randomColor();
  }

  randomColor() {
    // Get a random color
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`
  }
}