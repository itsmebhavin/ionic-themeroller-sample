import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IntroComponent } from "./intro/intro.component";
import { HomePage } from "./home/home.page";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", loadChildren: "./home/home.module#HomePageModule" },
  { path: "home/:dontcheckintroflag", component: HomePage },
  { path: "intro", component: IntroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
