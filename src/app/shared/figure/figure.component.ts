import { Component, Input, OnInit } from '@angular/core';

import { ItemsMainPage } from '@app/core/models/itemsMainPageCatalogModels';

@Component({
  selector: 'app-figure',
  templateUrl: './figure.component.html',
  styleUrls: ['./figure.component.scss'],
})
export class FigureComponent implements OnInit {
  @Input() items: Array<ItemsMainPage> | undefined;
  @Input() itemsTile: Array<ItemsMainPage> | undefined;

  constructor() {}

  ngOnInit(): void {}
}
