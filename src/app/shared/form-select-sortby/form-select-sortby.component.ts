import { Component, Input, OnInit } from '@angular/core';

import { SortByItems, SortByModel } from '../../core/models/sortByModels';

@Component({
  selector: 'app-form-select-sortby',
  templateUrl: './form-select-sortby.component.html',
  styleUrls: ['./form-select-sortby.component.scss'],
})
export class FormSelectSortbyComponent implements OnInit {
  @Input() sortItems!: SortByModel;

  constructor() {}

  identity(index: number, item: SortByItems): number {
    return item.id;
  }

  ngOnInit(): void {}
}
