import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleObjectSelectComponent } from './single-object-select.component';

describe('SingleObjectSelectComponent', () => {
  let component: SingleObjectSelectComponent;
  let fixture: ComponentFixture<SingleObjectSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleObjectSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleObjectSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
