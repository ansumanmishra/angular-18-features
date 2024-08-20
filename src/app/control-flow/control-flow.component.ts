import {Component, signal} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';

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
    NgForOf,
    NgIf
  ],
  template: `
    <h2>Control Flow</h2>
    <h3>Old implementation</h3>

    <ng-container *ngIf="products; else productsNotLoadedBlock">
      <ng-container *ngIf="products.length; else noProductsBlock">
        <ul>
          <li *ngFor="let product of products;">{{product.name}}</li>
        </ul>
      </ng-container>
      <ng-template #noProductsBlock>
        <div>There are no products. </div>
      </ng-template>
      <!--trackBy: trackByProductId-->
      <br>
    </ng-container>
    <ng-template #productsNotLoadedBlock>
      <div>Products not loaded yet </div>
    </ng-template>
    
    <h3>With new control flow</h3>
    @if(products) {
      <ul>
      @for(product of products; track product.productId) {
        <li>{{product.name}}</li>
      } @empty {
        <div> There are no products.</div>
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
  products: Product[] | null = products;
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
