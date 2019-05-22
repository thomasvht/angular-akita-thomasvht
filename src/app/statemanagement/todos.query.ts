import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { TodosStore, TodosState } from './todos.store';
import { Todo } from './todo.model';
import {combineLatest} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodosQuery extends QueryEntity<TodosState, Todo> {
  selectVisibleTodos$ = combineLatest(this.getVisibleTodos);

  constructor(protected store: TodosStore) {
    super(store);
  }

  getVisibleTodos(todos): Todo[] {
    return todos;
  }
}
