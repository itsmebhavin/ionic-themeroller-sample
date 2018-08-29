import { ThemeService } from "./theme/theme.service";
import { TodoService } from "./todo/todo.service";
import { AuthGuardService } from "./auth/authguard.service";
import { NgModule } from "@angular/core";

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [ThemeService, TodoService, AuthGuardService]
})
export class ServicesModule {}
