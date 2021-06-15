import { Injectable, OnDestroy } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { of } from 'rxjs';
import {
  catchError,
  filter,
  map,
  mergeMap,
  switchMap,
  take,
} from 'rxjs/operators';

import { DatabaseService } from '@app/core/services/database.service';
import { AppState } from '@app/root-store';
import { RouterStoreSelectors } from '@app/root-store/router';
import * as ProductActions from '../actions';

@Injectable()
export class ProductEffects implements OnDestroy {
  public getProductItems$ = createEffect(() =>
    this._actions$.pipe(
      ofType(ProductActions.getProduct),
      switchMap(() =>
        this._store$.pipe(
          select(RouterStoreSelectors.selectProductItemId),
          filter((productId) => productId !== undefined),
          take(1)
        )
      ),
      mergeMap((productId) => {
        return this._databaseService.getProductCardById(+productId).pipe(
          map((productCard) =>
            ProductActions.getProductSuccess({ productCard })
          ),
          catchError(() => of(ProductActions.errorProduct()))
        );
      })
    )
  );

  constructor(
    private _actions$: Actions,
    private _store$: Store<AppState>,
    private _databaseService: DatabaseService
  ) {}

  ngOnDestroy(): void {}
}
