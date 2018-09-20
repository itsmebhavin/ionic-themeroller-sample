import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuardService } from "./_services/auth/authguard.service";
const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", loadChildren: "./login/login.module#LoginPageModule" },
  {
    path: "home",
    loadChildren: "./home/home.module#HomePageModule",
    canActivate: [AuthGuardService]
  },
  {
    path: "tododetail/:id",
    loadChildren: "./tododetail/tododetail.module#TododetailPageModule",
    canActivate: [AuthGuardService]
  },
  {
    path: "list",
    loadChildren: "./list/list.module#ListPageModule",
    canActivate: [AuthGuardService]
  },
  {
    path: "barcode",
    loadChildren: "./barcode/barcode.module#BarcodePageModule",
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
