import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurSalonsComponent } from './our-salons.component';

describe('OurSalonsComponent', () => {
  let component: OurSalonsComponent;
  let fixture: ComponentFixture<OurSalonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurSalonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurSalonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
