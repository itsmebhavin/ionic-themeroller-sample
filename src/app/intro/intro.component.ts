import { Component, OnInit } from "@angular/core";
import { Storage } from "@ionic/storage";
import { Router } from "@angular/router";
import { NavigationEnd } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-intro",
  templateUrl: "./intro.component.html",
  styleUrls: ["./intro.component.scss"]
})
export class IntroComponent implements OnInit {
  introShown = false;
  mySlideOptions = {
    initialSlide: 0,
    loop: false
  };
  private sub: any;
  constructor(
    private storage: Storage,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log("We are now inside ngoninit of intro page. ");
    // Re-initiate slides from index 0 when you come to this page
    this.sub = this.route.params.subscribe(params => {
      this.mySlideOptions.initialSlide = 0;
    });
  }

  toggleDoNotShowIntro(introShown) {
    console.log("Currently do not show intro - " + introShown);
    if (introShown) {
      this.storage.set("introShown", true);
    } else {
      this.storage.set("introShown", false);
    }
  }

  goToLogin() {
    this.router.navigate(["Login", true]);
  }
}
