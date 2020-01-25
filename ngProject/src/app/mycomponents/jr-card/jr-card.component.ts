import { Component, OnInit, Input, HostListener } from "@angular/core";

@Component({
  selector: "jr-card",
  templateUrl: "./jr-card.component.html",
  styleUrls: ["./jr-card.component.scss"]
})
export class JrCardComponent implements OnInit {
  @Input() title: string;
  @Input() clickerOn: boolean = true;
  constructor() {}

  ngOnInit() {}
  gone() {}
}
