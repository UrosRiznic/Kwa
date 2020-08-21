import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { UsersService } from '../../services/users.service';
import { Router, ActivatedRoute } from "@angular/router";
import { UsersModel } from '../../services/models/user.model';
import { ReputationService } from '../../services/reputation.service';
import {ReputationModel} from '../../services/models/reputation.model';
import { MatDialog } from '@angular/material';

import { EditProfileComponent } from './edit-profile/edit-profile.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userIDtoShow : number = -1;
  userToShow :UsersModel | any;
  imgSRC : string;
  repData : ReputationModel;

  constructor(private userService : UsersService,
    private appComponent : AppComponent,
    private router: Router,
    private route: ActivatedRoute,
    private repService: ReputationService,
    public dialog: MatDialog,
    ) {
      let urlParse = this.router.url.split("=");
      if( typeof urlParse[1] != 'undefined' || urlParse[1] != null ){
        this.userIDtoShow = Number(urlParse[1]);
      }
      if (this.userIDtoShow == -1 ){
        this.userIDtoShow = userService.getCurrenSession().id_user;
      }

  this.userToShow = userService.getProfileData(this.userIDtoShow);
  this.imgSRC = "https://robohash.org/"+this.userToShow.fname+".png";

  this.repData = repService.getReputationOfOneUser(this.userIDtoShow);  
   }

  ngOnInit() {
  }

  editProfile(){
    this.dialog.open(EditProfileComponent, {data: { userid: this.userIDtoShow }},);
  }

  reloadComponent(id){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate(["/profile", {userID: id} ]));
  }

}
