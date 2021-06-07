import { createConstant } from '@app/root-store/utils';
import { createAction, props } from '@ngrx/store';

const typesNames = ['SET_CATEGORY'] as const;

export type CategoryActionType = {
  [Key in typeof typesNames[number]]: string;
};

export const prefix: string = 'CATEGORY';

export const CategoryActionTypes: CategoryActionType =
  createConstant<CategoryActionType>(typesNames, prefix);

export const changeCategory = createAction(
  CategoryActionTypes.SET_CATEGORY,
  props<{ key: string; payload: number }>()
);
