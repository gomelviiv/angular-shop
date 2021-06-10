import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigureProductCardComponent } from './figure-product-card.component';

describe('FigureProductCardComponent', () => {
  let component: FigureProductCardComponent;
  let fixture: ComponentFixture<FigureProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FigureProductCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FigureProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
