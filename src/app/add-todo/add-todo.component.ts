import { Component, OnInit } from '@angular/core';
import {TodoService} from "../services/todo.service";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  constructor(private todosService: TodoService) { }

  ngOnInit() {
  }

  add(input: any) {
    this.todosService.add(input.target.value);
    input.target.value = '';
  }

}
