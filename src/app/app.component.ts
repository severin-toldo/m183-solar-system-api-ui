import {Component} from '@angular/core';
import {homeRoute} from "./shared/routes";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public homeRoute = homeRoute;


  constructor() {
  }
}
