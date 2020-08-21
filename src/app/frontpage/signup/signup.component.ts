import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppComponent } from '../../app.component';
import { UsersService } from '../../services/users.service';
import { ReputationService } from '../../services/reputation.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  errorString : string = "";

  constructor(private router : Router,private userService : UsersService, private appComponent : AppComponent, private repService : ReputationService) { }

  ngOnInit() {
  }

  onSubmit(form : NgForm) {
    if(!this.userService.doesEmailExists(form.value.email)){
      let newID = this.userService.addUser(
        form.value.firstName,
        form.value.lastName,
          form.value.email,
          form.value.phone,
          form.value.address,
          form.value.password,
          form.value.typeOfUser
        );
      this.errorString = "";
      this.appComponent.setLoggedIn(true);
      this.userService.validateLogin(form.value.email,form.value.password );
      this.repService.initReputation(newID);

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
      this.errorString = "This email already exist!";
      }
  }
}
