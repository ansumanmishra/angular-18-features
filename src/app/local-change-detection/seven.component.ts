import {ChangeDetectionStrategy, Component, inject,} from '@angular/core';
import {BaseColorComponent} from './base-color.component';
import {ElevenComponent} from './eleven.component';
import {CounterService} from './counter.service';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-seven',
  standalone: true,
  imports: [
    ElevenComponent,
    AsyncPipe
  ],
  template: `
    <span
      class="node-label"
      [style.background-color]="color"
      >7 - {{counterService.counter() }}
    </span>
    <app-eleven class="node" />
  `,
  styles: `
  `,
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class SevenComponent extends BaseColorComponent {
  counterService = inject(CounterService);
}