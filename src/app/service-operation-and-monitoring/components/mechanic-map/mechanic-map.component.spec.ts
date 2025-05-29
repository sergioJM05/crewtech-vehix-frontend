import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicMapComponent } from './mechanic-map.component';

describe('MechanicMapComponent', () => {
  let component: MechanicMapComponent;
  let fixture: ComponentFixture<MechanicMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MechanicMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MechanicMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
