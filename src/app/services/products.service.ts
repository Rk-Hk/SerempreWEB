import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IProduct } from '../shared/models/product.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private _http: HttpClient) { }

  public getProductoDetail  = () : Observable<IProduct> => {
    return this._http.get<IProduct>('../../assets/mock/product.mock.json').pipe();
  }
}
