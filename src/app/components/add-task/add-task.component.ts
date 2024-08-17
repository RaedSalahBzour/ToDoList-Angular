import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  constructor(
    public tasksService: TasksService,
    private router: Router,
    private title: Title
  ) {
    title.setTitle('Add Task');
  }

  ngOnInit(): void {}
  addTask(title: string, description: string) {
    this.tasksService.addTask(title, description);
    this.router.navigate(['/']);
  }
}
