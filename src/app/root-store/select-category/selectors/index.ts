import { createFeatureSelector, createSelector } from '@ngrx/store';

import { categoryState } from '../state';

export const categorySelector =
  createFeatureSelector<categoryState>('category');

export const brandSelector = createSelector(
  categorySelector,
  (state) => state.brand
);
export const genderSelector = createSelector(
  categorySelector,
  (state) => state.gender
);
export const seasonSelector = createSelector(
  categorySelector,
  (state) => state.season
);
export const eventSelector = createSelector(
  categorySelector,
  (state) => state.event
);
export const typesSelector = createSelector(
  categorySelector,
  (state) => state.types
);
