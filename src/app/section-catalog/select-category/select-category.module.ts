import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectCategoryComponent } from './select-category.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [SelectCategoryComponent],
  imports: [CommonModule, SharedModule],
  exports: [SelectCategoryComponent],
})
export class SelectCategoryModule {}
