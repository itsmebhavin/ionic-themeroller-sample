import { Component, OnInit } from "@angular/core";
import { ActionSheetController, AlertController } from "@ionic/angular";
import { TodoService } from "../_services/todo/todo.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Storage } from "@ionic/storage";
import { ThemeService } from "../_services/theme/theme.service";


@Component({
	selector: "app-home",
	templateUrl: "home.page.html",
	styleUrls: ["home.page.scss"]
})
export class HomePage {
	barcode: string;

	constructor(
		private theme: ThemeService,
		public actionSheetController: ActionSheetController,
		public alertController: AlertController,
		public todoService: TodoService,
		public router: Router,
		private route: ActivatedRoute
	) { }

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.barcode = params.queryParams;
		});
	}

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

	changeTheme(name = '') {
		this.theme.setThemeByName(name);
		this.theme.onThemeChanged.emit(name);
	}

	searchBarcode() {
		this.router.navigate(["barcode"]);
	}
}
