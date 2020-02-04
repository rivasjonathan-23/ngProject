import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JrInput2Component } from './jr-input2.component';

describe('JrInput2Component', () => {
  let component: JrInput2Component;
  let fixture: ComponentFixture<JrInput2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JrInput2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JrInput2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
