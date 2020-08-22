import { NgModule } from '../../node_modules/@angular/core';
import {Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './frontpage/login/login.component';
import { SignupComponent } from './frontpage/signup/signup.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { EventsComponent } from './frontpage/events/events.component';
import { NotificationsComponent } from './frontpage/notifications/notifications.component';
import { NewEventComponent } from './frontpage/events/new-event/new-event.component';

const rute: Routes = [
{path : '',                     component: LoginComponent ,pathMatch: 'full' },
{path : 'signup',               component: SignupComponent },
{ path: 'login', component: LoginComponent },
{ path: 'profile', component: ProfileComponent },
{ path: 'events', component: EventsComponent },
{ path: 'notifications', component: NotificationsComponent },
{ path: 'new-event', component: NewEventComponent }
];

@NgModule ({

    imports: [RouterModule.forRoot(rute)],
    exports: [RouterModule]

})

export class RoutingModule {}
