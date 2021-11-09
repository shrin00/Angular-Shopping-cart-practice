import { Injectable } from '@angular/core';
import { Products } from './Products';

@Injectable({
  providedIn: 'root'
})
export class ProductlistService {
  private productList: Array<Products>;
  
  constructor() {
    this.productList = new Array<Products>();
    let product1 = new Products(101, 'Iphone', 20300, 'it is best available Phone in the market');
    let product2 = new Products(102, 'MI', 11111, 'it is best available Phone in the market');
    let product4 = new Products(104, 'Samsung', 15300, '');
    let product5 = new Products(105, 'Google', 25300, 'it is best available Phone in the market');
    this.productList.push(product1);
    this.productList.push(product2);
    this.productList.push(product4);
    this.productList.push(product5);
  }

  get getProducts(){
    return this.productList
  }
}
