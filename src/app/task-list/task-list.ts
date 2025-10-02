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
  
  cartItems:any[] = [];

  constructor(private functions: TaskService){}

  ngOnInit(){
    this.cartItems = this.functions.getCartItems();
  }

  get totalItems(){
    return this.functions.getCartTotalItems();
  }
  get totalPrice(){
    return this.functions.getCartTotalPrice();
  }
}