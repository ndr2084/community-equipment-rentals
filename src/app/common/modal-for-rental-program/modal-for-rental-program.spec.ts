import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalForRentalProgram } from './modal-for-rental-program';

describe('ModalForRentalProgram', () => {
  let component: ModalForRentalProgram;
  let fixture: ComponentFixture<ModalForRentalProgram>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalForRentalProgram]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalForRentalProgram);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
