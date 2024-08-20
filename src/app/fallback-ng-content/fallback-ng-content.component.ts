import { Component } from '@angular/core';
import {HelloUserComponent} from './hello-user.component';

@Component({
  selector: 'app-fallback-ng-content',
  standalone: true,
  imports: [
    HelloUserComponent
  ],
  template: `
    <app-hello-user>User</app-hello-user> <br><br>
    <app-hello-user />
  `,
})
export class FallbackNgContentComponent {

}
