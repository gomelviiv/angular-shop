import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBasketComponent } from './section-basket.component';

describe('SectionBasketComponent', () => {
  let component: SectionBasketComponent;
  let fixture: ComponentFixture<SectionBasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionBasketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
