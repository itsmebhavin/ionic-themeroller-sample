import { Component, OnInit } from "@angular/core";
import { Platform, ModalController } from "@ionic/angular";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { ThemeService } from "./_services/theme/theme.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
  constructor(private theme: ThemeService) { }

  currentTheme;
  ngOnInit() {
    this.setGlobalTheme();
  }
  async setGlobalTheme() {
    this.currentTheme = await this.theme.storedThemeName.then(x => x);
    console.log(this.currentTheme);
    this.changeTheme(this.currentTheme)
  }
  changeTheme(name = '') {
    this.theme.setThemeByName(name);
  }
}
