import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  @Input() currentRoute: string;
  constructor(private router: Router) {}

  ngOnInit() {}

  goTo(path) {
    this.router.navigate([path]);
    this.currentRoute = path;
  }
}
