import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppComponent } from '../../app.component';
import { UsersService } from '../../services/users.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  errorString : string = "";

 constructor(private userService : UsersService, private appComponent : AppComponent,  private router: Router,) { 
 }

  ngOnInit() {
  }

onSubmit (form : NgForm) {
    if (this.userService.validateLogin(form.value.email , form.value.password)){
      this.appComponent.setLoggedIn(true);
      this.errorString = "";
      //___________________________________________ reddirect
      if( this.userService.getCurrenSession().id_user != -1){
        let reddirect_path = "/";
        if(this.userService.getCurrenSession().acc_type == "driver"){
         reddirect_path = "/view-current-rides";
        } else { reddirect_path = "/search-active-rides"; }
       this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
       this.router.navigate([reddirect_path]));
      }
      //___________________________________________ reddirect end
    } else{
      this.errorString = "Invalid email and/or password provided!";
    }
}
    
}
