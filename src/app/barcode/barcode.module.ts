import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";
import { BarecodeScannerLivestreamModule } from "ngx-barcode-scanner";
import { BarcodePage } from "./barcode.page";

const routes: Routes = [
  {
    path: "",
    component: BarcodePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarecodeScannerLivestreamModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BarcodePage]
})
export class BarcodePageModule {}
