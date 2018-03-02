import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})

export class LogInComponent {

  constructor(private httpClient: HttpClient, protected localStorage: AsyncLocalStorage, private router: Router, private appComponent: AppComponent) { }
  customer = {
    email: '',
    password: ''
  }


  onSubmit() {
    //TODO: CHANGE TO './api/customer
    this.httpClient.get('http://localhost:3000/api/customer/' + this.customer.email + "+" + this.customer.password).subscribe((data: any) => {
      console.log("got customer:", data);
      if (data) {
        console.log("you're logged in");
        this.localStorage.setItem('customer', data).subscribe(() => {
          this.appComponent.isSignIn = true;
          this.appComponent.customer = data;
          this.router.navigate(['profile']);
        });
      } else {
        console.log("Invalid email or password");
        this.router.navigate(['home']);
      }
    });
  }


}
