import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditFailureListComponent } from './audit-failure-list.component';

describe('AuditFailureListComponent', () => {
  let component: AuditFailureListComponent;
  let fixture: ComponentFixture<AuditFailureListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuditFailureListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditFailureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
