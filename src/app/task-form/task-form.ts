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

  searchProduct:string = "";
  products:any[] = [];

  constructor(private functions:TaskService){}

  ngOnInit(){
    this.products = this.functions.getProducts();
  }

  get filteredProducts(){
    return this.products.filter(product => 
      product.name.toLowerCase().includes(this.searchProduct.toLowerCase())      
    );
  }

  aaddToCart(product: any){
    this.functions.addToCart(product);
    alert(product.name + " is added to your Task List.")
  }

  isTaskCompleted(productName: string): boolean {
    return this.functions.isTaskCompleted(productName);
  }
}