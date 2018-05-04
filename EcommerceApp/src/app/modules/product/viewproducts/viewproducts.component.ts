import { Component, OnInit } from '@angular/core';
import {ProductService} from '../service/product.service';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit {

  Products = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.Products = this.productService.getProducts();
  }

}
