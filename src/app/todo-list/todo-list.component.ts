import { Component, inject, ViewContainerRef } from '@angular/core';
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  inputValue = ""
  addTask(): void {
    console.log(this.inputValue);
    this.inputValue = ""
    }
}
