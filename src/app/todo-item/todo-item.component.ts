import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from "../statemanagement/todo.model";
import {ID} from "@datorama/akita";
import {FormControl} from "@angular/forms";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  @Output() complete = new EventEmitter<Todo>();
  @Output() delete = new EventEmitter<ID>();

  onDestroy$ = new Subject();

  control: FormControl;

  constructor() { }

  ngOnInit() {
    this.control = new FormControl(this.todo.completed);

    this.control.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe((completed: boolean) => {
      this.complete.emit({ ...this.todo, completed });
    });
  }

  ngOnDestroy() {
    this.onDestroy$.next();
  }
}
