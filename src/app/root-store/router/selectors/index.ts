import { Params } from '@angular/router';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

import { State as RouterState } from '../state';
import { AppState } from '@app/root-store';

export const selectRouterState =
  createFeatureSelector<AppState, fromRouter.RouterReducerState<RouterState>>(
    'router'
  );

export const getRouterState = createSelector(
  selectRouterState,
  (state) => (!!state && state.state) || {}
);

export const selectRouterUrl = createSelector<AppState, RouterState, string>(
  getRouterState,
  (routerState: RouterState) => !!routerState && routerState.url
);

export const selectRouterCurrentPath = createSelector<
  AppState,
  RouterState,
  string
>(
  getRouterState,
  (routerState: RouterState) => !!routerState && routerState.currentPath
);

export const selectRouterParams = createSelector<AppState, RouterState, Params>(
  getRouterState,
  (routerState: RouterState) => !!routerState && routerState.params
);

export const selectRouterQueryParams = createSelector<
  AppState,
  RouterState,
  Params
>(
  getRouterState,
  (routerState: RouterState) => !!routerState && routerState.queryParams
);

export const selectProductItemId = createSelector<AppState, Params, string>(
  selectRouterParams,
  (params: Params) => (!!params ? params.productId || null : undefined)
);
