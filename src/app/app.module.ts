import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AddTodoComponent} from './add-todo/add-todo.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoItemComponent} from './todo-item/todo-item.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AkitaNgDevtools} from "@datorama/akita-ngdevtools";

@NgModule({
    declarations: [
        AppComponent,
        AddTodoComponent,
        TodoListComponent,
        TodoItemComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        AkitaNgDevtools.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
