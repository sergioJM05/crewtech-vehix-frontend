import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemStatusListComponent } from './system-status-list.component';

describe('SystemStatusListComponent', () => {
  let component: SystemStatusListComponent;
  let fixture: ComponentFixture<SystemStatusListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemStatusListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemStatusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
