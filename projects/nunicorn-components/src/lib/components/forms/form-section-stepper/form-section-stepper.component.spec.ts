import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSectionStepperComponent } from './form-section-stepper.component';

describe('FormSectionStepperComponent', () => {
  let component: FormSectionStepperComponent;
  let fixture: ComponentFixture<FormSectionStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSectionStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSectionStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
