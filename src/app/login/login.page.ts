import { Component, OnInit } from "@angular/core";
import { Storage } from "@ionic/storage";
import {
  NavController,
  LoadingController,
  ModalController
} from "@ionic/angular";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  rootPage: any = "Login";
  private sub: any;

  constructor(
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
    private storage: Storage,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  initializeApp() {
    console.log("Inside initializing app from app component.");
  }

  gotoHome() {
    this.router.navigate(["home"]);
  }
}
