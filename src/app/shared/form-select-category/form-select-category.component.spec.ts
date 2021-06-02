import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSelectCategoryComponent } from './form-select-category.component';

describe('FormSelectCategoryComponent', () => {
  let component: FormSelectCategoryComponent;
  let fixture: ComponentFixture<FormSelectCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSelectCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSelectCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
