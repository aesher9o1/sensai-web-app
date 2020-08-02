import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonWebScrappingComponent } from './python-web-scrapping.component';

describe('PythonWebScrappingComponent', () => {
  let component: PythonWebScrappingComponent;
  let fixture: ComponentFixture<PythonWebScrappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PythonWebScrappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PythonWebScrappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
