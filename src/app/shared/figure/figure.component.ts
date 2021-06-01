import { Component, Input, OnInit } from '@angular/core';

import { IItemsMainPage } from '@app/core/models/itemsMainPageCatalogModels';

@Component({
  selector: 'app-figure',
  templateUrl: './figure.component.html',
  styleUrls: ['./figure.component.scss'],
})
export class FigureComponent implements OnInit {
  @Input() items: Array<IItemsMainPage> | undefined;
  @Input() itemsTile: Array<IItemsMainPage> | undefined;

  constructor() {}

  ngOnInit(): void {}
}
