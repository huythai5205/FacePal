import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  customer;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get('./api/customer')
      .subscribe((data: any) => {
        this.customer = data.first_name;
        console.log(typeof this.customer);
        console.log(this.customer);
      });
  }

}
