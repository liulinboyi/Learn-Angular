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

  constructor() {}

  ngOnInit() {}
}
