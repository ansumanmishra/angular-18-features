import {ChangeDetectionStrategy, Component,} from '@angular/core';
import {BaseColorComponent} from './base-color.component';
import {NineComponent} from './nine.component';

@Component({
  selector: 'app-five',
  standalone: true,
  imports: [
    NineComponent
  ],
  template: `
    <span
      class="node-label"
      [style.background-color]="color"
      >5
    </span>
    <app-nine class="node" />
  `,
  styles: `
  `,
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiveComponent extends BaseColorComponent {
}