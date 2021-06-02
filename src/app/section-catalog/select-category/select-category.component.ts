import { Component, OnInit } from '@angular/core';

import { CategoryModel } from '../../core/models/categoryModels';
import { selectMenu } from './constants';

@Component({
  selector: 'app-select-category',
  templateUrl: './select-category.component.html',
  styleUrls: ['./select-category.component.scss'],
})
export class SelectCategoryComponent implements OnInit {
  itemsCategory: Array<CategoryModel> = selectMenu;

  constructor() {}
  identity(index: number, item: CategoryModel): number {
    return item.id;
  }
  ngOnInit(): void {}
}
