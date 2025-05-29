import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemStatusItemComponentComponent } from './system-status-item-component.component';

describe('SystemStatusItemComponentComponent', () => {
  let component: SystemStatusItemComponentComponent;
  let fixture: ComponentFixture<SystemStatusItemComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemStatusItemComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemStatusItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
