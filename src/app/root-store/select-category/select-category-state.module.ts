import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { cotegoryReducer } from './reducers';

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forFeature('category', cotegoryReducer)],
})
export class SelectCategoryStateModule {}
