import {ChangeDetectionStrategy, Component, signal,} from '@angular/core';
import {BaseColorComponent} from './base-color.component';
import {AsyncPipe} from '@angular/common';
import {BehaviorSubject} from 'rxjs';
import {EightComponent} from './eight.component';

@Component({
  selector: 'app-four',
  standalone: true,
  imports: [
    AsyncPipe,
    EightComponent
  ],
  template: `
    <span
      class="node-label"
      [style.background-color]="color"
      >4- {{counter$ | async}}
    </span>
    <app-eight class="node" />
  `,
  styles: `
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FourComponent extends BaseColorComponent {
  counter$ = new BehaviorSubject(0);
  counter = signal(10);

  constructor() {
    super();

    setInterval( () => {
      //this.counter.set(this.counter() - 1);
      this.counter$.next(this.counter$.value + 1);
    }, 1000);
  }
}