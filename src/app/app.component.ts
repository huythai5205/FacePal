import { Component, OnInit } from '@angular/core';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FacePal';

  constructor(protected localStorage: AsyncLocalStorage, private router: Router) { }

  logOut() {
    this.localStorage.clear().subscribe(() => {
      this.router.navigate(['home']);
    });
  }
}
