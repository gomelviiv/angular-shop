import { Component, Input, OnInit } from '@angular/core';

import { trackById } from '@core/utils';

@Component({
  selector: 'app-form-select-category',
  templateUrl: './form-select-category.component.html',
  styleUrls: ['./form-select-category.component.scss'],
})
export class FormSelectCategoryComponent implements OnInit {
  @Input() item!: any;
  trackById = trackById;

  constructor() {}

  ngOnInit(): void {}
}
