import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnGenerateReportComponent } from './btn-generate-report.component';

describe('BtnGenerateReportComponent', () => {
  let component: BtnGenerateReportComponent;
  let fixture: ComponentFixture<BtnGenerateReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnGenerateReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnGenerateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
