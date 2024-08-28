import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, signal,} from '@angular/core';
import {BaseColorComponent} from './base-color.component';
import {BehaviorSubject} from 'rxjs';
import {FourComponent} from './four.component';
import {FiveComponent} from './five.component';

@Component({
  selector: 'app-two',
  standalone: true,
  imports: [AsyncPipe, FourComponent, FiveComponent],
  template: `
    <span
      class="node-label"
      [style.background-color]="color"
      >2 
    </span>
    <app-four class="node" />
    <app-five class="node" />
  `,
  styles: `
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TwoComponent extends BaseColorComponent {

}