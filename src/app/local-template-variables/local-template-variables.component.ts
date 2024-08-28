import {Component, signal} from '@angular/core';
import {products} from '../shared/products';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-local-template-variables',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './local-template-variables.component.html',
  styleUrl: './local-template-variables.component.scss'
})
export class LocalTemplateVariablesComponent {
  allProducts = signal<any>(products);
}
