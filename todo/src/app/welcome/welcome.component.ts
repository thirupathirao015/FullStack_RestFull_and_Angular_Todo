import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message = 'Some welcome info '
  welcomeMessageFromService:string
  name = ' '
  //ActivatedRouter
  constructor(
    private router: ActivatedRoute,
    private service: WelcomeDataService) { }

  ngOnInit() {
    console.log(this.message)
    //console.log(this.router.snapshot.params['name'])
    this.name = this.router.snapshot.params['name'];
  }
  getWelcomeMessage(){
    console.log(this.service.exicuteHelloWorldBeanService());
    this.service.exicuteHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response) ,
      error => this.handleErrorResponse(error)
    );
    //console.log("last line of getWelcomeMessage");
    //console.log("Welcome Message");
  }
  getWelcomeMessageWithParameter(){
    this.service.exicuteHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    console.log("last line of getWelcomeMessage");
    //console.log("Welcome Message");
  }

  handleSuccessfulResponse(response){
    this.welcomeMessageFromService = response.message
    //console.log(response);
    //console.log(response.message);
  }
  handleErrorResponse(error){
    this.welcomeMessageFromService = error.error.message;
    console.log(error.error.message);
  }

}
