import { Component } from '@angular/core';
import { TodoService } from './todo.service';
import { ITask } from './models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'todo-app';
  taskName: string = '';
  tasks: ITask[] = [];
  filteredTasks: ITask[] = [];
  constructor(private toDoService: TodoService) {}
  ngOnInit() {
    this.loadTasks();
  }
  loadTasks() {
    this.toDoService.getTasks().subscribe((data) => {
      this.tasks = data;
      this.filteredTasks = data;
      console.log(data);
    });
  }
  addTask() {
    if (this.taskName == '') {
      alert('Empty!');
      return;
    }
    const newTask: ITask = {
      id: crypto.randomUUID(),
      name: this.taskName,
      completed: false,
    };
    this.taskName = '';
    this.toDoService.addTasks(newTask).subscribe((data) => {
      console.log('Task Added', data);
      this.loadTasks();
    });
  }
  removeTask(id: any) {
    this.toDoService.deleteTasks(id).subscribe(() => {
      console.log('Data Deleted');
      this.loadTasks();
    });
  }
  checkTask(id: string) {
    const currentTask = this.tasks.find((task) => task.id === id);
    if (currentTask) {
      currentTask.completed = !currentTask.completed;
      this.toDoService
        .updateTask(currentTask)
        .subscribe((data) => console.log(data));
    }
  }
}
