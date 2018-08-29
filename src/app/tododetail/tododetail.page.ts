import { OnInit, Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TodoService } from "../_services/todo/todo.service";

@Component({
  selector: "app-tododetail",
  templateUrl: "./tododetail.page.html",
  styleUrls: ["./tododetail.page.scss"]
})
export class TododetailPage implements OnInit {
  private todo;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    let todoId = this.route.snapshot.paramMap.get("id");
    this.todo = this.todoService.getTodo(todoId);
  }
}
