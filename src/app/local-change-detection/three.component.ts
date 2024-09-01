import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BaseColorComponent} from './base-color.component';
import {SixComponent} from './six.component';
import {SevenComponent} from './seven.component';

@Component({
  selector: 'app-three',
  standalone: true,
  imports: [AsyncPipe, SixComponent, SevenComponent],
  template: `
    <span
      class="node-label"
      [style.background-color]="color"
      >3
    </span>
    <app-six class="node" />
    <app-seven class="node" />
  `,
  styles: `
  `,
 // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThreeComponent extends BaseColorComponent {

}