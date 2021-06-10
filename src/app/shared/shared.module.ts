import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { FormSelectCategoryComponent } from './form-select-category/form-select-category.component';
import { FigureComponent } from './figure/figure.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [FormSelectCategoryComponent, FigureComponent, HeaderComponent],
  imports: [CommonModule, MaterialModule, FormsModule],
  exports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FormSelectCategoryComponent,
    FigureComponent,
    HeaderComponent,
  ],
})
export class SharedModule {}
