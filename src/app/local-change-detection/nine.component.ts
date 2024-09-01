import {ChangeDetectionStrategy, Component,} from '@angular/core';
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
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class NineComponent extends BaseColorComponent {
}