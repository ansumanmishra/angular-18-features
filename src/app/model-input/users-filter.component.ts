import {Component, computed, EventEmitter, Input, model, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-users-filter',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  template: `
    <input type="text" [(ngModel)]="filterText" (ngModelChange)="filterTextChange.emit(filterText)" />
<!--    <input type="text" [(ngModel)]="filterText" />
    <span *ngIf="filterText()">{{filterTextMessage()}}</span>-->
  `,
  styles: [
    `
    
    `
  ]
})
export class UsersFilterComponent {
  @Input() filterText = '';
  @Output() filterTextChange = new EventEmitter<string>();

/*  filterText = model('', {
    alias: 'userNameFilterText',
  });

  filterTextMessage = computed(() => {
    return `The filter text is - ${this.filterText()}`
  });*/
}
