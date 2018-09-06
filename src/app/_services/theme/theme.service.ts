import { Injectable, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import * as Color from "color";
import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: "root"
})
export class ThemeService {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private storage: Storage
  ) {
  }
/**
 * set the name of the theme's class on the body element
 */
  setThemeByName(name){
    this.storage.set('themeName', name);
    const bodyNode = this.document.body;
    bodyNode.removeAttribute('class');
    bodyNode.classList.add(name);

  }
  
  

  get storedTheme() {
    return this.storage.get("theme");
  }
  get storedThemeName() {
    return this.storage.get("themeName");
  }
}



function contrast(color, ratio = 0.8) {
  color = Color(color);
  return color.isDark() ? color.lighten(ratio) : color.darken(ratio);
}
