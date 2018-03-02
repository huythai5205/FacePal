import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyCustomerComponent } from './verify-customer.component';

describe('VerifyCustomerComponent', () => {
  let component: VerifyCustomerComponent;
  let fixture: ComponentFixture<VerifyCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
