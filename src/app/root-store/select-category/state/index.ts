import { CategoryModel } from '@app/core/models';

export interface categoryState {
  gender: number | null;
  brand: number | null;
  season: number | null;
  types: number | null;
  event: number | null;
}

export const initialState: categoryState = {
  gender: null,
  brand: null,
  season: null,
  types: null,
  event: null,
};
