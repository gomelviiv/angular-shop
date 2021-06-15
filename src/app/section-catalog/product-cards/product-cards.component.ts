import { Component, OnInit } from '@angular/core';

import { DatabaseService } from '@app/core/services/database.service';
import { trackById } from '@app/core/utils';
import { CategoryStoreSelectors } from '@app/root-store/select-category';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.scss'],
  providers: [DatabaseService],
})
export class ProductCardsComponent implements OnInit {
  productCards: any;
  gender$!: Observable<number | undefined>;
  brand$!: Observable<number | undefined>;
  trackById = trackById;

  constructor(
    private _DatabaseService: DatabaseService,
    private _store$: Store
  ) {}

  ngOnInit(): void {
    this.gender$ = this._store$.pipe(
      select(CategoryStoreSelectors.selectValueSelector, 'gender')
    );
    this.brand$ = this._store$.pipe(
      select(CategoryStoreSelectors.selectValueSelector, 'brand')
    );

    this.gender$
      .pipe(
        switchMap((gender) => this._DatabaseService.getProductCards({ gender }))
      )
      .subscribe((data: any) => (this.productCards = data));
    this.brand$
      .pipe(
        switchMap((brand) => this._DatabaseService.getProductCards({ brand }))
      )
      .subscribe((data: any) => (this.productCards = data));
  }
}
