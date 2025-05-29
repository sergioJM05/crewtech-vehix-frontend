import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentsRepairsComponent } from './recents-repairs.component';

describe('RecentsRepairsComponent', () => {
  let component: RecentsRepairsComponent;
  let fixture: ComponentFixture<RecentsRepairsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentsRepairsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentsRepairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
