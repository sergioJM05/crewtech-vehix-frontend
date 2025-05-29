import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemForecastingComponent } from './problem-forecasting.component';

describe('ProblemForecastingComponent', () => {
  let component: ProblemForecastingComponent;
  let fixture: ComponentFixture<ProblemForecastingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProblemForecastingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemForecastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
