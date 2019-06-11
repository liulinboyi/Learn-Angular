import { Component } from "@angular/core";

@Component({
  selector: "app-root", //
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "angulardemo02";
  public headflag: Boolean = false;
  public newsflag: Boolean = false;
  public homeflag: Boolean = false;
  public formflag: Boolean = true;
}
