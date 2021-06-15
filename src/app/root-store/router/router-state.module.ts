import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routerReducer } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { RouterEffects } from './effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('router', routerReducer),
    EffectsModule.forFeature([RouterEffects]),
  ],
  exports: [],
  providers: [],
})
export class RouterStateModule {}
