import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TaskComponent } from './components/task/task.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-task', component: AddTaskComponent },
  { path: 'task', component: TaskComponent },
  { path: 'task/:id', component: TaskComponent },
  { path: 'edit-task/:id', component: EditTaskComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
