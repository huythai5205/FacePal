import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})

export class LogInComponent {
  private isIncorrect = false;
  constructor(private httpClient: HttpClient, private router: Router, private appComponent: AppComponent) { }
  customer = {
    email: '',
    password: ''
  }

  onSubmit() {
    //TODO: CHANGE TO './api/customer
    this.httpClient.get('http://localhost:3000/api/customer/' + this.customer.email + "+" + this.customer.password).subscribe((data: any) => {
      if (data) {
        this.appComponent.isSignIn = true;
        this.appComponent.customer = data;
        this.router.navigate(['profile']);
      } else {
        this.isIncorrect = true;
      }
    });
  }
}
