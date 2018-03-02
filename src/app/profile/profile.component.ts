import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  customer: any;

  constructor(private route: ActivatedRoute, private appComponent: AppComponent) { }

  ngOnInit() {
    this.customer = this.appComponent.customer;
    console.log(this.customer);
  }

}
