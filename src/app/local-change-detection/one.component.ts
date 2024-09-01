import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TwoComponent} from './two.component';
import {BaseColorComponent} from './base-color.component';
import {ThreeComponent} from './three.component';

@Component({
  selector: 'app-local-change-detection',
  standalone: true,
  imports: [
    TwoComponent,
    ThreeComponent
  ],
  template: `
    <div class="binary-tree">
      <div class="node">
    <span class="node-label root-label" [style.background-color]="color">
      1
    </span>
        <app-two class="node"/>
        <app-three class="node"/>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OneComponent extends BaseColorComponent {

}
