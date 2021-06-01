import { Component, OnInit } from '@angular/core';
import {
  IButtonsMainPageCatalog,
  IItemsMainPage,
} from '@app/core/models/itemsMainPageCatalogModels';

import { menuTile, menuButton } from './constant';

@Component({
  selector: 'app-main-page-catalog',
  templateUrl: './main-page-catalog.component.html',
  styleUrls: ['./main-page-catalog.component.scss'],
})
export class MainPageCatalogComponent implements OnInit {
  itemsMenuTiles: Array<IItemsMainPage> = menuTile;
  itemsMenuButtons: Array<IButtonsMainPageCatalog> = menuButton;

  heading = 'Настоящая красота здесь!';
  paragraph = 'К мероприятиям';

  constructor() {}

  ngOnInit(): void {}
}
