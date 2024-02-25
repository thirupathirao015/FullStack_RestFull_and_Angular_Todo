package com.in28minutes.rest.webservices.todo;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.in28minutes.rest.webservices.todo.Todo;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class TodoResource {
	
	@Autowired
	private TodoHardCodedService todoService;
    
	@GetMapping("/user/todos/{username}")
	public List<Todo> getAllTodos(@PathVariable String username){
		
		return todoService.findAll();
		
	}
	
	@GetMapping("/user/todos/{username}/{id}")
	public Todo getTodo(@PathVariable String username,@PathVariable long id){
		
		return todoService.findById(id);
		 
	}
	
	@PutMapping("/user/todos/{username}/{id}")
	public ResponseEntity<Todo> updateTodo(
			@PathVariable String username,@PathVariable long id,@RequestBody Todo todo){
		Todo todoUpdated=todoService.save(todo);
		return new ResponseEntity<Todo>(todo,HttpStatus.OK);
	}
	
	@PostMapping("/user/todos/{username}")
	public ResponseEntity<Void> updateTodo(
			@PathVariable String username, @RequestBody Todo todo){
		Todo createdTodo=todoService.save(todo);    
		//Location 
		//Get current resource URL
		//{id}
		URI uri=ServletUriComponentsBuilder.fromCurrentRequest().
		           path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
		return ResponseEntity.created(uri).build();
		 
	}
	
	@DeleteMapping("/user/todos/{username}/{id}")
	public ResponseEntity<Void> delteTodo(
			@PathVariable String username,@PathVariable long id){		
		Todo todo=todoService.deleteById(id);
		if(todo !=null) {
			return ResponseEntity.noContent().build();		
		}
		return ResponseEntity.notFound().build();
	}
}
