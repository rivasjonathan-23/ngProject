import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JrContainerComponent } from './jr-container.component';

describe('JrContainerComponent', () => {
  let component: JrContainerComponent;
  let fixture: ComponentFixture<JrContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JrContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JrContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
