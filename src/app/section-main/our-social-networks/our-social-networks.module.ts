import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurSocialNetworksComponent } from './our-social-networks.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [OurSocialNetworksComponent],
  imports: [CommonModule, SharedModule],
  exports: [OurSocialNetworksComponent],
})
export class OurSocialNetworksModule {}
