import {ChangeDetectionStrategy, Component,} from '@angular/core';
import {BaseColorComponent} from './base-color.component';

@Component({
  selector: 'app-ten',
  standalone: true,
  imports: [

  ],
  template: `
    <span
      class="node-label"
      [style.background-color]="color"
      >10
    </span>
  `,
  styles: `
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TenComponent extends BaseColorComponent {
}