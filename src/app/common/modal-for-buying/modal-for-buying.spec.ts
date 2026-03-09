import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalForBuying } from './modal-for-buying';

describe('ModalForBuying', () => {
  let component: ModalForBuying;
  let fixture: ComponentFixture<ModalForBuying>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalForBuying]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalForBuying);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
