import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageCatalogComponent } from './main-page-catalog.component';

describe('MainPageCatalogComponent', () => {
  let component: MainPageCatalogComponent;
  let fixture: ComponentFixture<MainPageCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageCatalogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
