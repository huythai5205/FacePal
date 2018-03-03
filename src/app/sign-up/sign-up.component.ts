import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

export class SignUpComponent implements OnInit, AfterViewInit {
  verifyImage: string;
  constructor(private httpClient: HttpClient) { }
  customer = {
    firstName: '',
    lastName: '',
    DOB: '',
    email: '',
    password: '',
    photo: ''
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $('#modal1').modal();
  }
  onSubmit() {
    //TODO: DELETE localhost:3000 when deploy to heroku
    this.httpClient.post('http://localHost:3000/api/customer', this.customer).subscribe((data: any) => {
      console.log("successfully create customer");
    });
    console.log("submit", this.customer);
    this.onEnroll();
  }


  log(x) {
    console.log(x);
  }

  takeAPicture() {
    console.log("modal");
    $('#modal1').modal('open');
  }
  onEnroll() {

    const corsString: string = 'https://cors-anywhere.herokuapp.com/';
    const urlString: string = 'https://api.kairos.com/enroll'
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
      'image': this.verifyImage,
      'subject_id': 'GarvisSloane',
      'gallery_name': "FirstGallery",
    };

    // //test
    // console.log('enroll.js log' + img);
    // console.log('enroll.js log' + firstName);
    // console.log('enroll.js log' + lastName);

    request.send(JSON.stringify(body));

  }


  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();

  // latest snapshot
  public webcamImage: WebcamImage = null;

  public triggerSnapshot(): void {
    this.trigger.next();
    console.log(this.webcamImage);

  }

  public handleImage(webcamImage: WebcamImage): void {
    console.info("received webcam image", webcamImage);
    this.webcamImage = webcamImage;
    console.log(this.webcamImage);
    this.verifyImage = this.webcamImage.imageAsDataUrl.split(",")[1];
    console.log(this.verifyImage);
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();

  }



}

