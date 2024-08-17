import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';
@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks: Array<Task> = [];
  constructor() {
    const checkNull = localStorage.getItem('Tasks');
    if (checkNull) this.tasks = JSON.parse(checkNull);
    else this.tasks = [];
  }
  deleteTask(i: number) {
    this.tasks.splice(i, 1);
    this.saveToLocalStorage();
  }
  addTask(title: string, description: string) {
    this.tasks.push({ Title: title, Description: description });
    this.saveToLocalStorage();
  }
  editTask(title: string, description: string, id: number) {
    console.log(id);
    this.tasks[id].Title = title;
    this.tasks[id].Description = description;
    this.saveToLocalStorage();
  }
  saveToLocalStorage() {
    localStorage.setItem('Tasks', JSON.stringify(this.tasks));
  }
}
