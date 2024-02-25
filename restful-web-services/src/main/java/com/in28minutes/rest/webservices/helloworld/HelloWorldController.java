package com.in28minutes.rest.webservices.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class HelloWorldController {
	
	//@RequestMapping(method=RequestMethod.GET,path="/hello-world") //Spring Annotation mapping 
    //Web Service Get request Mapping 
	@GetMapping(path="/hello-world") 
	public String helloWorld() {
		return "Hello World";
	}
	
	//Web Service Get request Mapping with Bean
	@GetMapping(path="/hello-world-bean")  
	public HelloWorldBean helloWorldBean() {
		//throw new RuntimeException("Some thing went wrong please check the flow... ");
		return new HelloWorldBean("Hello World -Changed");
	}
	//Web Service path variable Mapping with name  
	@GetMapping(path="/hello-world/path-variable/{name}")  
	public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
		System.out.println("*******************");
		return new HelloWorldBean(String.format("Hello World, %s",name));
	}
}
