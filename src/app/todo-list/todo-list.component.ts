import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {TodoService} from "../services/todo.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos$: Observable<Array<string>> = this.todosService.todos$;

  constructor(private todosService: TodoService) { }

  ngOnInit() {
  }

}
