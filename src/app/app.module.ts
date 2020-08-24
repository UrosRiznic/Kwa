import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';

import { MaterialModule } from './material.module';
import { RoutingModule } from './routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './frontpage/login/login.component';
import { SignupComponent } from './frontpage/signup/signup.component';


import { ProfileComponent } from './dashboard/profile/profile.component';

import { UsersService } from './services/users.service';
import { NotificationsService } from './services/notification.service';
import { EditProfileComponent } from './dashboard/profile/edit-profile/edit-profile.component';
import { EventsService } from './services/events.service';
import { NotificationsComponent } from './frontpage/notifications/notifications.component';
import { EventsComponent } from './frontpage/events/events.component';
import { NewEventComponent } from './frontpage/events/new-event/new-event.component';
import { EditEventComponent } from './frontpage/events/edit-event/edit-event.component';
import { JoinEventComponent } from './frontpage/events/join-event/join-event.component';
import { AppliedComponent } from './frontpage/notifications/applied/applied.component';
import { InterestedComponent } from './frontpage/notifications/interested/interested.component';
import { FinishedComponent } from './frontpage/notifications/finished/finished.component';
import { RateComponent } from './frontpage/notifications/rate/rate.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    EditProfileComponent,
    NotificationsComponent,
    EventsComponent,
    NewEventComponent,
    EditEventComponent,
    JoinEventComponent,
    AppliedComponent,
    InterestedComponent,
    FinishedComponent,
    RateComponent
  ],
  imports: [
    BrowserModule, 
    MaterialModule, 
    RoutingModule,
    BrowserAnimationsModule, 
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UsersService, EventsService, NotificationsService],
  bootstrap: [AppComponent],
  entryComponents : [
    EditProfileComponent,
    JoinEventComponent
  ] 
})


export class AppModule {}
