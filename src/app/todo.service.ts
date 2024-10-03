import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITask } from './models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  baseURL = 'http://localhost:5000/tasks';
  tasks: ITask[] = [];
  constructor(private http: HttpClient) {}
  getTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>(this.baseURL);
  }
  deleteTasks(id: string): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
  addTasks(task: ITask): Observable<any> {
    return this.http.post(this.baseURL, task);
  }
  updateTask(task:ITask) {
    return this.http.patch(`${this.baseURL}/${task.id}`, task)
  }

}
