import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-item-info",
  templateUrl: "./item-info.component.html",
  styleUrls: ["./item-info.component.scss"],
})
export class ItemInfoComponent implements OnInit {
  @Input() titleItem: string;
  @Input() descripItem: string;
  @Input() aditionalPrice: string;
  @Input() active = false;
  @Input() showBorder = false;

  constructor() {}

  ngOnInit() {}
}
