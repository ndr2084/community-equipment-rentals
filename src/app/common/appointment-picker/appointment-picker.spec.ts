import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentPicker } from './appointment-picker';

describe('AppointmentPicker', () => {
  let component: AppointmentPicker;
  let fixture: ComponentFixture<AppointmentPicker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentPicker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentPicker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
