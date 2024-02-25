import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
    ) {
    
   }

  retrieveAllTodos(username){
    return this.http.get<Todo[]>(`${API_URL}/user/todos/${username}`);
   //console.log("Exicute Hello World Bean Service");
 }
deleteTodo(username,id){
  return this.http.delete(`${API_URL}/user/todos/${username}/${id}`);
}

 retrieveTodo(username,id){
  return this.http.get<Todo>(`${API_URL}/user/todos/${username}/${id}`);
}

 updateTodo(username,id,todo){
  return this.http.put(`${API_URL}/user/todos/${username}/${id}`,todo);
}
createTodo(username,todo){
  return this.http.post(`${API_URL}/user/todos/${username}`,todo);
}
}
