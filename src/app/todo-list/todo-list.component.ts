import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  @Input() tasks: ITask[] = [];
  @Output() removeTaskEvent = new EventEmitter<string>();
  @Output() checkTaskEvent = new EventEmitter<string>();
  removeTask(id: string) {
    this.removeTaskEvent.emit(id);
  }
  checkTask(id: string) {
    this.checkTaskEvent.emit(id);
  }
}
