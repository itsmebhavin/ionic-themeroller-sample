import { Component, OnInit } from "@angular/core";
import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { ThemeService } from "./_services/theme/theme.service";
import { SwUpdate } from "@angular/service-worker";
import { ToastController } from "@ionic/angular";
import { environment } from "../environments/environment";
@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
  currentTheme;
  update = false;
  public appPages = [
    {
      title: "Home",
      url: "/home",
      icon: "home"
    },
    {
      title: "List",
      url: "/list",
      icon: "list"
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private theme: ThemeService,
    private updates: SwUpdate,
    private toastController: ToastController
  ) {
    updates.available.subscribe(event => {
      console.log("current version is", event.current);
      console.log("available version is", event.available);
      this.update = true;

      // Watch Video -https://www.youtube.com/watch?v=othhfZ0mGjU
      // Another article - https://alligator.io/angular/service-workers/
      // You can do this as well, instead of showing toast to user and setting flag true / false
      //     but the problem is - lazy loading won't work then. Please check - https://angular.io/guide/service-worker-communications
      // Doing this could break lazy-loading into currently running apps,
      //      especially if the lazy-loaded chunks use filenames with hashes, which change every version.
      if (environment.production) {
        this.updates.activateUpdate().then(() => {
          location.reload(true);
        });
      }
      this.presentToastWithOptions();
    });
    updates.activated.subscribe(event => {
      console.log("old version was", event.previous);
      console.log("new version is", event.current);
    });
    this.initializeApp();
  }
  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      message: "We have published a new release!",
      showCloseButton: true,
      position: "top",
      closeButtonText: "Activate & Reload"
    });
    toast.dismiss(() => {
      console.log("Ion-Toast is dismissed");
      document.location.reload();
    });
    toast.present();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    this.setGlobalTheme();
    this.theme.onThemeChanged.subscribe(x => {
      this.themeChange(x);
    });
  }
  async setGlobalTheme() {
    this.currentTheme = await this.theme.storedThemeName.then(x => x);
    console.log(this.currentTheme);
    this.changeTheme(this.currentTheme);
  }
  changeTheme(name = "") {
    this.theme.setThemeByName(name);
  }
  themeChange($event) {
    this.currentTheme = $event;
  }
}
