import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimatedLifeComponent } from './estimated-life.component';

describe('EstimatedLifeComponent', () => {
  let component: EstimatedLifeComponent;
  let fixture: ComponentFixture<EstimatedLifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstimatedLifeComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EstimatedLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
