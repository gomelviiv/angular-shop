import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormSelectSortbyComponent } from './form-select-sortby.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [FormSelectSortbyComponent],
  imports: [CommonModule, MaterialModule],
  exports: [FormSelectSortbyComponent],
})
export class FormSelectSortbyModule {}
