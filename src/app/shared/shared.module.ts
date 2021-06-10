import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { BasketItemComponent } from './basket-item/basket-item.component';
import { FormSelectCategoryComponent } from './form-select-category/form-select-category.component';
import { HeaderComponent } from './header/header.component';
import { FigureComponent } from './figure/figure.component';

@NgModule({
  declarations: [
    FormSelectCategoryComponent,
    FigureComponent,
    HeaderComponent,
    BasketItemComponent,
  ],
  imports: [CommonModule, MaterialModule, FormsModule],
  exports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FormSelectCategoryComponent,
    FigureComponent,
    HeaderComponent,
    BasketItemComponent,
  ],
})
export class SharedModule {}
