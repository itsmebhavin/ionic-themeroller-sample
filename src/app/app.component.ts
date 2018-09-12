import { Component, OnInit } from "@angular/core";
import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { ThemeService } from "./_services/theme/theme.service";
@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
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
    private theme: ThemeService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  currentTheme;
  ngOnInit() {
    this.setGlobalTheme();
    this.theme.onThemeChanged.subscribe(x => { this.themeChange(x) });
  }
  async setGlobalTheme() {
    this.currentTheme = await this.theme.storedThemeName.then(x => x);
    console.log(this.currentTheme);
    this.changeTheme(this.currentTheme)
  }
  changeTheme(name = '') {
    this.theme.setThemeByName(name);
  }
  themeChange($event) {
    this.currentTheme = $event;
  }
}
