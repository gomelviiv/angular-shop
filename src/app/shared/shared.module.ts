import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';
import { FigureModule } from './figure/figure.module';
import { FormSelectCategoryModule } from './form-select-category/form-select-category.module';
import { HeaderModule } from './header/header.module';
import { FigureProductCardComponent } from './figure-product-card/figure-product-card.component';

@NgModule({
  declarations: [FigureProductCardComponent],
  imports: [CommonModule],
  exports: [
    MaterialModule,
    FormSelectCategoryModule,
    FigureModule,
    HeaderModule,
    FigureProductCardComponent,
  ],
})
export class SharedModule {}
