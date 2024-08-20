import { Component } from '@angular/core';
import {ProductsListComponent} from './products-list/products-list.component';
import {FormsModule} from '@angular/forms';

const products = [
  {
    id: 1,
    name: 'Mobile',
    price: 123,
  },
  {
    id: 2,
    name: 'Washing Machine',
    price: 456,
  },
  {
    id: 3,
    name: 'Air Conditioner',
    price: 789,
  },
];

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    ProductsListComponent,
    FormsModule
  ],
  template: `
    <h2>Products</h2>
    <input type="text" [(ngModel)]="filterProductName">
    <app-products-list [products]="products" [filterProductName]="filterProductName"></app-products-list>
  `,
  styles: [
    `
    `
  ]
})
export class ProductsComponent {
  products = products;
  filterProductName = '';
}
