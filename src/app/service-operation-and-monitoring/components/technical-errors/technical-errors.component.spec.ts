import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalErrorsComponent } from './technical-errors.component';

describe('TechnicalErrorsComponent', () => {
  let component: TechnicalErrorsComponent;
  let fixture: ComponentFixture<TechnicalErrorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnicalErrorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicalErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
