import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'signUp', component: SignUpComponent },
    { path: 'logIn', component: LogInComponent },
    { path: 'profile', component: ProfileComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, SignUpComponent, LogInComponent, ProfileComponent];