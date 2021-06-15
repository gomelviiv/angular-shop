import { ProductCard } from '@app/core/models/productCardModel';

export interface ProductState {
  productCard?: ProductCard;
}

export const initialState: ProductState = {};
