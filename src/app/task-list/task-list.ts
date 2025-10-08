import { Component } from '@angular/core';
import { TaskService } from '../task-service/task-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.html',
  styleUrls: ['./task-list.css']
})
export class TaskList {
  
  taskItems:any[] = [];

  constructor(public functions: TaskService){}

  ngOnInit(){
    this.taskItems = this.functions.getTask();
  }

  get totalTasks(){
    return this.functions.getTotalTasks();
  }

  get totalCompletedTasks(){
    return this.taskItems.filter(t => t.done).length;
  }

  get totalRemainingTasks(){
    return this.taskItems.filter(t => !t.done).length;
  }
}