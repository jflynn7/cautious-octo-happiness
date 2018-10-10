import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleObjectSelectComponent } from './multiple-object-select.component';

describe('MultipleObjectSelectComponent', () => {
  let component: MultipleObjectSelectComponent;
  let fixture: ComponentFixture<MultipleObjectSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleObjectSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleObjectSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
