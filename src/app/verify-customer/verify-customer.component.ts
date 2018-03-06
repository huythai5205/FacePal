import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
//webcam
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";
import { WebcamImage } from 'ngx-webcam';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'

@Component({
  selector: 'app-verify-customer',
  templateUrl: './verify-customer.component.html',
  styleUrls: ['./verify-customer.component.css']
})
export class VerifyCustomerComponent implements OnInit {

  private customer;
  private verifyImage;

  constructor(private httpClient: HttpClient, private appComponent: AppComponent, private router: Router) { }

  ngOnInit() {
    this.customer = this.appComponent.customer || this.router.navigate(['signup']);
  }
  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();

  // latest snapshot
  public webcamImage: WebcamImage = null;

  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public handleImage(webcamImage: WebcamImage): void {
    console.info("received webcam image", webcamImage);
    this.webcamImage = webcamImage;
    this.verifyImage = this.webcamImage.imageAsDataUrl.split(",")[1];
    console.log(this.webcamImage);
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  sendTransaction() {

  }

  onSubmit() {


    var request = new XMLHttpRequest();

    request.open("POST", "https://api.kairos.com/verify");

    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("app_id", "299078c0");
    request.setRequestHeader("app_key", "0004235442d8fe37c6a315b2de0a40e8");

    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        console.log("Status:", this.status);
        console.log("Headers:", this.getAllResponseHeaders());
        const res = JSON.parse(this.responseText);
        console.log("Body:", res);
        console.log(res.images[0].transaction.confidence);
        if (res.images[0].transaction.confidence > 0.6) {

        }
      }
    };

    var body = {
      'image': this.verifyImage,
      'subject_id': this.customer.firstName + this.customer.lastName,
      'gallery_name': "FirstGallery",
    };

    request.send(JSON.stringify(body));

  };

}
