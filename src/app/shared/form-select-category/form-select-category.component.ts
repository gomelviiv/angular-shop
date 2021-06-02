import { Component, Input, OnInit } from '@angular/core';

import { trackByIden } from '../../core/utils';
import { CategoryModel } from '../../core/models/categoryModels';

@Component({
  selector: 'app-form-select-category',
  templateUrl: './form-select-category.component.html',
  styleUrls: ['./form-select-category.component.scss'],
})
export class FormSelectCategoryComponent implements OnInit {
  @Input() item!: CategoryModel;
  trackByIden = trackByIden;

  constructor() {}

  ngOnInit(): void {}
}
