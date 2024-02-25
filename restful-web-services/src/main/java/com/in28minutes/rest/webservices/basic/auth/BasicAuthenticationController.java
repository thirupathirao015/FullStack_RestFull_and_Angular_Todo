package com.in28minutes.rest.webservices.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class BasicAuthenticationController {
	
	
	//Web Service Get request Mapping with Bean
	@GetMapping(path="/basicauth")  
	public AuthenticationBean helloWorldBean() {
		//throw new RuntimeException("Some thing went wrong please check the flow... ");
		System.out.println("AAAAAAAAAAAAAAAAAA BasicAuthenticationController");
		return new AuthenticationBean("you are authenticated");
	}
	 
}
