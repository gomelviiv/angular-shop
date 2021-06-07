import { Component, Input, OnInit } from '@angular/core';
import { changeCategory } from '@app/root-store/select-category/actions';

import {
  eventSelector,
  seasonSelector,
} from '@app/root-store/select-category/selectors';

import { trackById } from '@core/utils';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-form-select-category',
  templateUrl: './form-select-category.component.html',
  styleUrls: ['./form-select-category.component.scss'],
})
export class FormSelectCategoryComponent implements OnInit {
  @Input() item: any;
  trackById = trackById;

  event$ = this.store$.pipe(select(eventSelector));

  constructor(private store$: Store) {}

  changingCategory(key: string, payload: number) {
    this.store$.dispatch(changeCategory({ key, payload }));
  }

  ngOnInit(): void {}
}
