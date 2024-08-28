import {Component, inject, Injector, OnInit, runInInjectionContext, Signal, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-rxjs-interop',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './rxjs-interop.component.html',
  styleUrl: './rxjs-interop.component.scss'
})
export class RxjsInteropComponent implements OnInit {
  http = inject(HttpClient);
  injector = inject(Injector);
  products: any = toSignal(this.http.get('https://fakestoreapi.com/products?limit=5'), {initialValue: []});
  // products: Signal<any> = signal(null);

  ngOnInit() {
    // this.products = toSignal(this.http.get('https://fakestoreapi.com/products?limit=5'), {initialValue: []});
  }

  ////////
  countSignal = signal<number>(0);
  obs$ = toObservable(this.countSignal);

  loadProducts() {
/*    runInInjectionContext(this.injector, () => {
      this.products = toSignal(this.http.get('https://fakestoreapi.com/products'), {initialValue: []});
    });*/
  }

  constructor() {
    this.obs$.subscribe(console.log)
  }

  increaseCount() {
    // this.countSignal.set(this.countSignal() + 1);
    this.countSignal.set(1);
    this.countSignal.set(2);
    this.countSignal.set(3);
  }
}
