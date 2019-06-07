import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angulardemo02';
  public headflag:Boolean = true
  public newsflag:Boolean = false
  public homeflag:Boolean = true
}
