import { Component, OnInit } from "@angular/core";
import { Storage } from "@ionic/storage";
import { Router } from "@angular/router";
@Component({
  selector: "app-intro",
  templateUrl: "./intro.component.html",
  styleUrls: ["./intro.component.scss"]
})
export class IntroComponent implements OnInit {
  constructor(private storage: Storage, private router: Router) {
    storage.ready().then(() => {
      storage.get("introShown").then(result => {
        if (result) {
          this.router.navigate(["home"]);
        }
      });
    });
  }

  ngOnInit() {}

  toggleDoNotShowIntro(introShown) {
    console.log("Currently do not show intro - " + introShown);
    if (introShown) {
      this.storage.set("introShown", true);
    } else {
      this.storage.set("introShown", false);
    }
  }

  goToHome() {
    this.router.navigate(["home", true]);
  }
}
