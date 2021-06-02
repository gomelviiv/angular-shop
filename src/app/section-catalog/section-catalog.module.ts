import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionCatalogRoutingModule } from './section-catalog-routing.module';
import { SectionCatalogComponent } from './section-catalog.component';
import { SelectCategoryModule } from './select-category/select-category.module';

@NgModule({
  declarations: [SectionCatalogComponent],
  imports: [CommonModule, SectionCatalogRoutingModule, SelectCategoryModule],
  exports: [SectionCatalogComponent],
})
export class SectionCatalogModule {}
