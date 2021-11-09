import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems();
  
  checkOutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(private cartService: CartService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
  }

  onSubmit(){
    this.items = this.cartService.clearCart();
    window.alert("Your Order as been Submitted!! Thank You.. " + this.checkOutForm.value);
    this.checkOutForm.reset();
  }

}
