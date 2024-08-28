import {Component, } from '@angular/core';
import {BaseColorComponent} from './base-color.component';

@Component({
  selector: 'app-nine',
  standalone: true,
  imports: [],
  template: `
    <span
      class="node-label"
      [style.background-color]="color"
      >9
    </span>
  `,
  styles: `
  `,
})
export class NineComponent extends BaseColorComponent {
}