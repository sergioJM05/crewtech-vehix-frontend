import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarUsefulLifeComponent } from './car-useful-life.component';

describe('CarUsefulLifeComponent', () => {
  let component: CarUsefulLifeComponent;
  let fixture: ComponentFixture<CarUsefulLifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarUsefulLifeComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CarUsefulLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
