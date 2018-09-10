import { OnInit, Component, AfterViewInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TodoService } from "../_services/todo/todo.service";

@Component({
  selector: "app-tododetail",
  templateUrl: "./tododetail.page.html",
  styleUrls: ["./tododetail.page.scss"]
})
export class TododetailPage implements OnInit {
  public todo;

  constructor(public route: ActivatedRoute, public todoService: TodoService) {}

  ngOnInit() {}

  ionViewWillEnter() {
    const todoId = this.route.snapshot.paramMap.get("id");
    this.todo = this.todoService.getTodo(todoId);
  }
}
