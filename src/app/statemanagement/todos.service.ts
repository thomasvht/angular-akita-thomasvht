import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { TodosStore } from './todos.store';
import {createTodo, Todo} from './todo.model';

@Injectable({ providedIn: 'root' })
export class TodosService {

  constructor(private todosStore: TodosStore) {
  }

  add(title: string) {
    const todo = createTodo({ title });
    this.todosStore.add(todo);
  }

  update(id, todo: Partial<Todo>) {
    this.todosStore.update(id, todo);
  }

  complete({ id, completed }: Todo) {
    this.todosStore.update(id, {
      completed
    });
  }

  delete(id: ID) {
    this.todosStore.remove(id);
  }
}
