import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import * as RouterActions from '../actions';

@Injectable()
export class RouterEffects implements OnDestroy {
  public navigationCatalogItem$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(RouterActions.navigationCatalogItem),
        tap(({ productId }) => {
          this._router.navigateByUrl(`product/${productId}`);
        })
      ),
    { dispatch: false }
  );

  constructor(private _actions$: Actions, private _router: Router) {}

  ngOnDestroy(): void {}
}
