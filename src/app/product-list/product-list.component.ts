import { Component, OnInit } from '@angular/core';
import { ProductlistService } from '../productlist.service';
import { Products } from '../Products';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Array<Products> = [];

  constructor(private products: ProductlistService) { }

  ngOnInit(): void {
    this.productList = this.products.getProducts;
  }

  share(){
    window.alert('Product Has been shared!! Thank you for sharing..');
  }

  onNotify(){
    window.alert('You will be notified when Product is on sale........');
  }

}
