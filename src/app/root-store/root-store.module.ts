import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { environment } from 'environments/environment';
import { SelectCategoryStateModule } from './select-category/select-category-state.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SelectCategoryStateModule,
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
    // StoreRouterConnectingModule.forRoot({
    //   serializer: RouterStoreState.CustomSerializer,
    // }),
    EffectsModule.forRoot([]),
  ],
})
export class RootStoreModule {}
