import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrl: './todo-input.component.scss',
})
export class TodoInputComponent {
  taskName: string = '';
  @Output() addTaskEvent = new EventEmitter<string>();
  addTask() {
    if (this.taskName == "") {
      alert("Empty!")
      return
    }
    this.addTaskEvent.emit(this.taskName);
    this.taskName = '';
  }
}
