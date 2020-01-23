import { Component, OnInit, Input, ViewChild } from "@angular/core";

@Component({
  selector: "jr-input",
  templateUrl: "./jr-input.component.html",
  styleUrls: ["./jr-input.component.scss"]
})
export class JrInputComponent implements OnInit {
  public focus: boolean;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() ngmodel: string;

  constructor() {}

  ngOnInit() {}
}
