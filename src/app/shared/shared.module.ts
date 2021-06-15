import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ItemInfoComponent } from "./components/item-info/item-info.component";
import { LoaderComponent } from "./components/loader/loader.component";
import { PhotoComponent } from './components/photo/photo.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, ItemInfoComponent, LoaderComponent, PhotoComponent],
  exports: [HeaderComponent, FooterComponent, ItemInfoComponent, LoaderComponent, PhotoComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
