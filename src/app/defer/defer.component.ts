import {Component, ViewChild, ViewContainerRef} from '@angular/core';
import {NewsComponent} from './news/news.component';

@Component({
  selector: 'app-defer',
  standalone: true,
  imports: [
    NewsComponent
  ],
  template: `
    <h2>Deferrable Views</h2>
    <h3>Old way of loading dynamic component</h3>
    <button (click)="loadDynamicComponent()">Show News</button>
    <ng-container #container></ng-container>

    <hr>
    <h3>Using Defer</h3>
    <a href="https://angular.dev/guide/defer" target="_blank">Link for the documentation</a> <br><br>
    <button (click)="showNews = true">Show News</button>
    <div>
      @defer (when showNews) {
        <app-news/>
      }
    </div>
  `,
})
export class DeferComponent {
  showNews = false;
  @ViewChild('container', {read: ViewContainerRef, static: true}) container!: ViewContainerRef;

  async loadDynamicComponent() {
    const {NewsComponent} = await import('./news/news.component');
    this.container.createComponent(NewsComponent);
  }
}
