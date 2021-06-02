import { Component, Input, OnInit } from '@angular/core';

import { trackByIden } from '../../core/utils';
import { SortByModel } from '../../core/models/sortByModels';

@Component({
  selector: 'app-form-select-sortby',
  templateUrl: './form-select-sortby.component.html',
  styleUrls: ['./form-select-sortby.component.scss'],
})
export class FormSelectSortbyComponent implements OnInit {
  @Input() sortItems!: SortByModel;
  trackByIden = trackByIden;

  constructor() {}

  ngOnInit(): void {}
}
