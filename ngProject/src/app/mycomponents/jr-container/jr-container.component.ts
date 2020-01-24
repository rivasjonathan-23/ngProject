import { Component, OnInit, Input, HostListener } from "@angular/core";

@Component({
  selector: "jr-container",
  templateUrl: "./jr-container.component.html",
  styleUrls: ["./jr-container.component.scss"]
})
export class JrContainerComponent implements OnInit {
  @Input() columns: number;
  colnum: string = "";
  width: number;
  screen: number;
  top:string;
  left:string;
  click:boolean;
  sub: any;
  fade: boolean;

  constructor() {}

  ngOnInit() {
    // this.colnum = this.calColumns(this.columns);
    this.screen = window.innerWidth;
    if (this.screen < 1000) {
      this.screen = 1280;
      this.sub = (this.screen / this.columns).toFixed();
    } else {
      this.sub = (this.screen / this.columns).toFixed();
    }
    this.onResize(event);
  }

 
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll($event) {
    // console.log(window.pageYOffset);
    if (window.pageYOffset == 0) {
      // alert("you have reach the top")
    }
  }

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.width = window.innerWidth;
    if (this.width < this.screen) {
      this.colnum = this.calColumns((this.width / this.sub).toFixed());
    } else {
      this.colnum = this.calColumns(this.columns);
    }
  }



  calColumns(col) {
    var tempcol: string = "";
    let num: number = 0;
    while (num < col) {
      tempcol += "auto ";
      num += 1;
    }
    return tempcol;
  }
}
