import { Component, OnInit } from "@angular/core";
import { Service } from "../../services/service.service";
import { Record } from "./record";

@Component({
  selector: "app-client",
  templateUrl: "./client.component.html",
  styleUrls: ["./client.component.scss"]
})
export class ClientComponent implements OnInit {
  record: Array<Record>;
  toUpdate: Record;
  editing: boolean;
  add: boolean;
  // record: Array;
  constructor(private service: Service) {
    this.record = new Array<Record>();
    this.toUpdate = new Record();
  }

  ngOnInit() {
    this.service.getData().subscribe(data => {
      console.log(data);
      this.record = data;
      console.log(this.record);

      // this.record = data;
    });
  }

  atCancel() {
    this.add = false;
    this.toUpdate = new Record();
  }
  getResponse(data) {
    this.record = data;
    this.add = false;
  }

  delete(todel: Record) {
    this.record = this.record.filter(item => {
      if (item._id !== todel._id) {
        return item;
      }
    });
    this.service.deleteData(todel).subscribe(data => {
      console.log(data);
      this.record = data;
    });
  }
  update(data: Record) {
    this.editing = true;
    this.toUpdate = data;

    console.log(this.toUpdate);
    this.add = true;
  }
}
