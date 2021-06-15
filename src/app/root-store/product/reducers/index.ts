import { createReducer, on } from '@ngrx/store';

import * as ProductActions from '../actions';
import { initialState } from '../state';

export const productReducer = createReducer(
  initialState,
  on(ProductActions.getProductSuccess, (state, { productCard }) => ({
    ...state,
    productCard,
  }))
);
