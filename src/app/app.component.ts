import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  routeType: string = "";

  constructor(router: Router) {
    if (router.url && router.url.split("/").length > 1 && router.url.split("/")[1] === "edit") {
      this.routeType = "ide";
    } else {
      this.routeType = "base";
    }
  }
}
