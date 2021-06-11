import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { IProduct } from './shared/models/product.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'serempreWEB';
  product: IProduct;
  imageSelected: string;
  currentTab: number=0;
  warrantySelected: number;
  typeProductSelected: number;
  featureSelected: number;
  

  constructor( private _productService: ProductsService) {}

  ngOnInit(): void {
    this.apiGetProductDetail();
  }

  public apiGetProductDetail = () => {
    this._productService.getProductoDetail().subscribe(
      (response: IProduct) => {
        this.product = response;
        this.imageSelected = this.product.images[0];
        console.log("PRODUCT DETAIL: ", response);
        
      },
      (error) => {console.log("Ocurrio un error llamando al servicio")}
    )
  }

  eventSelectImage = (imageUrl: string) => {
    this.imageSelected= imageUrl;
  }

  eventSelectTabs = (indexTab: number) => {
    this.currentTab=indexTab
  } 
  eventWarrancy = (indexTab: number) => {
    this.warrantySelected=indexTab
  } 
  eventTypeProduct = (indexTab: number) => {
    this.typeProductSelected=indexTab
  } 
  eventFeature = (indexTab: number) => {
    this.featureSelected=indexTab
  } 


}
