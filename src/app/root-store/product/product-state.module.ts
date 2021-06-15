import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { productReducer } from './reducers';
import { ProductEffects } from './effects';
{
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('product', productReducer),
    EffectsModule.forFeature([ProductEffects]),
  ],
})
export class ProductStateModule {}
