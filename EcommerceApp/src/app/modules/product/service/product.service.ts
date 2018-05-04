import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  Products = [
{id: '1', productname: 'Camera' , productDescription: 'This is used to take photos', productPrice: '20$' },
{id: '2', productname: 'Phone' , productDescription: 'This is used to call people and take photos wohoo', productPrice: '40$' },
{id: '3', productname: 'Laptop' , productDescription: 'This is used to call people and take photos and develop your applications'
, productPrice: '60$' }
  ];

  constructor() { }

  getProducts() {
    return this.Products;
  }

}
