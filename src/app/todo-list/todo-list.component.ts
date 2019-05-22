import { Component, OnInit } from '@angular/core';
import {Todo} from "../statemanagement/todo.model";
import {TodosService} from "../statemanagement/todos.service";
import {ID} from "@datorama/akita";
import {Observable} from "rxjs";
import {TodosQuery} from "../statemanagement/todos.query";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos$: Observable<Todo[]>;

  constructor(private todosQuery: TodosQuery, private todosService: TodosService) { }

  ngOnInit() {
    this.todos$ = this.todosQuery.selectVisibleTodos$;
  }

  complete(todo: Todo) {
    this.todosService.complete(todo);
  }

  delete(id: ID) {
    this.todosService.delete(id);
  }
}
