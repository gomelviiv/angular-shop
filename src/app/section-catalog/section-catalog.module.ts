import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionCatalogRoutingModule } from './section-catalog-routing.module';
import { SectionCatalogComponent } from './section-catalog.component';
import { SelectCategoryModule } from './select-category/select-category.module';
import { ProductCardsComponent } from './product-cards/product-cards.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [SectionCatalogComponent, ProductCardsComponent],
  imports: [
    CommonModule,
    SectionCatalogRoutingModule,
    SelectCategoryModule,
    SharedModule,
  ],
  exports: [SectionCatalogComponent],
})
export class SectionCatalogModule {}
