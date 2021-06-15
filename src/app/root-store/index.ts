import { ProductStoreState } from './product';
import { RouterStoreState } from './router';

export interface AppState {
  readonly router: RouterStoreState.State;
  readonly product: ProductStoreState.ProductState;
}
