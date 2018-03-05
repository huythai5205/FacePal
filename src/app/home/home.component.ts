

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

declare let $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  ngOnInit() {
    $('.carousel').carousel();
    setTimeout($('.carousel').carousel('next'), 4000);
  }
  ngAfterViewInit() {
    $('.carousel').carousel();
    setInterval(() => { $('.carousel').carousel('next') }, 4000);
  }
  constructor(private router: Router) { }
  routeSignUp() {
    this.router.navigate(["signup"]);
  }
  routeLogIn() {
    this.router.navigate(["login"]);
  }
  autoplay() {
    $('.carousel').carousel(('next'), 4000);
  }
}