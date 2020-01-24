import { Component, OnInit, HostListener } from "@angular/core";

@Component({
  selector: "jr-button",
  templateUrl: "./jr-button.component.html",
  styleUrls: ["./jr-button.component.scss"]
})
export class JrButtonComponent implements OnInit {
  top: string;
  left: string;
  click: any = false;
  fade: boolean;
  constructor() {}

  ngOnInit() {}
  gone() {
    this.click = false;
    this.fade = false;
  }

  ripple() {
    return new Promise((resolve, reject) => {
      var count = 1;
      var time = setInterval(function() {
        count += 1;
        if (count === 2) {
          clearInterval(time);
          resolve(false);
        }
      }, 1000);
    });
  }

  async trigger() {
    this.onHover(event);
    this.click = true;
    this.click = await this.ripple();
  }

  @HostListener("click", ["$event"])
  clicked($event) {
    this.top = $event.offsetY + "px";
    this.left = $event.offsetX + "px";
  }

  @HostListener("mouseover", ["$event"]) // for window scroll events
  onHover($event) {
    this.top = $event.offsetY + "px";
    this.left = $event.offsetX + "px";
  }
}
