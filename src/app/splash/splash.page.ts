import { Component, OnInit } from "@angular/core";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
@Component({
  selector: "app-splash",
  templateUrl: "./splash.page.html",
  styleUrls: ["./splash.page.scss"]
})
export class SplashPage implements OnInit {
  constructor(private splashScreen: SplashScreen) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.splashScreen.hide();
  }
}
