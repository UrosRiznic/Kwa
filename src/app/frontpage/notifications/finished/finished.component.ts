import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog, MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { EventsModel } from '../../../services/models/event.model';
import { EventsService } from '../../../services/events.service';
import { UsersService } from '../../../services/users.service';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { RateComponent } from '../rate/rate.component';

@Component({
  selector: 'app-finished',
  templateUrl: './finished.component.html',
  styleUrls: ['./finished.component.css']
})
export class FinishedComponent implements OnInit, AfterViewInit {

  displayedColumns = ["name", "dateFrom", "dateTo", "location", "rating", "attendance", "eventType", "action"];
  finishedEventSource = new MatTableDataSource<EventsModel>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private eventsService: EventsService, private usersService: UsersService, private dialog: MatDialog, private router: Router, private AppComponent: AppComponent) { }

  ngOnInit() {
    if (this.AppComponent.loggedIn == false) {
      this.router.navigate(['']);
    }
    this.finishedEventSource.data = this.eventsService.getFinishedEvents();
  }

  ngAfterViewInit() {
    this.finishedEventSource.sort = this.sort;
    this.finishedEventSource.paginator = this.paginator;
  }

  onRate(id: number) {
    const dialogRef = this.dialog.open(RateComponent, { data: id });
  }

  applied(id: number) {
    return null;//this.usersService.getActiveUser().events.some(event => event.id == id)
  }

}
