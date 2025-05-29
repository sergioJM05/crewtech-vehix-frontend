import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapidDiagnosticComponent } from './rapid-diagnostic.component';

describe('RapidDiagnosticComponent', () => {
  let component: RapidDiagnosticComponent;
  let fixture: ComponentFixture<RapidDiagnosticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RapidDiagnosticComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RapidDiagnosticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
