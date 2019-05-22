import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos$: Observable<Array<string>>;

  constructor() {
    this.todos$ = of([]);
  }

  add(title: string) {

  }
}
