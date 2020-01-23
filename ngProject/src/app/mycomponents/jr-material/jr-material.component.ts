import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-jr-material",
  templateUrl: "./jr-material.component.html",
  styleUrls: ["./jr-material.component.scss"]
})
export class JrMaterialComponent implements OnInit {
  label: string = "Name";
  placeholder: string = "Name";
  title: string = "This is the header";
  ngmodel: string;
  columns: number = 3;
  name: string;
  constructor() {}

  ngOnInit() {}
}
