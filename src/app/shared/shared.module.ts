import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ItemInfoComponent } from './components/item-info/item-info.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, ItemInfoComponent],
  exports: [HeaderComponent, FooterComponent, ItemInfoComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
