import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "jr-card",
  templateUrl: "./jr-card.component.html",
  styleUrls: ["./jr-card.component.scss"]
})
export class JrCardComponent implements OnInit {
  @Input() title: string;
  constructor() {}

  ngOnInit() {}
}
