import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormForSelling } from './form-for-selling';

describe('FormForSelling', () => {
  let component: FormForSelling;
  let fixture: ComponentFixture<FormForSelling>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormForSelling]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormForSelling);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
