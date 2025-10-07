import { Component } from '@angular/core';
import { TaskService } from '../task-service/task-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
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

}