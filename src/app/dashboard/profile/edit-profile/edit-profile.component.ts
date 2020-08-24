import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import {FormBuilder, FormGroup, Validators,NgForm } from '@angular/forms';
import {UsersService} from '../../../services/users.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  private currentUser;
  private errorString : string = "";
  private userTEMP;

  constructor( private dialogRef: MatDialogRef<EditProfileComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private userService : UsersService,) {
    this.userTEMP  = userService.getProfileData(data.userid);
    this.currentUser = {id_user         : -1,
      fname           : "",
      lname           :"",
      contact_email   : "",
      contact_phone   :"",
      contact_address :"",
      interest        :"",
      password        :""
     
    };
    Object.keys(this.userTEMP).forEach(key=>this.currentUser[key]=this.userTEMP[key]);
  }

   
  ngOnInit() {
  }

  onCancel(){
    this.dialogRef.close();
  }
  onSubmit(form : NgForm) {
    Object.keys(this.currentUser).forEach(key=>this.userTEMP[key]=this.currentUser[key]);
    this.onCancel();
  }

}
