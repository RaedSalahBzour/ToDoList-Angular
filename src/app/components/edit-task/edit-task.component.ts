import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'],
})
export class EditTaskComponent implements OnInit {
  constructor(
    private tasksService: TasksService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
  ) {
    title.setTitle('Edit Task');
  }
  taskId: any;
  ngOnInit(): void {
    this.taskId = this.route.snapshot.paramMap.get('id');
  }
  editTask(title: string, description: string) {
    this.tasksService.editTask(title, description, this.taskId);
    console.log(this.taskId);
    this.router.navigate(['/']);
  }
}
