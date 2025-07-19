import { Component } from '@angular/core';
import { Todos } from '../../Todos';
import { CommonModule } from '@angular/common';

import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from "../add-todo/add-todo.component"; // ✅ correct path and class name
import { FormsModule } from '@angular/forms'; // <-- Import this
@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, AddTodoComponent,FormsModule], // ✅ import child component
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  todos!: Todos[];

  localitem:string|null;
  constructor() {
    this.localitem=localStorage.getItem("todos")
    if(this.localitem==null){
      
      this.todos = [];
    }
    else{
      this.todos=JSON.parse(this.localitem)
    }
  }
  deleteTodo(todo:Todos){
      // this.todos = this.todos.filter(items => items !== todo);
      const index=this.todos.indexOf(todo);
      this.todos.splice(index,1);//element delete kia 
    localStorage.setItem('todos',JSON.stringify(this.todos));//then updated array ko push kar dia ya set kar dia

  }
   todoAdd(todo:Todos){
    console.log(todo);
  
      this.todos.push(todo)
       localStorage.setItem('todos',JSON.stringify(this.todos))
    

  }
 todoToggle(todo:Todos){
      // this.todos = this.todos.filter(items => items !== todo);
      const index=this.todos.indexOf(todo);
      this.todos[index].active=!this.todos[index].active;//element delete kia 
    localStorage.setItem('todos',JSON.stringify(this.todos));//then updated array ko push kar dia ya set kar dia

  }

}
