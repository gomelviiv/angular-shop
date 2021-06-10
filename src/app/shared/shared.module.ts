import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { FigureProductCardComponent } from './figure-product-card/figure-product-card.component';
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
    FigureProductCardComponent,
  ],
  imports: [CommonModule, MaterialModule, FormsModule],
  exports: [
    CommonModule,
    MaterialModule,
    FigureProductCardComponent,
    FormsModule,
    FormSelectCategoryComponent,
    FigureComponent,
    HeaderComponent,
    BasketItemComponent,
  ],
})
export class SharedModule {}
