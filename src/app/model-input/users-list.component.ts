import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  template: `
    <ul>
      <li *ngFor="let user of usersFiltered">
        {{user}}
      </li>
    </ul>
  `,
  styles: [
    `
    
    `
  ]
})
export class UsersListComponent implements OnChanges {
  @Input() users!: string[];
  @Input() filterText!: string;
  usersFiltered: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    this.usersFiltered = [...this.users];

    if (this.filterText) {
      this.usersFiltered = this.users.filter(user => user.toLowerCase().includes(this.filterText.toLowerCase()));
    } else {
      this.usersFiltered = [...this.users]
    }
  }

}
