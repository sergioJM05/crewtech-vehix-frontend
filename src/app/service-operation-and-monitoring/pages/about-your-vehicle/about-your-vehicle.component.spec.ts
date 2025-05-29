import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutYourVehicleComponent } from './about-your-vehicle.component';

describe('AboutYourVehicleComponent', () => {
  let component: AboutYourVehicleComponent;
  let fixture: ComponentFixture<AboutYourVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutYourVehicleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutYourVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
