import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop.routing';
import { ProductComponent } from './product/product.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule
  ]
})
export class ShopModule { }
