import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

export class HelloWorldBean{
  constructor(public message:string){}
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient 
  ) { }

  exicuteHelloWorldBeanService(){
     return this.http.get<HelloWorldBean>('http://localhost:8143/hello-world-bean');
    //console.log("Exicute Hello World Bean Service");
  }

  //http://localhost:8143/hello-world/path-variable/thirupathi
  exicuteHelloWorldBeanServiceWithPathVariable(name)
  {

    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // //Note: headers=>this name is constant
    //  let headers = new HttpHeaders({
    //   Authorization : basicAuthHeaderString     
    //  });
    // console.log("Exicute Hello World Bean Service");
    return this.http.get<HelloWorldBean>(
      `http://localhost:8143/hello-world/path-variable/${name}`,
      //{headers}
      );
    
 }

//these are springboot security username and password (check application properties in springboot)
  // createBasicAuthenticationHttpHeader(){
  //   let username ='user';
  //   let password ='password';
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  //   console.log(basicAuthHeaderString)
  //   return basicAuthHeaderString;
  // }



  //Access to XMLHttpRequest at 
  //'http://localhost:8143/hello-world/vath-variable/thirupathi' 
  //from origin 'http://localhost:4200' has been blocked by CORS policy: 
  //No 'Access-Control-Allow-Origin' header is present on the requested resource.

  //Access to XMLHttpRequest at
   //'http://localhost:8143/hello-world/path-variable/thirupathi' 
   //from origin 'http://localhost:4200' has been blocked by CORS policy:
   //Response to preflight request doesn't pass access control check: No 
   //'Access-Control-Allow-Origin' header is present on the requested resource.
}
