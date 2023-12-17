import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  name: string = 'venky';
  // price: number = 999;
  // color: string = 'red';
  // discount: number = 8.5;
  // inStock: number = 5;

  product = {
    name: 'iphone 13',
    price: 999,
    color: 'red',
    discount: 8.5,
    inStock: 10,
    pimage: '/assets/images/one.jpeg',
  };

  getDiscountItems() {
    this.product.price - (this.product.price * this.product.discount) / 100;
  }
}
