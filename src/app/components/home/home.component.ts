import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from 'src/app/interfaces/task';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  tasks: Array<Task> = [];
  constructor(public tasksService: TasksService, private title: Title) {
    title.setTitle('Task Manager');
  }

  ngOnInit(): void {
    this.tasks = this.tasksService.tasks;
  }
  deleteTask(i: number) {
    this.tasksService.deleteTask(i);
  }
}
