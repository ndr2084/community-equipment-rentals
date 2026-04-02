import { TestBed } from '@angular/core/testing';
import { SignalRegistry } from './signal-registry';



describe('SignalRegistry', () => {
  let service: SignalRegistry;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignalRegistry);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
