import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesWeTeachComponent } from './courses-we-teach.component';

describe('CoursesWeTeachComponent', () => {
  let component: CoursesWeTeachComponent;
  let fixture: ComponentFixture<CoursesWeTeachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesWeTeachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesWeTeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
