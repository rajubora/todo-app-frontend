import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';

const routes: Routes = [
  { path:"add-todo", component:AddTodoComponent },
  {path:"**"  ,component:ToDoListComponent }
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
