import {ChangeDetectionStrategy, Component,} from '@angular/core';
import {BaseColorComponent} from './base-color.component';
import {TenComponent} from './ten.component';

@Component({
  selector: 'app-six',
  standalone: true,
  imports: [
    TenComponent
  ],
  template: `
    <span
      class="node-label"
      [style.background-color]="color"
      >6
    </span>
    <app-ten class="node" />
  `,
  styles: `
  `,
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class SixComponent extends BaseColorComponent {
}