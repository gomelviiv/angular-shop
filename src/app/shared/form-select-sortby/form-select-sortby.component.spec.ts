import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSelectSortbyComponent } from './form-select-sortby.component';

describe('FormSelectSortbyComponent', () => {
  let component: FormSelectSortbyComponent;
  let fixture: ComponentFixture<FormSelectSortbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSelectSortbyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSelectSortbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
