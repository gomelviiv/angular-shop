import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';
import { FormSelectCategoryModule } from './form-select-category/form-select-category.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [MaterialModule, FormSelectCategoryModule],
})
export class SharedModule {}
