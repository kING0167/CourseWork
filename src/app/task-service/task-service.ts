import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: { text: string; done: boolean }[] = [];

  addTask(text: string) {
    if (!text || !text.toString().trim()) return;
    this.tasks.push({ text: text.toString(), done: false });
  }

  toggleTask(index: number) {
    const t = this.tasks[index];
    if (t) t.done = !t.done;
  }

  getTask() {
    return this.tasks;
  }

  getTotalTasks() {
    return this.tasks.length;
  }
  
}