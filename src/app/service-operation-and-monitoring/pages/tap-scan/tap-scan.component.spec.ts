import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TapScanComponent } from './tap-scan.component';

describe('TapScanComponent', () => {
  let component: TapScanComponent;
  let fixture: ComponentFixture<TapScanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TapScanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TapScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
