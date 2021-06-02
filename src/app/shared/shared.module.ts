import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';
import { FigureModule } from './figure/figure.module';
import { SectionTextModule } from './section-text/section-text.module';
import { FormSelectCategoryModule } from './form-select-category/form-select-category.module';
import { FormSelectSortbyModule } from './form-select-sortby/form-select-sortby.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [MaterialModule, FormSelectCategoryModule,SectionTextModule, FigureModule, FormSelectSortbyModule],
})
export class SharedModule {}
