import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  taskId: any;
  task: any;
  constructor(
    private route: ActivatedRoute,
    private tasksService: TasksService,
    private title: Title
  ) {
    title.setTitle('Task');
  }

  ngOnInit() {
    this.taskId = this.route.snapshot.paramMap.get('id');
    this.task = this.tasksService.tasks[this.taskId];
  }
}
