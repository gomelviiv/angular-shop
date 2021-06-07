import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { cotegoryReducer } from './reducers';
import { CategoryEffects } from './effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('category', cotegoryReducer),
    EffectsModule.forFeature([CategoryEffects]),
  ],
})
export class SelectCategoryStateModule {}
