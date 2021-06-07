import { Component, OnInit } from '@angular/core';

import { SortByModel, CategoryModel } from '@app/core/models';
import { selectMenu, sortItems } from './constants';
import { trackById } from '@core/utils';

@Component({
  selector: 'app-select-category',
  templateUrl: './select-category.component.html',
  styleUrls: ['./select-category.component.scss'],
})
export class SelectCategoryComponent implements OnInit {
  itemsCategory: CategoryModel[] = selectMenu;
  itemsSortBy: SortByModel[] = sortItems;
  trackById = trackById;

  constructor() {}

  ngOnInit(): void {}
}
