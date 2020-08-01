import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BubblesMainComponent } from './bubbles-main.component';

describe('BubblesMainComponent', () => {
  let component: BubblesMainComponent;
  let fixture: ComponentFixture<BubblesMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BubblesMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BubblesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
