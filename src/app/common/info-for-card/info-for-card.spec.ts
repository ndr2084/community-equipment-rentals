import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoForCard } from './info-for-card';

describe('InfoForCard', () => {
  let component: InfoForCard;
  let fixture: ComponentFixture<InfoForCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoForCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoForCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
