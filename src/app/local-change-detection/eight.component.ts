import {ChangeDetectionStrategy, Component,} from '@angular/core';
import {BaseColorComponent} from './base-color.component';

@Component({
  selector: 'app-eight',
  standalone: true,
  imports: [],
  template: `
    <span
      class="node-label"
      [style.background-color]="color"
      >8
    </span>
  `,
  styles: `
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EightComponent extends BaseColorComponent {
}