import { Component, OnInit } from "@angular/core";
import { ProductsService } from "./services/products.service";
import {
  IFeatures,
  IProduct,
  IWarrancyType,
} from "./shared/models/product.interface";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "serempreWEB";
}
