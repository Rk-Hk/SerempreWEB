import { Component, Input, OnInit } from '@angular/core';
import { IPhoto } from '../../models/photo.interface';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {
  @Input() photoDetail: IPhoto;

  constructor() { }

  ngOnInit() {
  }

}
