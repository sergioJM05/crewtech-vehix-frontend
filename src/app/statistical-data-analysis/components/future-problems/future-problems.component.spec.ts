import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureProblemsComponent } from './future-problems.component';

describe('FutureProblemsComponent', () => {
  let component: FutureProblemsComponent;
  let fixture: ComponentFixture<FutureProblemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FutureProblemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FutureProblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
