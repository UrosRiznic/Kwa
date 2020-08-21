import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';

import { MaterialModule } from './material.module';
import { RoutingModule } from './routing.module';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './frontpage/login/login.component';
import { SignupComponent } from './frontpage/signup/signup.component';


import { ProfileComponent } from './dashboard/profile/profile.component';

import { UsersService } from './services/users.service';
import { NotificationsService } from './services/notification.service';
import { ReputationService } from './services/reputation.service';
import { DriveRidesService } from './services/drive_rides.service';
import { EditProfileComponent } from './dashboard/profile/edit-profile/edit-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule, 
    MaterialModule, 
    RoutingModule,
    BrowserAnimationsModule, 
    FlexLayoutModule,
    FormsModule,
  ],
  providers: [UsersService, ReputationService, DriveRidesService, NotificationsService],
  bootstrap: [AppComponent],
  entryComponents : [
    EditProfileComponent
  ] 
})


export class AppModule {}
