import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JrButtonComponent } from './jr-button.component';

describe('JrButtonComponent', () => {
  let component: JrButtonComponent;
  let fixture: ComponentFixture<JrButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JrButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JrButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
