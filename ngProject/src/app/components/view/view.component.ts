import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Service } from "../../services/service.service";
import { Record } from "../client/record";

@Component({
  selector: "app-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.scss"]
})
export class ViewComponent implements OnInit {
  done: boolean = false;
  data: Record;
  constructor(private route: ActivatedRoute, private service: Service) {
    this.data = new Record();
  }

  ngOnInit() {
    this.done = false;
    var _id: string = this.route.snapshot.paramMap.get("id");
    this.service.view(_id).subscribe(result => {
      this.done = true;

      this.data = result;
    });
  }
}
