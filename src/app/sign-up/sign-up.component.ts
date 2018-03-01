import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent {
  constructor(private httpClient: HttpClient) { }
  customer = {
    firstName: '',
    lastName: '',
    DOB: '',
    email: '',
    password: '',
    photo: ''
  }

  onSubmit() {
    //TODO: DELETE localhost:3000
    this.httpClient.post('http://localHost:3000/api/customer', this.customer).subscribe((data: any) => {
      console.log("sucessfully create customer");
    });
    console.log("submit", this.customer);
  }


  log(x) {
    console.log(x);
  }
}
