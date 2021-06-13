import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IProduct } from "../shared/models/product.interface";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  constructor(private _http: HttpClient) {}

  public getProductoDetail = (): Observable<IProduct> => {
    let endpointProductDetail = 'v1/products';
    return this._http
      .get<IProduct>(`${environment.BASE_URL}${endpointProductDetail}`)
      .pipe();
  };
}
