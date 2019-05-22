import { Component, OnInit } from '@angular/core';
import {TodosService} from "../statemanagement/todos.service";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  constructor(private todosService: TodosService) { }

  ngOnInit() {

  }

  add(input: HTMLInputElement) {
    this.todosService.add(input.value);
    input.value = '';
  }
}
