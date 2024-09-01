import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit, signal} from '@angular/core';

@Component({
  selector: 'app-zoneless-example',
  standalone: true,
  imports: [],
  template: `
    Count: {{ count }} <br>
 <!--   Count Signal: {{countSignal()}} <br>-->
    <button (click)="increaseCount()">Increase Count</button>

    <div class="code" style="margin-top: 50px">
      Benefits: <br>
      <ul>
        <li>Improving composability for micro-frontends and interoperability with other frameworks</li>
        <li>Faster initial render and runtime</li>
        <li>Smaller bundle size and faster page loads</li>
        <li>More readable stack traces</li>
        <li>Simpler debugging</li>
      </ul>
    </div>
  `,

})
export class ZonelessExampleComponent implements OnInit {
  count = 1;
  countSignal = signal(0);
  cd = inject(ChangeDetectorRef);

  ngOnInit(): void {
    setInterval( () => {
      this.count = this.count + 1;
      /*this.countSignal.set(this.countSignal() + 1);*/
      // this.cd.detectChanges();
    }, 1000)
  }

  increaseCount() {
    // this.count = this.count + 1;
    // this.countSignal.set(this.count + 1);
    // this.cd.detectChanges();
  }
}
