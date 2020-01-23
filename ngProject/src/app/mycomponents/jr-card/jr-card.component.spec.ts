import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JrCardComponent } from './jr-card.component';

describe('JrCardComponent', () => {
  let component: JrCardComponent;
  let fixture: ComponentFixture<JrCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JrCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JrCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
