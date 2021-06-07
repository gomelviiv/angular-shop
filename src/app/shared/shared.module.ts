import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';
import { FigureModule } from './figure/figure.module';
import { FormSelectCategoryModule } from './form-select-category/form-select-category.module';
import { HeaderModule } from './header/header.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    MaterialModule,
    FormSelectCategoryModule,
    FigureModule,
    HeaderModule,
  ],
})
export class SharedModule {}
