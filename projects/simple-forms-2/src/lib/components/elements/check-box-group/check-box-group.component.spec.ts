import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBoxGroupComponent } from './check-box-group.component';

describe('CheckBoxGroupComponent', () => {
  let component: CheckBoxGroupComponent;
  let fixture: ComponentFixture<CheckBoxGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckBoxGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckBoxGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
