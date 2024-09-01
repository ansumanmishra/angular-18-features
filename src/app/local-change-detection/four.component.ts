import {ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, inject, signal,} from '@angular/core';
import {BaseColorComponent} from './base-color.component';
import {AsyncPipe} from '@angular/common';
import {BehaviorSubject, fromEvent} from 'rxjs';
import {EightComponent} from './eight.component';
import {CounterService} from './counter.service';

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
    >4- {{counter}}
    </span>

<!--    <span
      class="node-label"
      [style.background-color]="color"
    >4- {{counter$ | async}}
    </span>-->
    
<!--    <span
      class="node-label"
      [style.background-color]="color"
      >4- {{counterSignal()}}
    </span>-->

<!--    <span
      class="node-label"
      [style.background-color]="color"
      (click)="incrementCounter()"
    >4- {{counterSignal()}}
    </span>-->

<!--    <span
      class="node-label"
      [style.background-color]="color"
      (click)="counterService.increaseCounter()"
    >4- {{counterService.counter | async}}
    </span>-->

<!--  <span
    class="node-label"
    [style.background-color]="color"
  >4- {{counterService.counter | async}}
      </span>-->

<!--<span
  class="node-label"
  [style.background-color]="color"
>4- {{counterService.counter()}}
      </span>-->

    <app-eight class="node" />
  `,
  styles: `
  `,
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class FourComponent extends BaseColorComponent {
  counter = 0;
  counter$ = new BehaviorSubject(0);
  counterSignal = signal(0);
  counterService = inject(CounterService);
  host = inject(ElementRef);

  constructor() {
    super();

/*    fromEvent(this.host.nativeElement, 'click').subscribe( _ => {
      this.counterService.increaseCounter()
    });*/

    setInterval( () => {
      this.counter = this.counter + 1;
      // this.counter$.next(this.counter$.value + 1);
      // this.counterSignal.set(this.counterSignal() + 1);
    }, 1000);
  }

  incrementCounter() {
    // this.counterSignal.set(this.counterSignal() + 1);
  }
}