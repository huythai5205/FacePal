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

  private customer: any;
  private isPicture: boolean = false;
  private profileImg = '';
  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();

  // latest snapshot
  public webcamImage: WebcamImage = null;

  constructor(private route: Router, private appComponent: AppComponent, private httpClient: HttpClient) { }

  ngOnInit() {
    this.customer = this.appComponent.customer || this.route.navigate(['signup']);
    this.httpClient.get('./api/profile/' + this.customer.email, ).subscribe((data: any) => {
      this.customer = data;
      this.appComponent.customer = data;
      console.log(data);
    });
  }

  ngAfterViewInit() {
    $('#modal1').modal();
  }

  retakePicture() {
    $('#modal1').modal('open');
  }

  onSubmit() {
    this.httpClient.put('./api/updateCustomer', this.customer).subscribe((data: any) => {
      console.log("successfully create customer");
    });
  }

  public triggerSnapshot(): void {
    this.trigger.next();
    this.isPicture = true;
  }

  public handleImage(webcamImage: WebcamImage): void {
    console.info("received webcam image", webcamImage);
    this.webcamImage = webcamImage;
    this.profileImg = this.webcamImage.imageAsDataUrl.split(",")[1];
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }
}