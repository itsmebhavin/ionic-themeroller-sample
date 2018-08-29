import { Injectable } from "@angular/core";

interface Todo {
  id: string;
  title: string;
  description: string;
  value: number;
}

@Injectable()
export class TodoService {
  public todos: Todo[] = [];

  constructor() {
    // Set some test todos
    this.todos = [
      {
        id: "todo-one",
        title: "Todo One",
        description: "Do Stuff",
        value: "1"
      },
      {
        id: "todo-two",
        title: "Todo Two",
        description: "Do Stuff",
        value: "2"
      },
      {
        id: "todo-three",
        title: "Todo Three",
        description: "Do Stuff",
        value: "3"
      },
      {
        id: "todo-four",
        title: "Todo Four",
        description: "Do Stuff",
        value: "4"
      },
      {
        id: "todo-five",
        title: "Todo Five",
        description: "Do Stuff",
        value: "5"
      },
      {
        id: "todo-six",
        title: "Todo Six",
        description: "Do Stuff",
        value: "6"
      },
      {
        id: "todo-seven",
        title: "Todo Seven",
        description: "Do Stuff",
        value: "7"
      }
    ];
  }

  getTodo(id): Todo {
    return this.todos.find(todo => todo.id === id);
  }
}
