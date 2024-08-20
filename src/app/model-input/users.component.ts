import { Component } from '@angular/core';
import {UsersListComponent} from './users-list.component';
import {UsersFilterComponent} from './users-filter.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    UsersListComponent,
    UsersFilterComponent
  ],
  template: `
    <app-users-filter [filterText]="filterText" (filterTextChange)="filterText = $event" />
<!--
    <app-users-filter [(userNameFilterText)]="filterText"  />
-->

    <app-users-list [users]="users" [filterText]="filterText" />
  `,
  styles: [
    `
    
    `
  ]
})
export class UsersComponent {
  users = ['Ansuman', 'Tom', 'Pascal', 'Alain'];
  filterText = '';
}
