import { Component, Input, OnInit } from '@angular/core';
import { changeCategory } from '@app/root-store/select-category/actions';
import { Observable } from 'rxjs';

import { trackById } from '@core/utils';
import { select, Store } from '@ngrx/store';

import { CategoryStoreSelectors } from '@app/root-store/select-category';

@Component({
  selector: 'app-form-select-category',
  templateUrl: './form-select-category.component.html',
  styleUrls: ['./form-select-category.component.scss'],
})
export class FormSelectCategoryComponent implements OnInit {
  @Input() item: any;
  event$!: Observable<number | undefined>;
  trackById = trackById;

  constructor(private _store$: Store) {}

  changingCategory(key: string, payload: number) {
    this._store$.dispatch(changeCategory({ key, payload }));
  }

  ngOnInit(): void {
    this.event$ = this._store$.pipe(
      select(CategoryStoreSelectors.selectValueSelector, this.item.type)
    );
  }
}
