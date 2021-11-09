import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Products } from '../Products';


@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  @Input() product!:Products;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
