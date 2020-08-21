import { Component } from '@angular/core';
import { UsersService } from './services/users.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-app';
  loggedIn : boolean = false;

  constructor(private userService : UsersService, private router: Router,){}

  setLoggedIn( value : boolean){
    this.loggedIn = value;
  }
  
  signOut(){
    this.loggedIn = false;
  }
  myProfile(){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate(["/profile"]));
  }
  


}

