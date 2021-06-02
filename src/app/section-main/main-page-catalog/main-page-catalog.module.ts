import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageCatalogComponent } from './main-page-catalog.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [MainPageCatalogComponent],
  imports: [CommonModule, SharedModule],
  exports: [MainPageCatalogComponent],
})
export class MainPageCatalogModule {}
