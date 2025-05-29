import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadPracticesComponent } from './bad-practices.component';

describe('BadPracticesComponent', () => {
  let component: BadPracticesComponent;
  let fixture: ComponentFixture<BadPracticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadPracticesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadPracticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
