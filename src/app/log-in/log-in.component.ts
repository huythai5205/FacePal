import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

  constructor(private httpClient: HttpClient) { }
  customer = {
    email: '',
    password: ''
  }


  onSubmit() {
    this.httpClient.get('./api/customer/' + this.customer.email + "+" + this.customer.password).subscribe((data: any) => {
      console.log("got customer:", data);
      if (data) {
        console.log("you're logged in");
      } else {
        console.log("Invalid email or password");
      }
    });
  }

}
