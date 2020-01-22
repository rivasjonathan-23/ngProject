import { Component, OnInit } from "@angular/core";
import { Service } from "../../services/service.service";
import { Record } from "./record";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

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
  toDelete: Record;
  confirm: boolean;
  done: any = true;
  gotData: boolean;
  // record: Array;
  constructor(
    private service: Service,

    private router: Router
  ) {
    this.record = new Array<Record>();
    this.toUpdate = new Record();
    this.toDelete = new Record();
  }

  ngOnInit() {
    this.gotData = false;
    this.service.getData().subscribe(data => {
      console.log(data);
      this.record = data;
      console.log(this.record);
      this.gotData = true;

      // this.record = data;
    });
  }

  timer() {
    return new Promise(resolve => {
      var count = 1;
      var time = setInterval(function() {
        count += 1;
        if (count === 3) {
          clearInterval(time);
          resolve(true);
        }
      }, 2000);
    });
  }
  async finish() {
    this.done = await this.timer();
  }

  view(id) {
    this.router.navigate(["/view/" + id]);
  }
  atCancel() {
    this.add = false;
    this.toUpdate = new Record();
  }

  getData(data) {
    this.record = data;
    this.add = false;
    this.editing = false;
  }

  delete(todel: Record) {
    this.toDelete = todel;
    this.confirm = true;
  }

  deleteItem() {
    this.service.deleteData(this.toDelete._id).subscribe(response => {
      if (response.success) {
        this.done = false;
        this.finish();
        this.record = this.record.filter(item => {
          if (item._id !== this.toDelete._id) {
            return item;
          }
        });
      }
    });
  }
  update(data: Record) {
    this.editing = true;
    this.toUpdate = data;
    this.add = true;
  }

  addNew() {
    this.add = true;
    this.editing = false;
    this.toUpdate = new Record();
  }
}
