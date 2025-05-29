import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicCardListComponent } from './mechanic-card-list.component';

describe('MechanicCardListComponent', () => {
  let component: MechanicCardListComponent;
  let fixture: ComponentFixture<MechanicCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MechanicCardListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MechanicCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
