import { NgModule } from '@angular/core';

import { SectionCatalogRoutingModule } from './section-catalog-routing.module';
import { SectionCatalogComponent } from './section-catalog.component';
import { ProductCardsComponent } from './product-cards/product-cards.component';
import { SharedModule } from '@app/shared/shared.module';

import { SelectCategoryComponent } from './select-category/select-category.component';

@NgModule({
  declarations: [
    SectionCatalogComponent,
    SelectCategoryComponent,
    ProductCardsComponent,
  ],
  imports: [SharedModule, SectionCatalogRoutingModule],
  exports: [SectionCatalogComponent],
})
export class SectionCatalogModule {}
