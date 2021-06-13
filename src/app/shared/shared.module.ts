import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ItemInfoComponent } from "./components/item-info/item-info.component";
import { LoaderComponent } from "./components/loader/loader.component";



@NgModule({
  declarations: [HeaderComponent, FooterComponent, ItemInfoComponent, LoaderComponent],
  exports: [HeaderComponent, FooterComponent, ItemInfoComponent, LoaderComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
