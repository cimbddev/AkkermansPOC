import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerModalPopUpComponent } from './customer-modal-pop-up.component';

describe('CustomerModalPopUpComponent', () => {
  let component: CustomerModalPopUpComponent;
  let fixture: ComponentFixture<CustomerModalPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerModalPopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerModalPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
