import { Component, Input, OnInit } from '@angular/core';

import { trackByIden } from '@core/utils';

@Component({
  selector: 'app-form-select-category',
  templateUrl: './form-select-category.component.html',
  styleUrls: ['./form-select-category.component.scss'],
})
export class FormSelectCategoryComponent implements OnInit {
  @Input() item!: any;
  trackByIden = trackByIden;

  constructor() {}

  ngOnInit(): void {}
}
