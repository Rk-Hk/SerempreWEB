import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { IFeatures, IProduct, IWarrancyType } from 'src/app/shared/models/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  
  product: IProduct;
  imageSelected: string;
  currentTab = 0;
  warrantySelected: IWarrancyType;
  typeProductSelected: number;
  featureSelected: IFeatures;

  amountTotal = 0;

  constructor(private _productService: ProductsService) {}

  ngOnInit(): void {
    this.apiGetProductDetail();
  }

  public apiGetProductDetail = () => {
    this._productService.getProductoDetail().subscribe(
      (response: IProduct) => {
        this.product = response;
        this.imageSelected = this.product.images[0];
        this.amountTotal = this.product.price;
        console.log("PRODUCT DETAIL: ", response);
      },
      (error) => {
        console.log("Ocurrio un error llamando al servicio");
      }
    );
  };

  eventSelectImage = (imageUrl: string) => {
    this.imageSelected = imageUrl;
  };

  eventSelectTabs = (indexTab: number) => {
    this.currentTab = indexTab;
  };

  eventWarrancy = (warrancySelect: IWarrancyType) => {
    console.log("WARRANCY SELECT : ", warrancySelect);

    this.warrantySelected = warrancySelect;
    this.calculateAmountTotal();
  };

  eventTypeProduct = (indexTab: number) => {
    this.typeProductSelected = indexTab;
  };

  eventFeature = (featureSelect: IFeatures) => {
    this.featureSelected = featureSelect;
    this.calculateAmountTotal();
  };

  calculateAmountTotal = () => {
    const featurePrice : number =
      this.featureSelected && this.featureSelected.price
        ? parseFloat(this.featureSelected.price.toString())
        : 0;
    const warrantyPrice : number =
      this.warrantySelected && this.warrantySelected.price
        ? parseFloat(this.warrantySelected.price.toString())
        : 0;

    this.amountTotal =
      parseFloat(this.product.price.toString()) + featurePrice + warrantyPrice;
  };

}
