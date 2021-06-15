import { createAction, props } from '@ngrx/store';

import { createConstant } from '@app/root-store/utils';

const typesNames = ['NAVIGATION_CATALOG', 'NAVIGATION_ITEM'] as const;

export type RouterActionsType = {
  [Key in typeof typesNames[number]]: string;
};

export const prefix: string = 'ROUTER';

export const routerActionsType: RouterActionsType =
  createConstant<RouterActionsType>(typesNames, prefix);

export const navigationCatalogItem = createAction(
  routerActionsType.NAVIGATION_ITEM,
  props<{ productId: string }>()
);
