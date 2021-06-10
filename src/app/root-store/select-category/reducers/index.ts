import { createReducer, on } from '@ngrx/store';

import * as CategoryActions from '../actions';
import { initialState } from '../state';

export const cotegoryReducer = createReducer(
  initialState,
  on(CategoryActions.changeCategory, (state, actions) => ({
    ...state,
    [actions.key]: actions.payload,
  }))
);
