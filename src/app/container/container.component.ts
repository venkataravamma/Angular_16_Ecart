import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent {
  // listOfString: string[] = ['venky', 'nag', 'sujiki', 'veekshit', 'kumari'];
  addToCart = 0;
  name = 'venky';
  searchText: string = '';
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
    pimage: '/assets/images/iphone.png',
  };

  getDiscountItems() {
    return (
      this.product.price - (this.product.price * this.product.discount) / 100
    );
  }

  decrementCartValue() {
    if (this.addToCart > 0) {
      this.addToCart--;
    }
  }
  incrementCartValue() {
    if (this.addToCart < this.product.inStock) {
      this.addToCart++;
    }
  }
  onNameChange(event: any) {
    this.name = event?.target.value;
  }

  setSearchText(value: string) {
    this.searchText = value;
  }
}
