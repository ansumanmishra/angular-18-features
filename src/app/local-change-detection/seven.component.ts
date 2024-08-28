import {Component, OnInit,} from '@angular/core';
import {BaseColorComponent} from './base-color.component';
import {ElevenComponent} from './eleven.component';

@Component({
  selector: 'app-seven',
  standalone: true,
  imports: [
    ElevenComponent
  ],
  template: `
    <span
      class="node-label"
      [style.background-color]="color"
      >7
    </span>
    {{getNumber()}}
    <app-eleven class="node" />
  `,
  styles: `
  `,
})
export class SevenComponent extends BaseColorComponent implements OnInit {
  getNumber() {
    // Get a random number
    console.log(Math.floor(Math.random() * 100))
  }

  ngOnInit() {
    console.log('hi')
  }
}