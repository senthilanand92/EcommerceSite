import { Component, OnInit } from '@angular/core';
import {ProductService} from '../service/product.service';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit {

  products = [];

  moreProducts = [
    { productname: 'Camera4' , productDescription: 'This is used to take photos', productPrice: '20$' },
    { productname: 'Phone4' , productDescription: 'This is used to call people and take photos wohoo', productPrice: '40$' },
    { productname: 'Laptop4' , productDescription: 'This is used to call people and take photos and develop your applications'
    , productPrice: '60$' }
  ];


  constructor(private productService: ProductService) { }

  ngOnInit() {
      this.productService.getProducts().subscribe(
      (data: any[]) => {
        console.log(data)
        this.products = data;
      }
      );
    }

    addProduct() {
      alert("adding product");
      let tempProducts = [];
      tempProducts.push(...this.products);
      tempProducts.push(...this.moreProducts);
      console.log(tempProducts)
      this.productService.addProducts(tempProducts).subscribe(
        (data) => console.log(data),
        (error) => console.log(error)
      );
    }  
}
