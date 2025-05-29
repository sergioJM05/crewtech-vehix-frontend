import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleIssuesComponent } from './simple-issues.component';

describe('SimpleIssuesComponent', () => {
  let component: SimpleIssuesComponent;
  let fixture: ComponentFixture<SimpleIssuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleIssuesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
