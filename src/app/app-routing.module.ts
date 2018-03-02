import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { ProfileComponent } from './profile/profile.component';
import { VerifyCustomerComponent } from './verify-customer/verify-customer.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'signup', component: SignUpComponent },
    { path: 'login', component: LogInComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'verify-customer', component: VerifyCustomerComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, SignUpComponent, LogInComponent, ProfileComponent, VerifyCustomerComponent];