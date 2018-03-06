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
  private transaction = {
    sender: '',
    receiver: '',
    amount: '',
    CustomerId: 0,
  }

  constructor(private httpClient: HttpClient, private appComponent: AppComponent, private router: Router) { }

  ngOnInit() {
    this.customer = this.appComponent.customer || this.router.navigate(['signup']);
    this.transaction.sender = this.customer.email;
    this.transaction.CustomerId = this.customer.id;
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
    console.log(this.transaction);
    //update receiver fund
    this.httpClient.put('http://localHost:3000/api/addFunds', { 'email': this.transaction.receiver, 'amount': this.transaction.amount }).subscribe((receiver: any) => {
      console.log('updated receiver funds')
      //TODO: DELETE localhost:3000 when deploy to heroku
      // update sender fund
      this.httpClient.put('http://localHost:3000/api/addFunds', { 'email': this.transaction.sender, 'amount': this.transaction.amount }).subscribe((receiver: any) => {
        console.log('updated sender funds.')
      }, error => console.log(error));
      //adding transaction to sender
      this.httpClient.post('http://localHost:3000/api/transaction/:', this.transaction).subscribe((data: any) => {
        console.log("add transaction to sender.");
      },
        error => console.log(error));

      //adding transaction to receiver
      this.transaction.CustomerId = receiver.id;
      this.httpClient.post('http://localHost:3000/api/transaction/:', this.transaction).subscribe((data: any) => {
        console.log("added transaction to receiver.");
      },
        error => console.log(error));
    },
      error => console.log('User not found.', error));


  }

  onSubmit() {


    //   var request = new XMLHttpRequest();

    //   request.open("POST", "https://api.kairos.com/verify");

    //   request.setRequestHeader("Content-Type", "application/json");
    //   request.setRequestHeader("app_id", "299078c0");
    //   request.setRequestHeader("app_key", "0004235442d8fe37c6a315b2de0a40e8");

    //   request.onreadystatechange = function () {
    //     if (this.readyState === 4) {
    //       console.log("Status:", this.status);
    //       console.log("Headers:", this.getAllResponseHeaders());
    //       const res = JSON.parse(this.responseText);
    //       console.log("Body:", res);
    //       console.log(res.images[0].transaction.confidence);
    //       if (res.images[0].transaction.confidence > 0.6) {

    //       }
    //     }
    //   };

    //   var body = {
    //     'image': this.verifyImage,
    //     'subject_id': this.customer.firstName + this.customer.lastName,
    //     'gallery_name': "FirstGallery",
    //   };

    //   request.send(JSON.stringify(body));

    // };

    //TODO: CHANGE TO './api/customer
    if (this.customer.availableFunds >= this.transaction.amount) {
      console.log(this.customer.availableFunds);
      this.customer.availableFunds -= +this.transaction.amount;
      console.log(this.customer);
      this.sendTransaction();
    } else {
      console.log('not enough funds');
    }
  }
}
