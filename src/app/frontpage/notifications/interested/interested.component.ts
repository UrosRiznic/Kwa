import { Component, OnInit } from '@angular/core';
import { EventsModel } from '../../../services/models/event.model';
import { EventsService } from '../../../services/events.service';
import { UsersService } from '../../../services/users.service';
import { MatDialog } from '@angular/material';
import { JoinEventComponent } from '../../events/join-event/join-event.component';

@Component({
  selector: 'app-interested',
  templateUrl: './interested.component.html',
  styleUrls: ['./interested.component.css']
})
export class InterestedComponent implements OnInit {

  constructor(private eventsService: EventsService, private usersService: UsersService, private dialog: MatDialog) { }

  interestedEvents: Array<EventsModel>;

  ngOnInit() {
    this.interestedEvents = this.eventsService.getInterestingEvents();
  }

  getInterestingEvents() {
    return this.eventsService.getInterestingEvents();
  }

  joinEvent(id: number) {
    this.usersService.getCurrenSession().events.push(id);
    const dialogRef = this.dialog.open(JoinEventComponent);
  }
}
