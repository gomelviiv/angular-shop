import { Component, Input, OnInit } from '@angular/core';

import { CategoryItems, CategoryModel } from '../../core/models/categoryModels';

@Component({
  selector: 'app-form-select-category',
  templateUrl: './form-select-category.component.html',
  styleUrls: ['./form-select-category.component.scss'],
})
export class FormSelectCategoryComponent implements OnInit {
  @Input() item!: CategoryModel;

  constructor() {}

  identity(index: number, item: CategoryItems): string {
    return item.name;
  }

  ngOnInit(): void {}
}
