import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoGalleryGrid } from './photo-gallery-grid';

describe('PhotoGalleryGrid', () => {
  let component: PhotoGalleryGrid;
  let fixture: ComponentFixture<PhotoGalleryGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoGalleryGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoGalleryGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
