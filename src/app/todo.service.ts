import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  todos:any[]=[
    {task:'go to home' , date:'12-05-2022'},
    {task:'go to gym',date:'13-05-2022'},
    {task:'go to college',date:'14-05-2022'}]

   public DeleteTodo(index:number):void{
      let tmparr=[];
      for(let i=0;i<this.todos.length;i++)
      {
        if(i!=index)
        {
        tmparr.push(this.todos[i]);
        }
      }
    this.todos=tmparr;
    }
    public addTodo(newTask:string){
      this.todos.push({task:newTask ,date:new Date().toUTCString()});
    }
    }
