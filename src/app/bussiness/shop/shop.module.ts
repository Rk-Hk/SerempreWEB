import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop.routing';
import { ProductComponent } from './product/product.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GaleryComponent } from './galery/galery.component';


@NgModule({
  declarations: [ProductComponent, GaleryComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule
  ]
})
export class ShopModule { }
