import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { EventsService } from '../../../services/events.service';
import { EventsModel } from '../../../services/models/event.model';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {

  eventFormGroup: FormGroup;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;

  name: string;
  date_from: Date;
  date_to: Date;
  type: any;
  rating?: number;
  location: string;
  description: string;
  attendance: number;

  constructor(private _formBuilder: FormBuilder, private eventsService: EventsService, private usersService: UsersService, private dialog: MatDialog, private router: Router, private AppComponent: AppComponent) { }


  ngOnInit() {
    if (this.AppComponent.loggedIn == false) {
      this.router.navigate(['/']);
    }

    this.eventFormGroup = this._formBuilder.group({
      eventNameFF: ['', Validators.required]
    });
    this.firstFormGroup = this._formBuilder.group({
      eventLocationFF: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      date_fromFF: ['', Validators.required],
      date_toFF: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      typeFF: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      descriptionFF: ['', Validators.required]
    });
    this.fifthFormGroup = this._formBuilder.group({
      attendanceFF: ['', Validators.required]
    });
  }

  form1() {
    this.location = this.firstFormGroup.value.eventLocationFF;
  }

  form2() {
    this.date_from = this.secondFormGroup.value.date_fromFF;
    this.date_to = this.secondFormGroup.value.date_toFF;
  }

  form3() {
    this.type = this.thirdFormGroup.value.typeFF;
  }

  form4() {
    this.description = this.fourthFormGroup.value.descriptionFF;
  }

  form5() {
    this.attendance = this.fifthFormGroup.value.attendanceFF;
  }

  form6() {
    this.name = this.eventFormGroup.value.eventNameFF;
  }

  final() {
    this.form1(); this.form2(); this.form3(); this.form4(); this.form5(); this.form6();
    var finalEvent: EventsModel = { name: this.name, date_from: this.date_from, date_to: this.date_to, event_type: this.type, location: this.location, description: this.description, attendance: this.attendance, rating: 0 };
    //this.eventsService.createEvent(finalEvent);
    this.router.navigate(['']);
  }
}