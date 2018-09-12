import { Component, ViewChild, AfterViewInit, OnInit } from "@angular/core";
import { Platform } from "@ionic/angular";
import Quagga from "quagga";
// declare var Quagga: any;
import { ChangeDetectorRef } from "@angular/core";
// const Quagga = require("quagga").default; // Common JS (important: default)
@Component({
  selector: "app-barcode",
  templateUrl: "./barcode.page.html",
  styleUrls: ["./barcode.page.scss"]
})
export class BarcodePage implements OnInit {
  barcode = "";
  configQuagga = {
    name: "Live",
    type: "LiveStream",
    target: "#inputBarcode",
    size: 1280,
    numOfWorkers: 8,
    decoder: {
      readers: ["code_128_reader", "upc_reader", "upc_e_reader"] // List of active readers
    },
    locator: {
      showCanvas: true,
      showPatches: true,
      showFoundPatches: true,
      showSkeleton: true,
      showLabels: true,
      showPatchLabels: true
    }
  };

  ngOnInit() {
    console.log("Barcode: initialization");
  }

  constructor(private ref: ChangeDetectorRef, private platform: Platform) {
    // Here nothing
  }

  startScanner() {
    this.barcode = "";
    // this.ref.detectChanges();

    //  Quagga.onProcessed(result => this.onProcessed(result));

    Quagga.onDetected(result => this.logCode(result));

    Quagga.init(this.configQuagga, err => {
      if (err) {
        return console.log(err);
      }
      Quagga.start();
      console.log("Barcode: initialization finished. Ready to start");
    });
  }

  public onProcessed(result: any) {
    const drawingCtx = Quagga.canvas.ctx.overlay;
    const drawingCanvas = Quagga.canvas.dom.overlay;

    if (result) {
      if (result.boxes) {
        drawingCtx.clearRect(
          0,
          0,
          parseInt(drawingCanvas.getAttribute("width"), 10),
          parseInt(drawingCanvas.getAttribute("height"), 10)
        );
        result.boxes
          .filter(function(box) {
            return box !== result.box;
          })
          .forEach(function(box) {
            Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, {
              color: "green",
              lineWidth: 2
            });
          });
      }

      if (result.box) {
        Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, {
          color: "#00F",
          lineWidth: 2
        });
      }

      if (result.codeResult && result.codeResult.code) {
        Quagga.ImageDebug.drawPath(
          result.line,
          { x: "x", y: "y" },
          drawingCtx,
          { color: "red", lineWidth: 3 }
        );
      }
    }
  }

  private logCode(result) {
    const code = result.codeResult.code;
    if (this.barcode !== code) {
      this.barcode = "Code: " + code;
      // this.ref.detectChanges();
      console.log(this.barcode);
      Quagga.stop();
    }
  }
}
