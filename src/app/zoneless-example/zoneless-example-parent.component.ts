import {Component} from '@angular/core';
import {ZonelessExampleComponent} from './zoneless-example.component';

@Component({
  selector: 'app-zoneless-example-parent',
  standalone: true,
  imports: [
    ZonelessExampleComponent
  ],
  template: `
    <h1>Zoneless Example</h1>
    <div class="random-bg" [style.background-color]="getColor()"></div>
    <br>
    <br>
    <app-zoneless-example></app-zoneless-example>
  `,
  styles: [
    `
    .random-bg {
      width: 50px;
      height: 50px;
    }
    `
  ]
})
export class ZonelessExampleParentComponent {
  getColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`
  }
}