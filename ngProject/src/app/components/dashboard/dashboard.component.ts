import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Info } from "../info";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  @Input() record: Array<Info>;
  temp: Array<Info>;
  @Output() editInfo = new EventEmitter();
  constructor() {
    this.record = new Array<Info>();
  }

  ngOnInit() {}

  edit(info) {
    this.editInfo.emit(info);
    const index: number = this.record.indexOf(info);
    if (index !== -1) {
      this.record.splice(index, 1);
    }
  }
}
