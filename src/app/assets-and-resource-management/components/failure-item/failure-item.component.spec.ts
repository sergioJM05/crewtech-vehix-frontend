import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailureItemComponent } from './failure-item.component';

describe('FailureItemComponent', () => {
  let component: FailureItemComponent;
  let fixture: ComponentFixture<FailureItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FailureItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FailureItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
