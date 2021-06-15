import { Component, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/services/photos.service';
import { IPhoto } from 'src/app/shared/models/photo.interface';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss']
})
export class GaleryComponent implements OnInit {

  indexPage:number =  1;
  listPhotos: Array<IPhoto>

  constructor(private _photosService: PhotosService) { }

  ngOnInit() {
    this.getAllPhotos(this.indexPage);
  }

  prevPhotos = () => {
    if(this.indexPage>1) {
      this.indexPage -= 1;
      this.getAllPhotos(this.indexPage)
    }
  }

  nextPhotos = () => {
    this.indexPage += 1;
    this.getAllPhotos(this.indexPage)
  }


  getAllPhotos = (indexPage : number) => {
    console.log("INDEX PAGE : ", indexPage);
    
    this._photosService.apiGetPhotos(indexPage).subscribe(
      (response: Array<IPhoto>) => {
        console.log("RESPONSE : ", response );
        this.listPhotos = response;
      },
      error => console.log("Ocurrio un error obteniendo las photos")
    )
  }

}
