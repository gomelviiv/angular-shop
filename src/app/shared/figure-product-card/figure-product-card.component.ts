import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { RouterStoreActions } from '@app/root-store/router';

@Component({
  selector: 'app-figure-product-card',
  templateUrl: './figure-product-card.component.html',
  styleUrls: ['./figure-product-card.component.scss'],
})
export class FigureProductCardComponent implements OnInit {
  @Input() item: any;
  constructor(private _store$: Store) {}

  navigateToProductItem(itemId: string): void {
    this._store$.dispatch(
      RouterStoreActions.navigationCatalogItem({ productId: itemId })
    );
  }

  ngOnInit() {}
}
