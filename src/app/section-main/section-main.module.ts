import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionMainRoutingModule } from './section-main-routing.module';
import { SectionMainComponent } from './section-main.component';
import { SharedModule } from '@app/shared/shared.module';
import { MainInformationComponent } from './main-information/main-information.component';
import { MainPageCatalogComponent } from './main-page-catalog/main-page-catalog.component';
import { OurArticlesComponent } from './our-articles/our-articles.component';
import { OurSalonsComponent } from './our-salons/our-salons.component';
import { OurSocialNetworksComponent } from './our-social-networks/our-social-networks.component';

@NgModule({
  declarations: [
    SectionMainComponent,
    MainInformationComponent,
    MainPageCatalogComponent,
    OurArticlesComponent,
    OurSalonsComponent,
    OurSocialNetworksComponent,
  ],
  imports: [CommonModule, SharedModule, SectionMainRoutingModule],
  exports: [],
})
export class SectionMainModule {}
