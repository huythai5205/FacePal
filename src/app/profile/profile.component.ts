import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  customer;
  constructor(private httpClient: HttpClient, protected localStorage: AsyncLocalStorage, private router: Router) { }

  ngOnInit() {
    this.localStorage.getItem('customer').subscribe((customer) => {
      console.log(customer);
      this.customer = customer;
    });
  }

}
