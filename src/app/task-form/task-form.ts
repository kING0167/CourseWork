import { Component } from '@angular/core';
import { TaskService } from '../task-service/task-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css'
})

export class TaskForm {

  tasks: any[] = [];

  constructor(private functions: TaskService) {}

  ngOnInit() {
    this.tasks = this.functions.getTask();
  }

  addToTask(taskText: string) {
    if (!taskText || !taskText.toString().trim()) return;
    this.functions.addTask(taskText.toString());

    alert(taskText + ' added to your Task List.');
  }

}