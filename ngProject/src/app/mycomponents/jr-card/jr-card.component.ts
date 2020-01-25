import { Component, OnInit, Input, HostListener } from "@angular/core";

@Component({
  selector: "jr-card",
  templateUrl: "./jr-card.component.html",
  styleUrls: ["./jr-card.component.scss"]
})
export class JrCardComponent implements OnInit {
  @Input() title: string;
  top: string;
  left: string;
  click: any = false;
  @Input() clickerOn: boolean = true;
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

  // async trigger() {
  //   if (this.clickerOn) {
  //     this.click = true;
  //     this.click = await this.ripple();
  //   }
  // }
  @HostListener("click", ["$event"])
  async trigger($event) {
    this.top = $event.offsetY + "px";
    this.left = $event.offsetX + "px";
    this.click = true;
    this.click = await this.ripple();
  }

  @HostListener("mouseover", ["$event"])
  onHover($event) { 
    
    this.top = $event.offsetY + "px";
    this.left = $event.offsetX + "px";
  }
}
