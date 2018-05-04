import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {

  Products = [
{id: '1', productname: 'Camera' , productDescription: 'This is used to take photos', productPrice: '20$' },
{id: '2', productname: 'Phone' , productDescription: 'This is used to call people and take photos wohoo', productPrice: '40$' },
{id: '3', productname: 'Laptop' , productDescription: 'This is used to call people and take photos and develop your applications'
, productPrice: '60$' }
  ];

  constructor(private httpclient: HttpClient) { }

  getProducts(): Observable<any[]> | any | boolean {

    const allProducts = this.httpclient.get('https://products-967f5.firebaseio.com/.json',{
      observe: 'body',
      responseType: 'json'
  });
    return allProducts;
  }

}
