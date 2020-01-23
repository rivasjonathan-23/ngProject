import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JrMaterialComponent } from './jr-material.component';

describe('JrMaterialComponent', () => {
  let component: JrMaterialComponent;
  let fixture: ComponentFixture<JrMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JrMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JrMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
