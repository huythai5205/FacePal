import { Component, OnInit } from '@angular/core';
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

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['home']);
  }

  logOut() {
    this.isSignIn = false;
    this.router.navigate(['home']);
  }
}
