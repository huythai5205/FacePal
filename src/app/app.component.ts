import { Component, OnInit } from '@angular/core';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'FacePal';
  public customer;
  public isSignIn = false;

  constructor(protected localStorage: AsyncLocalStorage, private router: Router) { }

  ngOnInit() {
    this.localStorage.getItem('customer').subscribe((customer) => {
      console.log(customer);
      if (customer) {
        this.customer = customer;
        this.isSignIn = true;
      }
      this.router.navigate(['signup']);
    });
  }

  logOut() {
    this.localStorage.clear().subscribe(() => {
      this.router.navigate(['home']);
    });
    this.isSignIn = false;
  }
}
