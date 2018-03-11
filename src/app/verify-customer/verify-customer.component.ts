import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
//webcam
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";
import { WebcamImage } from 'ngx-webcam';

import { HttpClient } from '@angular/common/http'

declare let $: any;

let confidenceNumber = 0;

@Component({
  selector: 'app-verify-customer',
  templateUrl: './verify-customer.component.html',
  styleUrls: ['./verify-customer.component.css']
})

export class VerifyCustomerComponent implements OnInit {

  public customer;
  public verifyImage = '';
  public isPicture = false;
  public isFunds = true;
  public isUser = true;
  public isVerified = true;
  public isMissingFields = false;
  public transaction = {
    sender: '',
    receiver: '',
    amount: '',
    CustomerId: 0,
  }

  constructor(private httpClient: HttpClient, private appComponent: AppComponent, private router: Router) { }

  ngAfterViewInit() {
    $('#modal1').modal();
  }

  ngOnInit() {
    this.customer = this.appComponent.customer || this.router.navigate(['signup']);
    this.transaction.sender = this.customer.email;
    this.transaction.CustomerId = this.customer.id;
  }

  takeAPicture() {
    $('#modal1').modal('open');
  }

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();

  // latest snapshot
  public webcamImage: WebcamImage = null;

  public triggerSnapshot(): void {
    this.isPicture = true;
    this.trigger.next();
    this.getConfidenceNumber();
  }

  public handleImage(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
    this.verifyImage = this.webcamImage.imageAsDataUrl.split(",")[1];
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  onSubmit() {
    let inputs = $("input");
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value === '') {
        this.isMissingFields = true;
        break;
      }
    }
    if (confidenceNumber > 0.6 && !this.isMissingFields) {
      //check to see if there are enough funds
      if (this.customer.availableFunds >= this.transaction.amount) {
        this.customer.availableFunds -= +this.transaction.amount;
        console.log(this.transaction);
        //update receiver fund
        this.httpClient.put('./api/addFunds', { 'email': this.transaction.receiver, 'amount': this.transaction.amount }).subscribe((receiver: any) => {
          console.log('updated receiver funds')
          //TODO: DELETE localhost:3000 when deploy to heroku
          //adding transaction to sender
          this.httpClient.post('./api/transaction/:', this.transaction).subscribe((data: any) => {
            console.log("add transaction to sender.");
          },
            error => console.log(error));

          //adding transaction to receiver
          this.transaction.CustomerId = receiver.id;
          this.httpClient.post('./api/transaction/:', this.transaction).subscribe((data: any) => {
            console.log("added transaction to receiver.");
          },
            error => console.log(error));

          // update sender fund
          this.httpClient.put('./api/subtractFunds', { 'email': this.transaction.sender, 'amount': this.transaction.amount }).subscribe((sender: any) => {
            console.log(sender);
            this.appComponent.customer = sender;
            this.router.navigate(['profile']);
          }, error => console.log(error));
        },
          error => {
            console.log('User not found.', error);
            this.isUser = false;
          });

      } else {
        this.isFunds = false;
      }

    } else {
      this.isVerified = false;
    }

  }

  getConfidenceNumber() {

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
        confidenceNumber = res.images[0].transaction.confidence;
      }
    };

    var body = {
      'image': this.verifyImage,
      'subject_id': this.customer.firstName + this.customer.lastName,
      'gallery_name': "FirstGallery",
    };

    request.send(JSON.stringify(body));
  }
}
