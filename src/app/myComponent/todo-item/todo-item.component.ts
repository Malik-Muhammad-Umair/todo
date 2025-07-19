import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todos } from '../../Todos';
import { CommonModule } from '@angular/common'; 
// import { FormsModule } from '@angular/forms'; // <-- Import this

@Component({
  selector: 'app-todo-item',
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
 
@Input() todo!:Todos;

@Output() todoDelete:EventEmitter<Todos>=new EventEmitter();
@Output() todoCheckbox:EventEmitter<Todos>=new EventEmitter();
onClick(todo:Todos){
  this.todoDelete.emit(todo)
  console.log("onlick has been clicked");
  
}

       onCheckboxClick(todo:any){
          this.todoCheckbox.emit(todo)
       }
}
