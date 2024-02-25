import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo{
  constructor(
    public id : number,
    public description : string,
    public done : boolean,
    public startDate : Date
  ){

  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  
  todos :Todo[]
  message :String
  // =[
  //   new Todo(1,'Learn to java',false,new Date()),
  //   new Todo(2,' Learn to Angular ',false,new Date()),
  //   new Todo(1,' Learn to Spring boot ',false,new Date()),
    
  // ]
  // todos=[
  //   {id :1, description:'welcome to Java course'},
  //   {id :2, description:'welcome to Sql course'},
  //   {id :3, description:'welcome to Testing course'}
  // ]

  // todo ={
  //   id :1,
  //   description : ' Learn to java'
  // }
  constructor(
    private todoService:TodoDataService,
    private router : Router
  ) { }

  ngOnInit() {
    this.refreshTodos();
  }


  refreshTodos(){
    this.todoService.retrieveAllTodos('in28minutes').subscribe(
      response =>{
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id){
    console.log(`Delete todo ${id}`);
    this.todoService.deleteTodo('in28minutes',id).subscribe(
      response =>{
        console.log(response);
        this.message =`Delete of Todo ${id} Successful!`
        this.refreshTodos();
      }
    )
  }

  updateTodo(id){
    console.log(`update of Todo ${id}`);
    this.router.navigate(['todos',id]);
  }

  addTodo(){
    this.router.navigate(['todos',-1])
  }

}
