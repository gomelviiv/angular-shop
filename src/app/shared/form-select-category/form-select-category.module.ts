import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormSelectCategoryComponent } from './form-select-category.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [FormSelectCategoryComponent],
  imports: [CommonModule, MaterialModule],
  exports: [FormSelectCategoryComponent],
})
export class FormSelectCategoryModule {}
