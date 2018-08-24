import { Component } from "@angular/core";
import { ThemeService } from "../_services/theme/theme.service";
import { ActionSheetController, AlertController } from "@ionic/angular";

const themes = {
  autumn: {
    primary: "#F78154",
    secondary: "#4D9078",
    tertiary: "#B4436C",
    light: "#FDE8DF",
    medium: "#FCD0A2",
    dark: "#B89876"
  },
  night: {
    primary: "#8CBA80",
    secondary: "#FCFF6C",
    tertiary: "#FE5F55",
    medium: "#BCC2C7",
    dark: "#F7F7FF",
    light: "#495867"
  },
  neon: {
    primary: "#39BFBD",
    secondary: "#4CE0B3",
    tertiary: "#FF5E79",
    light: "#F4EDF2",
    medium: "#B682A5",
    dark: "#34162A"
  }
};

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  constructor(
    private theme: ThemeService,
    public actionSheetController: ActionSheetController,
    public alertController: AlertController
  ) {}

  // presentBasic() {
  //   return await presentActionSheet();
  // }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: "Albums",
      buttons: [
        {
          text: "Delete",
          role: "destructive",
          icon: "trash",
          handler: () => {
            console.log("Delete clicked");
          }
        },
        {
          text: "Share",
          icon: "share",
          handler: () => {
            console.log("Share clicked");
          }
        },
        {
          text: "Play (open modal)",
          icon: "arrow-dropright-circle",
          handler: () => {
            console.log("Play clicked");
          }
        },
        {
          text: "Favorite",
          icon: "heart",
          handler: () => {
            console.log("Favorite clicked");
          }
        },
        {
          text: "Cancel",
          icon: "close",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          }
        }
      ]
    });
    await actionSheet.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: "Confirm!",
      message: "Message <strong>text</strong>!!!",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: blah => {
            console.log("Confirm Cancel: blah");
          }
        },
        {
          text: "Okay",
          handler: () => {
            console.log("Confirm Okay");
          }
        }
      ]
    });

    await alert.present();
  }

  changeTheme(name) {
    this.theme.setTheme(themes[name]);
  }
}
