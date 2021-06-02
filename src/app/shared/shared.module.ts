import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';
import { FormSelectCategoryModule } from './form-select-category/form-select-category.module';
import { FormSelectSortbyModule } from './form-select-sortby/form-select-sortby.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [MaterialModule, FormSelectCategoryModule, FormSelectSortbyModule],
})
export class SharedModule {}
