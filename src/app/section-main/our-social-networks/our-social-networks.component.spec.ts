import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurSocialNetworksComponent } from './our-social-networks.component';

describe('OurSocialNetworksComponent', () => {
  let component: OurSocialNetworksComponent;
  let fixture: ComponentFixture<OurSocialNetworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurSocialNetworksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurSocialNetworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
