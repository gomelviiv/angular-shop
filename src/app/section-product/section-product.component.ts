import { ProductCard } from '@app/core/models/productCardModel';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '@app/root-store';
import {
  ProductStoreActions,
  ProductStoreSelectors,
} from '@app/root-store/product';

@Component({
  selector: 'app-section-product',
  templateUrl: './section-product.component.html',
  styleUrls: ['./section-product.component.scss'],
})
export class SectionProductComponent implements OnInit {
  item$!: Observable<ProductCard | undefined>;

  constructor(private _store$: Store<AppState>) {}

  ngOnInit(): void {
    this._store$.dispatch(ProductStoreActions.getProduct());

    this.item$ = this._store$.pipe(
      select(ProductStoreSelectors.selectProductValue)
    );
  }
}
