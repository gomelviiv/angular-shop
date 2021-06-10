import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CategoryState } from '../state';

export const categorySelector =
  createFeatureSelector<CategoryState>('category');

export const selectValueSelector = createSelector(
  categorySelector,
  (
    state: CategoryState,
    categoryType: keyof CategoryState
  ): number | undefined => state[categoryType]
);
