import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'user'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false
  // Navigate login page to Welcome page.
  constructor(private router: Router,
    private hardcodedAuthenticationservice : HardcodedAuthenticationService,
    private basicAuthenticationservice : BasicAuthenticationService) { }

  ngOnInit() {
  }
  handleLogin() {
    //if (this.username === 'thirupathi' && this.password === 'thirupathi') {
      if(this.hardcodedAuthenticationservice.authenticate(this.username,this.password)){
      this.router.navigate(['welcome',this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
    // console.log(this.username);
  }

  handleBasicAuthLogin() {
    //if (this.username === 'thirupathi' && this.password === 'thirupathi') {
       this.basicAuthenticationservice.executeAuthenticationService(this.username,this.password)
       .subscribe(
         data =>{
           console.log(data)
           this.router.navigate(['welcome',this.username])
           this.invalidLogin = false
         },
         error =>{
           console.log(error)
          this.invalidLogin = true
         }
       )
           
  }

}
