import { ProductCard } from '@app/core/models/productCardModel';
import { createAction, props } from '@ngrx/store';

import { createConstant } from '@app/root-store/utils';

const typesNames = ['GET_PRODUCT', 'SUCCESS_PRODUCT', 'ERROR_PRODUCT'] as const;

export type ProductActionType = {
  [key in typeof typesNames[number]]: string;
};

export const prefix: string = 'PRODUCT';

export const ProductActionTypes: ProductActionType =
  createConstant<ProductActionType>(typesNames, prefix);

export const getProduct = createAction(ProductActionTypes.GET_PRODUCT);

export const getProductSuccess = createAction(
  ProductActionTypes.SUCCESS_PRODUCT,
  props<{ productCard: ProductCard }>()
);

export const errorProduct = createAction(ProductActionTypes.ERROR_PRODUCT);
