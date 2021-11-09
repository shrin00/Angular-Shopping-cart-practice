import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { ProductlistService } from '../productlist.service';
import { Products } from '../Products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product!: Products;

  constructor(private route: ActivatedRoute, private products: ProductlistService, 
    private cartService: CartService) { }

  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    for(let p of this.products.getProducts ){
        if(p.id === productIdFromRoute){
          this.product = p;
        }
    }
   
  }

  addToCart(productItem: Products){
    this.cartService.addToCart(productItem);
    window.alert('Product As been Added to Cart!! Thank You...');
  }

}
