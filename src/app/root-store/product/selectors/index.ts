import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ProductCard } from '@app/core/models/productCardModel';
import { ProductState } from '../state';

export const productSelector = createFeatureSelector<ProductState>('product');

export const selectProductValue = createSelector(
  productSelector,
  (state: ProductState): ProductCard | undefined => state.productCard
);
