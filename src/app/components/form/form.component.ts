import { Component, OnInit } from "@angular/core";

interface user {
  username: String;
  sex: String;
}

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit {
  public user: user = {
    username: "",
    sex: "1"
  };
  public cityList: Array<String> = ["北京", "上海", "深圳"];
  public city: String = "北京";
  public Hobbby: Array<Object> = [
    {
      title: "睡觉",
      checked: false
    },
    {
      title: "吃饭",
      checked: false
    },
    {
      title: "写代码",
      checked: true
    }
  ];
  public Other: String = "";
  constructor() {}

  ngOnInit() {}
  getsubmit() {
    if (this.user.username === "") return;
    console.log(this.user, this.Hobbby);
  }
}
