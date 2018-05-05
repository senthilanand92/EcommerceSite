import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {

  
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
    this.httpclient.delete('https://products-967f5.firebaseio.com/1.json');
    return this.httpclient.request(req);
  }

}
