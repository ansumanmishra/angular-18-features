import {Component, signal} from '@angular/core';
import {NgForOf} from '@angular/common';

interface Product {
  productId: number;
  name: string;
  price: number;
}

const products: Product[] = [
  {
    productId: 1,
    name: 'Mobile',
    price: 123,
  },
  {
    productId: 2,
    name: 'Washing Machine',
    price: 456,
  },
  {
    productId: 3,
    name: 'Air Conditioner',
    price: 789,
  },
];

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [
    NgForOf
  ],
  template: `
    <h2>Control Flow</h2>
    <h3>Old implementation</h3>

    <ul>
      <li *ngFor="let product of products;">{{product.name}}</li>
    </ul>
    <!--trackBy: trackByProductId-->
    <br><br>
    
    <h3>With new control flow</h3>
    @if(products) {
      <ul>
      @for(product of products; track product.productId) {
        <li>
          {{product.name}}
        </li>
      } @empty {
        <li> There are no products.</li>
      }
      </ul>
    } @else {
      <div>Products not loaded yet </div>
    } 
    
    <hr>
    <button (click)="updateProduct()">Update Product</button>
    
<!--    <hr>
    <h4>Switch Case</h4>
    @switch (number()) {
      @case (5) {
        <span>{{number()}} Positive number</span>
      }
      @case (-5) {
        <span>{{number()}} Negative number</span>
      }
      @default {
        <span> Default</span>
      }
    }-->
  `,
  styles: [
    `
    `
  ]
})
export class ControlFlowComponent {
  products = products;
  number = signal(5);

  /*  trackByProductId(index: number, product: any) {
      return product.productId;
    }*/

  updateProduct() {
    this.products = [
      {
        productId: 1,
        name: 'Laptop',
        price: 123,
      },
      {
        productId: 2,
        name: 'Washing Machine',
        price: 456,
      },
      {
        productId: 3,
        name: 'Air Conditioner',
        price: 789,
      },
    ];
  }

}
