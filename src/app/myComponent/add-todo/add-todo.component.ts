import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import this
import { Todos } from '../../Todos';

@Component({
  selector: 'app-add-todo',
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
title!:string;
desc!:string;
@Output() todoAdd:EventEmitter<Todos>=new EventEmitter();
onSumit(){
  const todo:any={
    sr:1,
    title:this.title,
    desc:this.desc,
    active:true,

  }
  this.todoAdd.emit(todo);

}
}
