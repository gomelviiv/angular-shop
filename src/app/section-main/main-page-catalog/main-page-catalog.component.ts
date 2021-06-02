import { Component, OnInit } from '@angular/core';

import {
  ButtonsMainPageCatalog,
  ItemsMainPage,
} from '@app/core/models/itemsMainPageCatalogModels';

import { menuTile, menuButton } from './constant';

@Component({
  selector: 'app-main-page-catalog',
  templateUrl: './main-page-catalog.component.html',
  styleUrls: ['./main-page-catalog.component.scss'],
})
export class MainPageCatalogComponent implements OnInit {
  itemsMenuTiles: Array<ItemsMainPage> = menuTile;
  itemsMenuButtons: Array<ButtonsMainPageCatalog> = menuButton;

  heading = 'Настоящая красота здесь!';
  paragraph = 'К мероприятиям';

  constructor() {}

  identity(index: number, button: ButtonsMainPageCatalog): number {
    return button.id;
  }

  ngOnInit(): void {}
}
