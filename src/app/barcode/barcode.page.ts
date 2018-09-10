import { Component, ViewChild, AfterViewInit } from "@angular/core";
import { BarecodeScannerLivestreamComponent } from "ngx-barcode-scanner";

@Component({
  selector: "app-barcode",
  templateUrl: "./barcode.page.html",
  styleUrls: ["./barcode.page.scss"]
})
export class BarcodePage implements AfterViewInit {
  @ViewChild(BarecodeScannerLivestreamComponent)
  BarecodeScanner: BarecodeScannerLivestreamComponent;

  barcodeValue;

  ngAfterViewInit() {
    this.BarecodeScanner.start();
  }

  onValueChanges(value) {
    this.barcodeValue = value.code;
  }
}
