import { Component, OnInit } from "@angular/core";
import { Storage } from "@ionic/storage";
import {
  Platform,
  NavController,
  LoadingController,
  ModalController
} from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Router, ActivatedRoute } from "@angular/router";
import { SplashPage } from "../splash/splash.page";
@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  introShown = false;
  rootPage: any = "Login";
  private sub: any;
  dontcheckintroflag = false;

  constructor(
    private platform: Platform,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // console.log("inside ngOnInit from Home Component");
    this.sub = this.route.params.subscribe(params => {
      this.dontcheckintroflag = params["dontcheckintroflag"];
    });
    this.storage.ready().then(() => {
      // console.log(
      //   "Now in value of Don'tCheckIntroFlag in Home c'tor = ",
      //   this.dontcheckintroflag
      // );
      if (!this.dontcheckintroflag) {
        this.initializeApp();
      }
    });
  }

  initializeApp() {
    // console.log("Inside initializing app from app component.");

    this.platform.ready().then(() => {
      // console.log("Platform is ready now.");
      // console.log("Checking if we have to navigate to Intro Page or not.");
      this.storage.get("introShown").then(result => {
        console.log("We found SkipIntroShown value = ", result);
        if (!result) {
          // console.log("Let's goto Intro Page");
          this.router.navigate(["Intro"]);
        }
      });
      this.statusBar.styleDefault();
      this.splashScreen.show();
    });
  }

  gotoIntro() {
    this.router.navigate(["Intro"]);
  }

  gotoHome() {
    this.router.navigate(["Home"]);
  }
}
