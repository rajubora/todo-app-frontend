import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  constructor(private todoService:TodoService) { }
getTodos():any[]
{return this.todoService.todos;}
  

  ngOnInit(): void {
  }
  DeleteTodo(index:number):void{
   this.todoService.DeleteTodo(index);
  }



}
