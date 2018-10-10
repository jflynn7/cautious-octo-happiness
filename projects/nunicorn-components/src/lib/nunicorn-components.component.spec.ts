import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NunicornComponentsComponent } from './nunicorn-components.component';

describe('NunicornComponentsComponent', () => {
  let component: NunicornComponentsComponent;
  let fixture: ComponentFixture<NunicornComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NunicornComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NunicornComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
