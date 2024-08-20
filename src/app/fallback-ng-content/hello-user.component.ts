import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-user',
  standalone: true,
  imports: [],
  template: `
    <ng-content>Hello </ng-content>
    
  `,
})
export class HelloUserComponent {

}
