import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicCardComponent } from './mechanic-card.component';

describe('MechanicCardComponent', () => {
  let component: MechanicCardComponent;
  let fixture: ComponentFixture<MechanicCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MechanicCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MechanicCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
