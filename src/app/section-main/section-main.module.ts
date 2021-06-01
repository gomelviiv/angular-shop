import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionMainRoutingModule } from './section-main-routing.module';
import { SectionMainComponent } from './section-main.component';
import { MainInformationModule } from './main-information/main-information.module';
import { MainPageCatalogModule } from './main-page-catalog/main-page-catalog.module';
import { SharedModule } from '@app/shared/shared.module';
import { OurSalonsModule } from './our-salons/our-salons.module';
import { OurArticlesModule } from './our-articles/our-articles.module';
import { OurSocialNetworksModule } from './our-social-networks/our-social-networks.module';

@NgModule({
  declarations: [SectionMainComponent],
  imports: [
    CommonModule,
    SharedModule,
    SectionMainRoutingModule,
    MainInformationModule,
    MainPageCatalogModule,
    OurSalonsModule,
    OurArticlesModule,
    OurSocialNetworksModule,
  ],
  exports: [SectionMainComponent],
})
export class SectionMainModule {}
