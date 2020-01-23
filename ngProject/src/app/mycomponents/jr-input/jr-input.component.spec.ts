import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JrInputComponent } from './jr-input.component';

describe('JrInputComponent', () => {
  let component: JrInputComponent;
  let fixture: ComponentFixture<JrInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JrInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JrInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
