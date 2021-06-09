import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CategoryState } from '../state';

export const categorySelector =
  createFeatureSelector<CategoryState>('category');

export const brandSelector = createSelector(
  categorySelector,
  (state: CategoryState): number | undefined => state.brand
);
export const genderSelector = createSelector(
  categorySelector,
  (state: CategoryState): number | undefined => state.gender
);
export const seasonSelector = createSelector(
  categorySelector,
  (state: CategoryState): number | undefined => state.season
);
export const eventSelector = createSelector(
  categorySelector,
  (state: CategoryState): number | undefined => state.event
);
export const typesSelector = createSelector(
  categorySelector,
  (state: CategoryState): number | undefined => state.types
);

export const selectValueSelector = (selectType: string) =>
  createSelector(categorySelector, (state: any) => state[selectType]);
