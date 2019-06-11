import { Component, OnInit } from "@angular/core";

interface user {
  username: String;
  sex: Number;
}

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit {
  public user: user = {
    username: "",
    sex: 1
  };
  constructor() {}

  ngOnInit() {}
  getsubmit() {
    if (this.user.username === "") return;
    console.log(this.user.username);
  }
}
