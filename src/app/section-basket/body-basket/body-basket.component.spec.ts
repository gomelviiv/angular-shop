import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyBasketComponent } from './body-basket.component';

describe('BodyBasketComponent', () => {
  let component: BodyBasketComponent;
  let fixture: ComponentFixture<BodyBasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyBasketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
