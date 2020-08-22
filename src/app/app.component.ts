import { Component } from '@angular/core';
import { UsersService } from './services/users.service';
import { EventsService } from './services/events.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-app';
  loggedIn : boolean = false;
  hiddenInterested : boolean = false;

  constructor(private usersService : UsersService, private eventsService: EventsService, private router: Router,){}

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
  public interestedEvents(badges: number) {
    if (badges !=0 ) {
      return badges;
    }
    var value = this.eventsService.getFinishedEvents().length;//+this.eventsService.getInterestingEvents().length+this.usersService.appliedEvents().length;
    if (value > 0) {
      return value;
    } else {
      this.hiddenInterested = true;
    }
  }

  public onInterestedBadge(){
    this.hiddenInterested=true;
  }
  


}

