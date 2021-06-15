import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor( private _httpService: HttpClient) { }


  apiGetPhotos = (index: number) : Observable<any> => {
    let url = `https://jsonplaceholder.typicode.com/photos?_page=${index}&_limit=5`;

    return this._httpService.get<any>(url);
  }
}
