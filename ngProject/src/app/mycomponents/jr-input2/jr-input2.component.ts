import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "jr-input2",
  templateUrl: "./jr-input2.component.html",
  styleUrls: ["./jr-input2.component.scss"]
})
export class JrInput2Component implements OnInit {
  @Input() placeholder: string;
  @Input() label: string;
  focus:boolean = false;

  constructor() {}

  ngOnInit() {}
}
