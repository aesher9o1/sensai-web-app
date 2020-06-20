import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkilledWarriorComponent } from './skilled-warrior.component';

describe('SkilledWarriorComponent', () => {
  let component: SkilledWarriorComponent;
  let fixture: ComponentFixture<SkilledWarriorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkilledWarriorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkilledWarriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
