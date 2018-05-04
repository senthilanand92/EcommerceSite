import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {

  Products = [
    { productname: 'Camera1' , productDescription: 'This is used to take photos', productPrice: '20$' },
    { productname: 'Phone1' , productDescription: 'This is used to call people and take photos wohoo', productPrice: '40$' },
    { productname: 'Laptop1' , productDescription: 'This is used to call people and take photos and develop your applications'
    , productPrice: '60$' }
  ];

  constructor(private httpclient: HttpClient) { }

  getProducts(): Observable<any[]> | any | boolean {

    const allProducts = this.httpclient.get('https://products-967f5.firebaseio.com/.json', {
      observe: 'body',
      responseType: 'json'
  });

 return allProducts;
  }

  addProducts(products: any[]) {
    const req = new HttpRequest('PUT', 'https://products-967f5.firebaseio.com/.json', products, {reportProgress: true});
    return this.httpclient.request(req);
  }

}
