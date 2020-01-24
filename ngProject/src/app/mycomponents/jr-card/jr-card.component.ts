import { Component, OnInit, Input, HostListener } from "@angular/core";

@Component({
  selector: "jr-card",
  templateUrl: "./jr-card.component.html",
  styleUrls: ["./jr-card.component.scss"]
})
export class JrCardComponent implements OnInit {
  @Input() title: string;
  top:string;
  left:string;
  click: any = false;
  fade: boolean;
  constructor() {}

  ngOnInit() {
  }
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
  clicked() {
    this.onHover(event);
    this.click = true;
    this.fade = false;
  }
  
  @HostListener('mouseover', ['$event']) // for window scroll events
  onHover($event) {
    console.log($event)
    // console.log("x "+$event.x);
    // console.log("y "+$event.y);
    this.top = $event.offsetY+"px";
    this.left =$event.offsetX+"px";
    
  }

  
}
