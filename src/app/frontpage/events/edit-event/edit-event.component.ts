import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { EventsService } from '../../../services/events.service';
import { EventsModel } from '../../../services/models/event.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  e: EventsModel = null;//this.eventsService.getActiveEvent();
  event: string = this.e.name;
  loc: string = this.e.location;
  dateF: Date = new Date(this.e.date_from);
  dateT: Date = new Date(this.e.date_to);
  event_type: any = this.e.event_type;
  desc: string = this.e.description;
  attend: number = this.e.attendance;

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

  constructor(private dialogRef: MatDialogRef<EditEventComponent>, private eventsService: EventsService, private router: Router, private _formBuilder: FormBuilder) { }

  ngOnInit() {

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

  onClick() {
    this.dialogRef.close();
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
    var finalEvent: EventsModel = { id: this.e.id, name: this.name, date_from: this.date_from, date_to: this.date_to, event_type: this.type, location: this.location, description: this.description, attendance: this.attendance, rating: this.e.rating };
    //this.eventsService.updateEvent(finalEvent);
    this.router.navigate(['']);
    this.onClick();
  }

}
