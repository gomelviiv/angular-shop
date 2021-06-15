import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { environment } from 'environments/environment';
import { SelectCategoryStateModule } from './select-category/select-category-state.module';
import { RouterStateModule, RouterStoreState } from './router';
import { ProductStateModule } from './product/product-state.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SelectCategoryStateModule,
    ProductStateModule,
    RouterStateModule,
    StoreModule.forRoot(
      {},
      {
        runtimeChecks: {
          strictStateImmutability: false,
          strictActionImmutability: false,
        },
      }
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    StoreRouterConnectingModule.forRoot({
      serializer: RouterStoreState.CustomSerializer,
    }),
    EffectsModule.forRoot([]),
  ],
})
export class RootStoreModule {}
