import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GaleryComponent } from './galery/galery.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  {path: '', component: ProductComponent},
  {path: 'galery', component: GaleryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
