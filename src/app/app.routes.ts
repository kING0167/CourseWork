import { Routes } from '@angular/router';
import { TaskForm } from './task-form/task-form';
import { TaskList } from './task-list/task-list';

export const routes: Routes = [
    {path: '', component: TaskForm},
    {path: 'task-list', component: TaskList}
];
