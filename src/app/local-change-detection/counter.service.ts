import {Injectable, signal} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counter$ = new BehaviorSubject(0);
  private counterSignal = signal(0);

  constructor() { }

  increaseCounter() {
    // this.counter$.next(this.counter$.value + 1);
    this.counterSignal.set(this.counterSignal() + 1);
  }

  decreaseCounter() {
    // this.counter$.next(this.counter$.value - 1);
    this.counterSignal.set(this.counterSignal() - 1);
  }

  get counter() {
    // return this.counter$;
    return this.counterSignal;
  }
}
