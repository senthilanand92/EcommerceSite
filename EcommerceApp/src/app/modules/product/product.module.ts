import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';
import {RouterModule} from '@angular/router';
import {ProductService} from '../product/service/product.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path : 'viewProducts' , component: ViewproductsComponent}]
    ),
    HttpClientModule,
  ],
  declarations: [ViewproductsComponent],
  providers: [ProductService],
})
export class ProductModule { }
