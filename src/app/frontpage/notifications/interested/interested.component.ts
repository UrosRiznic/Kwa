import { Component, OnInit } from '@angular/core';
import { EventsModel } from '../../../services/models/event.model';
import { EventsService } from '../../../services/events.service';
import { UsersService } from '../../../services/users.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-interested',
  templateUrl: './interested.component.html',
  styleUrls: ['./interested.component.css']
})
export class InterestedComponent implements OnInit {

  constructor(private eventsService: EventsService, private usersService: UsersService, private dialog: MatDialog) { }

  interestedEvents: Array<EventsModel>;

  ngOnInit() {
    this.interestedEvents = [];//this.eventsService.getInterestingEvents();
  }

  getInterestingEvents() {
    return [];//this.evenstService.getInterestingEvents();
  }

  joinEvent(id: number) {
    let event: EventsModel = this.eventsService.getEvent(id);
    //this.usersService.getActiveUser().events.push(event);
    //const dialogRef = this.dialog.open(JoinEventComponent);
  }
}
