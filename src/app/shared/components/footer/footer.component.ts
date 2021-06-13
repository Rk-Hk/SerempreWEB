import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  @Input() productPrice = 0;

  contentItemsFooter = [
    {
      titleItem: "Free Shipping",
      description: "Get 2-day free shipping anywhere in North America.",
    },
    {
      titleItem: "2 years warranty",
      description:
        "If anything goes wrong in the first two years, well replace it for free.",
    }
  ];

  constructor() {}

  ngOnInit() {}
}
