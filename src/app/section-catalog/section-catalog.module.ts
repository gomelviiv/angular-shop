import { NgModule } from '@angular/core';

import { SectionCatalogRoutingModule } from './section-catalog-routing.module';
import { SectionCatalogComponent } from './section-catalog.component';
import { SelectCategoryComponent } from './select-category/select-category.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [SectionCatalogComponent, SelectCategoryComponent],
  imports: [SharedModule, SectionCatalogRoutingModule],
  exports: [SectionCatalogComponent],
})
export class SectionCatalogModule {}
