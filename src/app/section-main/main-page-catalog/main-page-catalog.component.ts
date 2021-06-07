import { Component, OnInit } from '@angular/core';

import { ButtonsMainPageCatalog, ItemsMainPage } from '@app/core/models';
import { trackById } from '@app/core/utils';

import { menuTile, menuButton } from './constant';

@Component({
  selector: 'app-main-page-catalog',
  templateUrl: './main-page-catalog.component.html',
  styleUrls: ['./main-page-catalog.component.scss'],
})
export class MainPageCatalogComponent implements OnInit {
  itemsMenuTiles: ItemsMainPage[] = menuTile;
  itemsMenuButtons: ButtonsMainPageCatalog[] = menuButton;
  trackById = trackById;

  constructor() {}

  ngOnInit(): void {}
}
