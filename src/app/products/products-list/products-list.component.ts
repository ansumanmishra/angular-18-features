import {ChangeDetectionStrategy, Component, computed, Input, input, OnChanges, SimpleChanges} from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  template: `
        <div *ngFor="let product of products">
          {{product.name}}
        </div>
<!--    <div *ngFor="let product of filteredProducts()">
      {{ product?.name }}
    </div>-->
  `,
  styles: [
    `
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsListComponent implements OnChanges {
  @Input() products: any[] = [];
  @Input() filterProductName: string = '';
  originalProducts: any[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['products']) {
      this.originalProducts = [...this.products];
    }

    if (changes['filterProductName']) {
      if (this.filterProductName) {
        this.products = this.originalProducts.filter(product => product.name.toLowerCase().includes(this.filterProductName.toLowerCase()));
      } else {
        this.products = [...this.originalProducts];
      }
    }
  }
}

/*
export class ProductsListComponent {
  products = input.required<{ name: string; price: number }[]>();
  filterProductName = input('', {transform: (value: string) => value.toLowerCase()});
  filteredProducts = computed(() => {
    return this.filterProductName ? this.products().filter(product => {
      return product.name.toLowerCase().includes(this.filterProductName())
    }) : this.products()
  });
}
*/
