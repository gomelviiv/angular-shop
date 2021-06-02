import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCatalogComponent } from './section-catalog.component';

describe('SectionCatalogComponent', () => {
  let component: SectionCatalogComponent;
  let fixture: ComponentFixture<SectionCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionCatalogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
