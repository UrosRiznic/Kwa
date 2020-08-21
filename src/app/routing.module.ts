import { NgModule } from '../../node_modules/@angular/core';
import {Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './frontpage/login/login.component';
import { SignupComponent } from './frontpage/signup/signup.component';
import { ProfileComponent } from './dashboard/profile/profile.component';

const rute: Routes = [
{path : '',                     component: LoginComponent ,pathMatch: 'full' },
{path : 'signup',               component: SignupComponent },
{path : 'profile',              component: ProfileComponent }
];

@NgModule ({

    imports: [RouterModule.forRoot(rute)],
    exports: [RouterModule]

})

export class RoutingModule {}
