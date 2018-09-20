import { Component, ViewChild, AfterViewInit, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Platform } from "@ionic/angular";
import { ChangeDetectorRef } from "@angular/core";
const BarcodeReader = (window as any).BarcodeReader;

@Component({
	selector: "app-barcode",
	templateUrl: "./barcode.page.html",
	styleUrls: ["./barcode.page.scss"]
})
export class BarcodePage implements OnInit {
	@ViewChild('cameraFeed')
	cameraFeed: any;

	nativeVideo: any;
	scanResult: string;

	constructor(private ref: ChangeDetectorRef, private platform: Platform, private router: Router) {
		// Here nothing
	}
	
	ngOnInit() {
		console.log("Barcode: initialization");
		BarcodeReader.Init();
		BarcodeReader.SetStreamCallback(data => this.onProcessed(data));
		this.nativeVideo = this.cameraFeed.nativeElement;		
	}

	startScanner() {
		this.scanResult = "";
		navigator.mediaDevices.getUserMedia({ video: { height: 920, width: 1280 }, audio: false }).then(stream => {
			this.nativeVideo.srcObject = stream;
			this.nativeVideo.play();
			BarcodeReader.DecodeStream(this.nativeVideo);
		}).catch(err => console.error(err));
	}

	public onProcessed(results: any[]) {
		this.scanResult = results[0].Value;
		BarcodeReader.StopStreamDecode();
		this.nativeVideo.pause();
		this.router.navigate(['/home', { queryParams: this.scanResult }]);
		// const drawingCtx = Quagga.canvas.ctx.overlay;
		// const drawingCanvas = Quagga.canvas.dom.overlay;

		// if (result) {
		// 	if (result.boxes) {
		// 		drawingCtx.clearRect(
		// 			0,
		// 			0,
		// 			parseInt(drawingCanvas.getAttribute("width"), 10),
		// 			parseInt(drawingCanvas.getAttribute("height"), 10)
		// 		);
		// 		result.boxes
		// 			.filter(function (box) {
		// 				return box !== result.box;
		// 			})
		// 			.forEach(function (box) {
		// 				Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, {
		// 					color: "green",
		// 					lineWidth: 2
		// 				});
		// 			});
		// 	}

		// 	if (result.box) {
		// 		Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, {
		// 			color: "#00F",
		// 			lineWidth: 2
		// 		});
		// 	}

		// 	if (result.codeResult && result.codeResult.code) {
		// 		Quagga.ImageDebug.drawPath(
		// 			result.line,
		// 			{ x: "x", y: "y" },
		// 			drawingCtx,
		// 			{ color: "red", lineWidth: 3 }
		// 		);
		// 	}
		// }
	}

	private logCode(result) {
		// const code = result.codeResult.code;
		// if (this.barcode !== code) {
		// 	this.barcode = "Code: " + code;
		// 	// this.ref.detectChanges();
		// 	console.log(this.barcode);
		// 	Quagga.stop();
		// }
	}
}
