import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { EventsModel } from '../../../services/models/event.model';
import { UsersService } from '../../../services/users.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-applied',
  templateUrl: './applied.component.html',
  styleUrls: ['./applied.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class AppliedComponent implements OnInit, AfterViewInit {

  displayedColumns = ["name", "dateFrom", "dateTo", "location", "rating", "eventType"];
  appliedEventSource = new MatTableDataSource<EventsModel>();
  expandedElement: EventsModel | null;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private usersService: UsersService, private router: Router, private AppComponent: AppComponent) { }

  ngOnInit() {
    if (this.AppComponent.loggedIn == false) {
      this.router.navigate(['']);
    }
    this.appliedEventSource.data = this.appliedEvents();
  }

  ngAfterViewInit() {
    this.appliedEventSource.sort = this.sort;
    this.appliedEventSource.paginator = this.paginator;
  }

  appliedEvents() {
    return null;//this.usersService.appliedEvents();
  }
}