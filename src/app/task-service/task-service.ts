import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private products = [
    {name:"Chrome", stock: 1, price: 300.67, cpu: "16"},
    {name:"Netflix", stock: 1, price: 217.03 , cpu: "19"},
    {name:"To-Do List", stock: 1, price: 17.01 , cpu: "3"},
    {name:"Messenger", stock: 1, price: 98.73 , cpu: "11"},
    {name:"Classroom", stock: 1, price: 64.59 , cpu: "9"},
  ];

  getProducts(){
    return this.products;
  }

  cartItems:any[] = [];
  getCartItems(){
    return this.cartItems;
  }


  addToCart(product:any){
    if(product.stock > 0){
      product.stock -= 1;

      const existingItem = this.cartItems.find(item => item.name === product.name);
      if(existingItem){
        existingItem.cartStock += 1;
      }
      else{
        this.cartItems.push({...product, cartStock: 1, completed: false});
      }
    }
  }

  getCartTotalItems(){
    return this.cartItems
      .filter(item => !item.completed)
      .reduce((total, item) => total + item.cartStock, 0);
  }

  getCartTotalPrice(){
    return this.cartItems
      .filter(item => !item.completed)
      .reduce((total, item) => total + (item.price * item.cartStock), 0);
  }

  isTaskCompleted(productName: string): boolean {
    const cartItem = this.cartItems.find(item => item.name === productName);
    return cartItem ? cartItem.completed : false;
  }
}