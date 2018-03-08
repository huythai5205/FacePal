import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
// Webcam
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";
import { WebcamImage } from 'ngx-webcam';



declare let $: any;
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements AfterViewInit {

  private profileImage: string;
  private isPicture = false;
  private customer = {
    firstName: '',
    lastName: '',
    DOB: '',
    email: '',
    password: ''
  }

  constructor(private httpClient: HttpClient, private router: Router, private appComponent: AppComponent) { }

  ngAfterViewInit() {
    $('#modal1').modal();
  }

  onSubmit() {
    //TODO: DELETE localhost:3000 when deploy to heroku
    this.httpClient.post('http://localHost:3000/api/customer', this.customer).subscribe((data: any) => {
      console.log("successfully create customer");
    });
    this.onEnroll();
    this.appComponent.isSignIn = true;
    this.appComponent.customer = this.customer;
    this.router.navigate(['profile']);
  }

  log(x) {
    console.log(x);
  }

  takeAPicture() {
    $('#modal1').modal('open');
  }
  onEnroll() {

    var request = new XMLHttpRequest();

    request.open("POST", "https://api.kairos.com/enroll");

    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("app_id", "299078c0");
    request.setRequestHeader("app_key", "0004235442d8fe37c6a315b2de0a40e8");

    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        console.log("Status:", this.status);
        console.log("Headers:", this.getAllResponseHeaders());
        console.log("Body:", this.responseText);
      }
    };

    var body = {
      'image': this.profileImage,
      'subject_id': this.customer.firstName + this.customer.lastName,
      'gallery_name': "FirstGallery",
    };

    request.send(JSON.stringify(body));

  }

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();

  // latest snapshot
  public webcamImage: WebcamImage = null;

  public triggerSnapshot(): void {
    this.isPicture = true;
    this.trigger.next();
  }

  public handleImage(webcamImage: WebcamImage): void {
    console.info("received webcam image", webcamImage);
    this.webcamImage = webcamImage;
    this.profileImage = this.webcamImage.imageAsDataUrl.split(",")[1];
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();

  }

}

