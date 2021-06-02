import { Component, OnInit } from '@angular/core';

import { SortByModel } from '../../core/models/sortByModels';

import { CategoryModel } from '../../core/models/categoryModels';
import { selectMenu, sortItems } from './constants';

@Component({
  selector: 'app-select-category',
  templateUrl: './select-category.component.html',
  styleUrls: ['./select-category.component.scss'],
})
export class SelectCategoryComponent implements OnInit {
  itemsCategory: Array<CategoryModel> = selectMenu;

  itemsSortBy: SortByModel = sortItems;

  constructor() {}
  identity(index: number, item: CategoryModel): number {
    return item.id;
  }
  ngOnInit(): void {}
}
