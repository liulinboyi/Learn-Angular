import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  public src: String =
    "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg";
  public arr: Array<String> = ["第一条", "第二条", "第三条"];
  public flag: Boolean = true;
  public color: Boolean = false;
  /**
   * 1 已经支付
   * 2 支付并且收货
   * 3 已发货
   * 4 已收货
   * 5 无效
   */
  public OrderStatus: Number = 1;
  public fcolor: String = "#ccc";
  public today: Date = new Date();
  public title: String = "我是组件里面的数据";
  public user: String = "";

  constructor() {
    console.log("today", this.today);
  }

  ngOnInit() {}
  run() {
    console.log("执行run");
  }
  getdata() {
    console.log(this.title);
  }
  setdata() {
    this.title = "我修改了哈哈~~";
  }
  keydown(e) {
    // console.log(e);
    // console.log(e.keyCode);
    if (e.keyCode === 13) {
      console.log("按下了回车");
      console.log(e.target.value);
      e.target.value = "";
    }
    // alert("keydown");
  }
  gerEvent(e) {
    let dom: HTMLButtonElement = e.target;
    // dom.style.color = "red";
    dom.style.color === "red"
      ? (dom.style.color = "unset")
      : (dom.style.color = "red");
  }
}
