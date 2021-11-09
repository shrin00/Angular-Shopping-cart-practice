import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductlistService } from './productlist.service';
import { Products } from './Products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Products[] = []; 

  constructor(private product: ProductlistService, private http: HttpClient) { }

  addToCart(product: Products){
    this.items.push(product);
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }

  getShippingPrice(){
    return this.http.get<{type:string, price:number}[]>('/assets/shipping.json');
  }

}