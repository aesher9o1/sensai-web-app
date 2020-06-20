import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadingCoursesComponent } from './leading-courses.component';

describe('LeadingCoursesComponent', () => {
  let component: LeadingCoursesComponent;
  let fixture: ComponentFixture<LeadingCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadingCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadingCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
