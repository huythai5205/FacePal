import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';

//webcam
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";
import { WebcamImage } from 'ngx-webcam';

declare let $: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, AfterViewInit {

  customer: any;
  private isPicture: boolean = false;
  private oldPassword;
  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();

  // latest snapshot
  public webcamImage: WebcamImage = null;

  private profileImg;

  constructor(private route: Router, private appComponent: AppComponent, private httpClient: HttpClient) { }

  ngOnInit() {
    this.customer = this.appComponent.customer || this.route.navigate(['signup']);
    this.oldPassword = this.customer.password;
    console.log(this.customer.Transactions);
  }

  ngAfterViewInit() {
    $('#modal1').modal();
  }

  retakePicture() {
    $('#modal1').modal('open');
  }

  onSubmit() {
    if (this.oldPassword === this.customer.password) {

      this.httpClient.put('http://localHost:3000/api/customer', this.customer).subscribe((data: any) => {
        console.log("successfully create customer");
      });
    }
  }

  public triggerSnapshot(): void {
    this.trigger.next();
    console.log(this.webcamImage);
    this.isPicture = true;
  }

  public handleImage(webcamImage: WebcamImage): void {
    console.info("received webcam image", webcamImage);
    this.webcamImage = webcamImage;
    console.log(this.webcamImage);
    this.profileImg = this.webcamImage.imageAsDataUrl.split(",")[1];
    console.log(this.profileImg);
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }
}
