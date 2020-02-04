import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JrButton2Component } from './jr-button2.component';

describe('JrButton2Component', () => {
  let component: JrButton2Component;
  let fixture: ComponentFixture<JrButton2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JrButton2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JrButton2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
